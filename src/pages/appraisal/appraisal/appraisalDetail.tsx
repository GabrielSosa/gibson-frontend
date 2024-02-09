import { Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import { usePageTitle, useUser } from '../../../hooks';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FormInput } from '../../../components/form';
import FileUploader from '../../../components/FileUploader';
import { endAppraisal, getAppraisalDetail, getAppraisalPDF, getEvaluationTemplate, saveAppraisal, sendAppraisalEmail, startAppraisal } from '../../../helpers/api/appraisal';
import swal from 'sweetalert2';
import Evaluate from './ecaluate';
import { getAllVehicleTypes, getVehicleFields } from '../../../helpers/api/settings';
import { getVehicleByVin, saveImage } from '../../../helpers/api/reception';
import SignatureCanvas from 'react-signature-canvas'
import { getBrands, getModelsByBrand } from '../../../helpers/api/carApi';
import Loader2 from '../../../components/Loader2';

type FileType = File & {
    preview?: string;
    formattedSize?: string;
    newName?: string;
    description?: string;
};

const AppraisalDetail = () => {
    const childRef = useRef();
    const signRef = useRef();
    const paymentMethods: any = {
        "card": "Tarjeta",
        "cash": "Efectivo",
        "credit": "Credito",
    }

    const purposes: any = {
        buysell: "Compra venta",
        agency: "Agencia",
        guaranty: "Garantia",
        repair: "Reparacion",
        insurance: "Seguros"
    }
    const [templateData, setTemplateData] = useState([] as any);
    const [appraisalData, setAppraisalData] = useState({} as any);
    const [allVehicleTypes, setAllVehicleTypes] = useState<Array<any>>([])
    const [vehicleTypeSelected, setVehicleTypeSelected] = useState<any[]>([]);
    const [brands, setBrands] =  useState<any[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<any[]>([]);
    const [models, setModels] =  useState<any[]>([]);
    const [selectedModel, setSelectedModel] = useState<any[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);
    const [loading, setLoading] = useState(false);
    const [vehicleFields, setVehicleFields] = useState<any[]>([]);

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpenV, setIsOpenV] = useState<boolean>(false);
    const toggleV = () => setIsOpenV(!isOpenV);

    const [isOpenA, setIsOpenA] = useState<boolean>(false);
    const toggleA = () => setIsOpenA(!isOpenA);

    const [isOpenA2, setIsOpenA2] = useState<boolean>(false);
    const toggleA2 = () => setIsOpenA2(!isOpenA2);

    const params = useParams()
    const [loggedInUser] = useUser();
    
    usePageTitle({
        title: 'Evaluacion Fisica',
        breadCrumbItems: [
            {
                path: '/appraisal/appraisal/appraisal-detail',
                label: 'Avaluos',
            },
            {
                path: '/appraisal/appraisal/appraisal-detail',
                label: 'Evaluacion Fisica',
                active: true,
            },
        ],
    });

    const onChangeBrand = (n: any[]) => {
        if(n.length > 0){
            setSelectedBrand(n);
            setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, brand: n[0].Make_Name}})
            loadModels(n[0].Make_ID);
            setSelectedModel([]);
        }else{
            setSelectedBrand([]);
        }
    };


    const onChangeModel = (n: any[]) => {
        if(n.length > 0){
            setSelectedModel(n);
            setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, model: n[0].Model_Name}})
        }else{
            setSelectedModel([]);
        }
    };

    const loadBrands = async () => {
        let response = await getBrands({})
        setBrands(response.data.Results)
    }

    const loadModels = async (brandId:number) => {
        let response = await getModelsByBrand(brandId)
        setModels(response.data.Results)
    }

    const loadFields = async (vehicleTypeId: number) => {
        let result = await getVehicleFields({vehicleTypeId: vehicleTypeId})
        setVehicleFields(result.data.data)
    }

    const onChangeVehicleType = (vehicleTypes: any[]) => {
        if(vehicleTypes.length > 0){
            loadFields(vehicleTypes[0].vehicle_type_id)
            setVehicleTypeSelected(vehicleTypes);
            setAppraisalData({...appraisalData,vehicle_type: {...appraisalData.vehicle_type, vector: vehicleTypes[0].vector},vehicle: {...appraisalData.vehicle, vehicle_type_id: vehicleTypes[0].vehicle_type_id}})
        } else {
            setVehicleTypeSelected([])
        }
    };

    const loadTemplate = async (id: any) => {
        setLoading(true)
        await loadVehicleTypes()
        await loadBrands();
        (signRef.current as any).clear();
        let result = await getEvaluationTemplate({appraisalId: id})
        if(result.data.meta.code === 200){
            setTemplateData(result.data.data)
        }else {
            swal.fire("Error",result.data.data.error.message,"error")
        }

        let resultAppraisal = await getAppraisalDetail({appraisalId: id})
        if(resultAppraisal.data.meta.code === 200){
            onChangeVehicleType([resultAppraisal.data.data.vehicle_type])
            onChangeBrand([{Make_ID: 99999, Make_Name: resultAppraisal.data.data.vehicle.brand}])
            onChangeModel([{Model_ID: 99999, Model_Name: resultAppraisal.data.data.vehicle.model}])
            setAppraisalData(resultAppraisal.data.data)
            let sign = await getBase64FromUrl(resultAppraisal.data.data.sign_url)
            if(signRef) (signRef.current as any).fromDataURL(sign, { ratio: 1, width: 500, height: 200, xOffset: 0, yOffset: 0 })
        }
        setLoading(false)
    }

    const loadVehicleTypes = async () => {
        let response = await getAllVehicleTypes({})
        setAllVehicleTypes(response.data.data.map((vt: any) => {
            return {...vt, status_color: "success"}
        }))
    }

    const getBase64FromUrl = async (url: any) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob); 
          reader.onloadend = () => {
            const base64data = reader.result;   
            resolve(base64data);
          }
        });
    }

    const dataURItoBlob = (dataURI: any) => {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
    
        //Old Code
        //write the ArrayBuffer to a blob, and you're done
        //var bb = new BlobBuilder();
        //bb.append(ab);
        //return bb.getBlob(mimeString);
    
        //New Code
        return new Blob([ab], {type: mimeString});
    
    
    }

    useEffect(()=>{
        loadTemplate(params["id"])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <>
        <Row style={{marginTop: "70px"}}>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title" onClick={toggle}> <i className={ isOpen ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Informacion Personal</h4>
                        <Collapse in={isOpen}>
                            <div>
                                <Row>
                                    <Col lg={6}>
                                        <FormInput
                                            label={'Solicitante'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={(appraisalData.customer || {}).name || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <FormInput
                                            label={'Telefono'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={(appraisalData.customer || {}).phone || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormInput
                                            label={'Entrega de vehiculo a'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={appraisalData.vehicle_name || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <FormInput
                                            label={'Telefono'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={appraisalData.vehicle_phone || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormInput
                                            label={'Entrega de informe a'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={appraisalData.report_name || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <FormInput
                                            label={'Telefono'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={appraisalData.report_phone || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <FormInput
                                            label={'Proposito'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={(appraisalData.purposes || "").split(",").map((p: any) => {
                                                return purposes[p]
                                            }).join(",")}
                                            disabled={true}
                                        />
                                    </Col>
                                    {
                                        appraisalData.insurance_id > 0 &&
                                        <Col lg={4}>
                                            <FormInput
                                                label={'Seguro en'}
                                                type="text"
                                                name="name"
                                                placeholder="Ingrese el nombre"
                                                containerClass={'mb-3'}
                                                value={(appraisalData.insurer || {}).name || ""}
                                                disabled={true}
                                            />
                                        </Col>
                                    }
                                    <Col lg={4}>
                                        <FormInput
                                            label={'Metodo de pago'}
                                            type="text"
                                            name="name"
                                            placeholder="Ingrese el nombre"
                                            containerClass={'mb-3'}
                                            value={paymentMethods[appraisalData.payment_method] || ""}
                                            disabled={true}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title" onClick={toggleV}> <i className={ isOpenV ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Informacion del vehiculo</h4>
                        <Collapse in={isOpenV}>
                            <div>
                                <Row>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Tipo de vehiculo</Form.Label>
                                            <Typeahead
                                                id="vehicleType"
                                                labelKey={'name'}
                                                multiple={false}
                                                maxResults={4}
                                                onChange={onChangeVehicleType}
                                                options={allVehicleTypes}
                                                placeholder="Escoge un tipo de vehiculo"
                                                selected={vehicleTypeSelected}
                                                disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>{(appraisalData.vehicle || {}).miles_type === "miles" ? "Millaje": "Kilometraje"}</Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text onClick={() => {
                                                    if(appraisalData.status === "En recepción"){
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, miles_type: (appraisalData.vehicle || {}).miles_type === "miles" ? "km": "miles"}})
                                                    }
                                                }}>{(appraisalData.vehicle || {}).miles_type === "miles" ? "Mi": "Km"}</InputGroup.Text>
                                                <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).miles || ""} type="text" onChange={async (e: any)=>{
                                                    setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, miles: e.target.value}})
                                                
                                                }}/>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Placa</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).plate || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, plate: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>VIN</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).vin || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, vin: e.target.value}})
                                            
                                            }}  onBlur={async (e: any) => {

                                                let result = await getVehicleByVin({vin: appraisalData.vehicle.vin})
                                                if(result.data.data.vehicle_id){
                                                    await swal.fire({
                                                        title: 'Ya existe un vehiculo con esta vin',
                                                        icon: 'info',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#28bb4b',
                                                        cancelButtonColor: '#f34e4e',
                                                        confirmButtonText: 'Entendido',
                                                    })
                                                }
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Marca</Form.Label>
                                            <Typeahead
                                                id="brand"
                                                labelKey={'Make_Name'}
                                                multiple={false}
                                                maxResults={4}
                                                options={brands}
                                                allowNew={true}
                                                onChange={onChangeBrand}
                                                placeholder="Escoge una marca..."
                                                selected={selectedBrand}
                                                disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Modelo</Form.Label>
                                            <Typeahead
                                                id="model"
                                                labelKey={'Model_Name'}
                                                multiple={false}
                                                maxResults={4}
                                                options={models}
                                                allowNew={true}
                                                onChange={onChangeModel}
                                                selected={selectedModel}
                                                placeholder="Escoge un modelo..."
                                                disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Motor</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).motor || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, motor: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Año</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).year || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, year: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Rines</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).wheels || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, wheels: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Equipo de sonido</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(appraisalData.vehicle || {}).eq_sound || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, eq_sound: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    {
                                        vehicleFields.map((vf: any, key: number) => {
                                            return <Col lg={3} key={key}>
                                                <Form.Group className="mb-3" controlId="validationCustom01">
                                                    <Form.Label>{vf.name}</Form.Label>
                                                    <Form.Control disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} value={(((appraisalData.vehicle || {}).fields || {})[vf.name] || {}).value || ""} type="text" onChange={async (e: any)=>{
                                                        let tempApp = {...appraisalData,vehicle: {...appraisalData.vehicle}}
                                                        if(tempApp.vehicle.fields[vf.name]){
                                                            tempApp.vehicle.fields[vf.name].value = e.target.value
                                                        } else {
                                                            tempApp.vehicle.fields[vf.name] = {value: e.target.value}
                                                        }
                                                        setAppraisalData(tempApp)                                                    
                                                    }}/>
                                                </Form.Group>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title" onClick={toggleA2}> <i className={ isOpenA2 ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Anexos de recepcion</h4>
                        <Collapse in={isOpenA2}>
                            <div className='anexos-list'>
                                {appraisalData.attacheds?.filter((anexo: any) => anexo.type === "reception").map((anexo: any)=>{
                                    return <div className='anexo-item' key={anexo.id}>
                                        <div className="description">
                                            {anexo.description === 'undefined' ? '': anexo.description}
                                        </div>
                                        <div className="img-container">
                                            <img src={anexo.url} alt="" />
                                        </div>
                                    </div>
                                })}
                                
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </Col>
        </Row>        
        <Row>
            <Col lg={4}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Lista de evaluación</h4>
                        <div className="appraisal-list">
                            {
                                Object.keys(templateData).map((extra: any) => {
                                    return <div key={extra} className="appraisal-item">
                                        <div className="appraisal-name">
                                            <h4>{extra}</h4>
                                        </div>
                                        <table className='fit-table'>
                                            <thead>
                                                <tr>
                                                    <th>Descripcion </th>
                                                    {
                                                        (templateData[extra][0] && templateData[extra][0].columns) ? templateData[extra][0].columns.split(",").map((col: any, keyCol: any)=>{
                                                            return <th className="verticalTableHeader" key={keyCol}>{col}</th>
                                                        }) : <>
                                                        </>
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {templateData[extra].map((value: any, key: any)=>{
                                                    return <tr key={(value.name)+key}>
                                                        <td style={{textAlign: "left"}}>{value.name}</td>
                                                        {
                                                            value.type === "check" && <>
                                                            
                                                                <td>
                                                                    <Form.Group className="mb-1 ms-2">
                                                                        <Form.Check checked={value.has} disabled={value.not_has || appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id} type="checkbox" id={key} name={"customRadio"+key} onChange={(e) => {
                                                                            let copyTemplate = {...templateData}
                                                                            copyTemplate[extra] = templateData[extra].map((value2: any, key2: any)=>{
                                                                                if(key2 === key) return {...value2, has: e.target.checked, fix: !e.target.checked ? false : value2.fix || false}
                                                                                return value2
                                                                            })
                                                                            setTemplateData(copyTemplate)
                                                                        }}/>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="mb-1 ms-2">
                                                                        <Form.Check checked={value.not_has} disabled={value.has || appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id} type="checkbox" id={key} name={"customRadio"+key} onChange={(e) => {
                                                                            let copyTemplate = {...templateData}
                                                                            copyTemplate[extra] = templateData[extra].map((value2: any, key2: any)=>{
                                                                                if(key2 === key) return {...value2, not_has: e.target.checked}
                                                                                return value2
                                                                            })
                                                                            setTemplateData(copyTemplate)
                                                                        }}/>
                                                                    </Form.Group>
                                                                </td>
                                                                <td>
                                                                    <Form.Group className="mb-1 ms-2">
                                                                        <Form.Check checked={value.fix} disabled={!value.has || appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id} type="checkbox" id={key} name={"customRadio"+key} onChange={(e) => {
                                                                            let copyTemplate = {...templateData}
                                                                            copyTemplate[extra] = templateData[extra].map((value2: any, key2: any)=>{
                                                                                if(key2 === key) return {...value2, fix: value2.has ? e.target.checked : false,}
                                                                                return value2
                                                                            })
                                                                            setTemplateData(copyTemplate)
                                                                        }}/>
                                                                    </Form.Group>
                                                                </td>
                                                            </>
                                                        }
                                                        {
                                                            value.type === "input" && <>
                                                                <td colSpan={6}>
                                                                    <Form.Group>
                                                                        <Form.Control value={value.value} disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id} type="text" id={key} name={"customRadio"+key} onChange={(e) => {
                                                                            let copyTemplate = {...templateData}
                                                                            copyTemplate[extra] = templateData[extra].map((value2: any, key2: any)=>{
                                                                                if(key2 === key) return {...value2, value: e.target.value}
                                                                                return value2
                                                                            })
                                                                            setTemplateData(copyTemplate)
                                                                        }}/>
                                                                    </Form.Group>
                                                                </td>
                                                            </>
                                                        }
                                                        {
                                                            value.type === "option" && <>
                                                                <td colSpan={6}>
                                                                    <FormInput
                                                                        type="select"
                                                                        name="air_bags"
                                                                        className={"form-select"}
                                                                        key="select0"
                                                                        disabled={appraisalData.status !== "En recepción"  || appraisalData.valuated_for !== loggedInUser.user_id}
                                                                        value={value.value}
                                                                        onChange={async (e: any)=>{
                                                                            setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, air_bags: e.target.value}})  
                                                                            let copyTemplate = {...templateData}
                                                                            copyTemplate[extra] = templateData[extra].map((value2: any, key2: any)=>{
                                                                                if(key2 === key) return {...value2, value: e.target.value}
                                                                                return value2
                                                                            })
                                                                            setTemplateData(copyTemplate)                                          
                                                                        }}
                                                                    >
                                                                        <option value="">Seleccionar</option>
                                                                        {
                                                                            value.options.split(",").map((col: any, keyCol: any)=>{
                                                                                return <option value={col} key={keyCol+"kc"}>{col}</option>
                                                                            })
                                                                        }
                                                                    </FormInput>
                                                                </td>
                                                            </>
                                                        }
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                })
                            }
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={8}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Inspeccion Fisica</h4>
                        <Evaluate appraisalId={params["id"]} allowEdit={appraisalData.status === "En recepción" && appraisalData.valuated_for === loggedInUser.user_id} status={appraisalData.status} vehicleType={appraisalData.vehicle_type?.vector}/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title" onClick={toggleA}> <i className={ isOpenA ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Anexos de Inspección</h4>
                        <Collapse in={isOpenA}>
                            <div className='anexos-list'>
                                {appraisalData.attacheds?.filter((anexo: any) => anexo.type === "phisyc").map((anexo: any)=>{
                                    return <div className='anexo-item' key={anexo.id}>
                                        <div className="description">
                                            {anexo.description === 'undefined' ? '': anexo.description}
                                        </div>
                                        <div className="img-container">
                                            <img src={anexo.url} alt="" />
                                        </div>
                                    </div>
                                })}
                                
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row hidden={appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id}>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Sube Anexos</h4>
                        <Row>
                            <Col lg={12}>
                                <FileUploader
                                    ref={childRef}
                                    label="Cargar fotos como anexos a la inspeccion del vehiculo"
                                    showPreview = {true}
                                    multi = {true}
                                    onFileUpload={(files: FileType[]) => {
                                        setSelectedFiles(files);
                                    }}
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row hidden={appraisalData.status === "Por recepcionar"}>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <div className='d-flex justify-content-center align-items-center mb-2'>
                            <h4 className="header-title">Firma del cliente</h4>
                            <Link  hidden={appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id} to="" className="btn btn-blue rounded-pill w-md waves-effect waves-light ms-2" onClick={async () => {
                                    (signRef.current as any).clear();
                                }}>
                                    <i className="mdi mdi-eraser me-1"></i>
                                    Limpiar
                                </Link>
                        </div>
                        <div className=' d-flex justify-content-center'>
                            <SignatureCanvas ref={signRef} penColor={ appraisalData.status !== "En recepción" ? 'white' :'black'} canvasProps={{width: 500, height: 200, className: 'sigCanvas d-flex justify-content-center'}} />
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
        <Row className='sticky-buttons'>    
            <Col>
                <Link hidden={appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id} to="#" className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3" onClick={async () => {
                    setLoading(true)
                    let allUps: any = []
                    await selectedFiles.reduce(async (previousPromise: any, file: FileType) => {
                        await previousPromise
                        let newUpl = await saveImage({
                            file: file,
                            description: file.description,
                            name: file.newName
                        })
                        if(newUpl.data.meta.code === 200) allUps.push(newUpl.data.data);
                        return Promise.resolve()
                    }, Promise.resolve())
                    let b64 = (signRef.current as any).toDataURL()
                    let signUpl = await saveImage({
                        file: dataURItoBlob(b64),
                        description: "Firma de cliente",
                        name: Date.now() + ".png"
                    })
                    let result = await saveAppraisal({
                        vehicleData: appraisalData.vehicle,
                        templateData: templateData,
                        appraisalId: appraisalData.appraisal_id,
                        allUps: allUps,
                        signUrl: signUpl.data.data.url
                    })
                    if(result.data.meta.code === 200){
                        
                        (childRef.current as any).clearFiles();
                        setSelectedFiles([])
                        loadTemplate(appraisalData.appraisal_id)
                    }else {
                        swal.fire("Error",result.data.data.error.message,"error")
                    }
                    setLoading(false)
                }}>
                    <i className="mdi mdi-content-save me-1"></i>
                    Guardar
                </Link>
                <Link hidden={appraisalData.status !== "En recepción" || appraisalData.valuated_for !== loggedInUser.user_id} to="#" className="btn btn-success rounded-pill w-md waves-effect waves-light mb-3 ms-1" onClick={async () => {
                    let res = await swal.fire({
                        title: '¿Estas seguro de terminar el avalúo?',
                        text: "Se dara por terminada la evalución física",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#28bb4b',
                        cancelButtonColor: '#f34e4e',
                        confirmButtonText: 'Si, Terminar!',
                    })
                    if (res.isConfirmed) {
                        setLoading(true)
                        let result = await endAppraisal({appraisalId: appraisalData.appraisal_id})
                        setLoading(false)
                        if(result.data.meta.code === 200){
                            navigate("/appraisal/appraisal", { replace: true });
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }
                }}>
                    <i className="mdi mdi-check me-1"></i>
                    Finalizar evaluación 
                </Link>
                <Link hidden={appraisalData.status === "Por recepcionar" || appraisalData.status === "En recepción"} to="#" className="btn btn-success rounded-pill w-md waves-effect waves-light mb-3 ms-1" onClick={async () => {
                    let res = await swal.fire({
                        title: '¿Estas seguro de enviar el correo?',
                        text: "Se enviara toda la información recolectada en la inspección al cliente.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#28bb4b',
                        cancelButtonColor: '#f34e4e',
                        confirmButtonText: 'Si, Enviar!',
                    })
                    if (res.isConfirmed) {
                        setLoading(true)
                        var canvas: any = document.getElementById("canvas")
                        var canvas2: any = document.getElementById("canvas_bars")
                        var pngUrl = canvas.toDataURL();
                        let inspectURL = await saveImage({
                            file: dataURItoBlob(pngUrl),
                            description: "Avaluo",
                            name: Date.now() + ".png"
                        })

                        var pngUrlBars = canvas2.toDataURL();
                        let inspectURLBars = await saveImage({
                            file: dataURItoBlob(pngUrlBars),
                            description: "Avaluo Bars",
                            name: Date.now() + "_bars.png"
                        })

                        let result = await sendAppraisalEmail({appraisalId: appraisalData.appraisal_id, appraisal: inspectURL.data.data.url, bars: inspectURLBars.data.data.url})
                        setLoading(false)
                        if(result.data.meta.code === 200){
                            swal.fire("Enviado","Correo enviado con exito", "success");
                        }
                    }
                }}>
                    <i className="mdi mdi-send me-1"></i>
                    Enviar correo
                </Link>
                <Link hidden={appraisalData.status === "Por recepcionar" || appraisalData.status === "En recepción"} to="#" className="btn btn-success rounded-pill w-md waves-effect waves-light mb-3 ms-1" onClick={async () => {
 
                    setLoading(true)
                    var canvas: any = document.getElementById("canvas")
                    var canvas2: any = document.getElementById("canvas_bars")
                    var pngUrl = canvas.toDataURL();
                    let inspectURL = await saveImage({
                        file: dataURItoBlob(pngUrl),
                        description: "Avaluo",
                        name: Date.now() + ".png"
                    })

                    var pngUrlBars = canvas2.toDataURL();
                    let inspectURLBars = await saveImage({
                        file: dataURItoBlob(pngUrlBars),
                        description: "Avaluo Bars",
                        name: Date.now() + "_bars.png"
                    })

                    let result = await getAppraisalPDF({appraisalId: appraisalData.appraisal_id, appraisal: inspectURL.data.data.url, bars: inspectURLBars.data.data.url})
                    setLoading(false)
                    const blob = new Blob([dataURItoBlob(result.data.data)], { type: 'application/pdf' });
                    const fileURL = URL.createObjectURL(blob);
                    window.open(fileURL, "blank")
                }}>
                    <i className="mdi mdi-printer me-1"></i>
                    Imprimir
                </Link>
                {appraisalData.status && <Link hidden={appraisalData.status !== "Por recepcionar"} to="#" className="ms-1 btn btn-info rounded-pill w-md waves-effect waves-light mb-3" onClick={async () => {
                    let res = await swal.fire({
                        title: '¿Estas seguro de iniciar el avalúo?',
                        text: "Se te asignara este vehiculo y deberas completar la evalución física",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#28bb4b',
                        cancelButtonColor: '#f34e4e',
                        confirmButtonText: 'Si, Iniciar!',
                    })
                    if (res.isConfirmed) {
                        setLoading(true)
                        let result = await startAppraisal({appraisalId: appraisalData.appraisal_id})
                        setLoading(false)
                        if(result.data.meta.code === 200){
                            loadTemplate(appraisalData.appraisal_id)
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }

                    }}>
                        <i className="mdi mdi-content-paste me-1"></i>
                        Iniciar evaluación
                </Link>}
            </Col>
        </Row>
        
        <Loader2 loading={loading}/>
    </>;
};

export default AppraisalDetail;
