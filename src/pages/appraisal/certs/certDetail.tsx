import { Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import { usePageTitle, useUser } from '../../../hooks';
import { useEffect, useCallback, useState, useRef } from 'react';
import Loader2 from '../../../components/Loader2';
import { Typeahead } from 'react-bootstrap-typeahead';
import { getBrands, getModelsByBrand } from '../../../helpers/api/carApi';
import { getAllVehicleTypes, getVehicleFields } from '../../../helpers/api/settings';
import { getVehicleByVin, saveImage } from '../../../helpers/api/reception';
import swal from 'sweetalert2';
import { getAppraisalDetail } from '../../../helpers/api/appraisal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { cancelCert, getCertPDF, getCerts, getInspectionTemplate, saveCert, sendCertEmail, validateCert } from '../../../helpers/api/inspection';
import Evaluate from '../appraisal/ecaluate';
import SignatureCanvas from 'react-signature-canvas'
import photoIcon from '../../../assets/images/photo.png';
import StatisticsWidget3 from '../../../components/StatisticsWidget3';
import { FormInput } from '../../../components/form';

const CertDetail = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false);
    const [isOpenV, setIsOpenV] = useState<boolean>(false);
    const toggleV = () => setIsOpenV(!isOpenV);
    const [isOpenI, setIsOpenI] = useState<boolean>(false);
    const toggleI = () => setIsOpenI(!isOpenI);
    const [isOpenF, setIsOpenF] = useState<boolean>(false);
    const toggleF = () => setIsOpenF(!isOpenF);
    const [isOpenG, setIsOpenG] = useState<boolean>(false);
    const toggleG = () => setIsOpenG(!isOpenG);
    const [appraisalData, setAppraisalData] = useState({} as any);
    const [allVehicleTypes, setAllVehicleTypes] = useState<Array<any>>([])
    const [vehicleTypeSelected, setVehicleTypeSelected] = useState<any[]>([]);
    const [brands, setBrands] =  useState<any[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<any[]>([]);
    const [models, setModels] =  useState<any[]>([]);
    const [selectedModel, setSelectedModel] = useState<any[]>([]);
    const [vehicleFields, setVehicleFields] = useState<any[]>([]);
    const [templateData, setTemplateData] = useState([] as any);
    const [loggedInUser] = useUser();
    const [viewerImages, setViewerImages] = useState([] as any);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const navigate = useNavigate();
    const [certData, setCertData] = useState({} as any);
    const signRef = useRef();
    const openImageViewer = useCallback((index: any, images: any) => {
        setViewerImages(images)
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    
    usePageTitle({
        title: 'Detalle de inspección para certificado',
        breadCrumbItems: [
            {
                path: '/appraisal/inspection',
                label: 'Certificado',
            },
            {
                path: '/appraisal/inspection',
                label: 'Certificado',
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

    const loadTemplate = async (id: any) => {
        setLoading(true)
        await loadCerts()
        await loadVehicleTypes()
        await loadBrands();
        (signRef.current as any).clear();
        let result = await getInspectionTemplate({appraisalId: id})
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
            let sign = await getBase64FromUrl(resultAppraisal.data.data.sign_url_2)
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


    useEffect(()=>{
        loadTemplate(params["appraisalId"])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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

    const loadCerts = async () => {
        let response = await getCerts({})
        setCertData(response.data.data.find((cert: any) => cert.cert_id === parseInt(params["id"] || "0")))
    }

    const isInspector = () => {
        if(appraisalData.status){
            if(appraisalData.inspected_for_one === loggedInUser.user_id) return true
            if(appraisalData.inspected_for_two === loggedInUser.user_id) return true
        }
        return false
    }

    const cancel = async () => {
        swal.fire({
            title: '¿Estas seguro de anular el certificado?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28bb4b',
            cancelButtonColor: '#f34e4e',
            confirmButtonText: 'Si, Anular!',
        })
        .then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
                let response: any = await cancelCert({cert_id: params["id"]})
                setLoading(false)
                if(response.data.meta.code === 200) {
                    navigate("/appraisal/certs", { replace: true });
                }
                else {
                    swal.fire("Error",response.data.data.error.message,"error")
                }
            }
        })
    }

    const validate = async () => {
        swal.fire({
            title: '¿Estas seguro de validar el certificado?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28bb4b',
            cancelButtonColor: '#f34e4e',
            confirmButtonText: 'Si, Validar!',
        })
        .then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
                let response: any = await validateCert({cert_id: params["id"]})
                setLoading(false)
                if(response.data.meta.code === 200) {
                    navigate("/appraisal/certs", { replace: true });
                }
                else {
                    swal.fire("Error",response.data.data.error.message,"error")
                }
            }
        })
    }
    
    const save = async () => {
        setLoading(true)

        let b64 = (signRef.current as any).toDataURL()
        let signUpl = await saveImage({
            file: dataURItoBlob(b64),
            description: "Firma de cliente 2",
            name: Date.now() + ".png"
        })
        let result = await saveCert({
            cert_id: certData.cert_id,
            purpose: certData.purpose,
            price: certData.estimated_price,
            vinDoc: certData.vin_doc,
            motorDoc: certData.motor_doc,
            motorVeh: certData.motor_veh,
            signUrl: signUpl.data.data.url,
            attachs: appraisalData.attacheds
        })
        console.log(result.data)
        if(result.data.meta.code === 200){
            loadTemplate(params["appraisalId"])
        }else {
            swal.fire("Error",result.data.data.error.message,"error")
        }
        setLoading(false)
    }
    return <>
        {appraisalData.status && <Row style={{marginTop: "70px"}} hidden={appraisalData.status === "Recepcionado"}>
            <h4 className="header-title"> Encargados de la inspección</h4>
            {
                appraisalData.inspectors.map((u: any) => {
                    return <Col xl={4} md={4}>
                        <StatisticsWidget3
                            variant="warning"
                            avatar={u.profile_picture_url}
                            name={u.name}
                            emailId={u.email}
                            position={u.user_type_name}
                        />
                    </Col>
                })
            }
        </Row>}
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Datos del certificado</h4>
                        <Row>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Label>Precio Final </Form.Label>
                                    <Form.Control disabled={(certData || {}).status !== "Borrador"} value={(certData || {}).estimated_price || ""} type="text" onChange={async (e: any)=>{
                                        setCertData({...certData, estimated_price: e.target.value})
                                    
                                    }}/>
                                </Form.Group>
                            </Col>
                            <Col lg={9}>
                                <FormInput
                                    label={"Proposito de certificado"}
                                    type="select"
                                    name="motor_potency"
                                    containerClass="mb-3"
                                    className="form-select"
                                    key="select0"
                                    value={(certData || {}).purpose || ""}
                                    onChange={async (e: any)=>{
                                        setCertData({...certData, purpose: e.target.value})                                       
                                    }}
                                >
                                    <option value="0">Selecciona uno</option>
                                    <option value="VALOR SUGERIDO PARA DISTRIBUIDORA, YA REBAJADOS LOS GASTOS DE REPARACIÓN">VALOR SUGERIDO PARA DISTRIBUIDORA, YA REBAJADOS LOS GASTOS DE REPARACIÓN</option>
                                    <option value="VALOR SUGERIDO PARA VENTA O COMPRA, YA REBAJADOS LOS GASTOS DE REPARACIÓN">VALOR SUGERIDO PARA VENTA O COMPRA, YA REBAJADOS LOS GASTOS DE REPARACIÓN</option>
                                </FormInput>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Label># Vin en documento </Form.Label>
                                    <Form.Control disabled={(certData || {}).status !== "Borrador"} value={(certData || {}).vin_doc || ""} type="text" onChange={async (e: any)=>{
                                        setCertData({...certData, vin_doc: e.target.value})
                                    
                                    }}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Label># Motor en documento </Form.Label>
                                    <Form.Control disabled={(certData || {}).status !== "Borrador"} value={(certData || {}).motor_doc || ""} type="text" onChange={async (e: any)=>{
                                        setCertData({...certData, motor_doc: e.target.value})
                                    
                                    }}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Label># Motor en vehiculo </Form.Label>
                                    <Form.Control disabled={(certData || {}).status !== "Borrador"} value={(certData || {}).motor_veh || ""} type="text" onChange={async (e: any)=>{
                                        setCertData({...certData, motor_veh: e.target.value})
                                    
                                    }}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title" onClick={toggleG}> <i className={ isOpenG ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Fotos para el certificado</h4>
                        <Collapse in={isOpenG}>
                            <div>
                                <Row>
                                    {
                                      appraisalData.attacheds && appraisalData.attacheds.map((att: any,key: any) => {
                                        return <Col lg={4}>
                                            <div className="img-container">    
                                                <div className="check-icon">
                                                    <i className={ att.selected ? "mdi mdi-check-circle-outline":"mdi mdi-checkbox-blank-circle-outline"}></i>
                                                </div>
                                                <img
                                                className='avatar rounded'
                                                src={ att.url }
                                                onClick={ () => { 
                                                    let copyTemplate = {...appraisalData}
                                                    copyTemplate.attacheds[key] = {...att,selected: !att.selected}
                                                    setAppraisalData(copyTemplate)
                                                } }
                                                width="100%"
                                                height="300px"
                                                key={att.attached_id}
                                                style={{ margin: '2px' }}
                                                alt={att.description}
                                                />
                                            </div>  
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
         <Row style={{marginTop: appraisalData.status === "Recepcionado" ? "70px":"0px"}}>
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
                                                disabled={appraisalData.status !== "En inspección" || !isInspector()}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>{(appraisalData.vehicle || {}).miles_type === "miles" ? "Millaje": "Kilometraje"}</Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text onClick={() => {
                                                    if(appraisalData.status === "En inspección" && isInspector()){
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, miles_type: (appraisalData.vehicle || {}).miles_type === "miles" ? "km": "miles"}})
                                                    }
                                                }}>{(appraisalData.vehicle || {}).miles_type === "miles" ? "Mi": "Km"}</InputGroup.Text>
                                                <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).miles || ""} type="text" onChange={async (e: any)=>{
                                                    setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, miles: e.target.value}})
                                                
                                                }}/>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Placa</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).plate || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, plate: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>VIN</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).vin || ""} type="text" onChange={async (e: any)=>{
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
                                                disabled={appraisalData.status !== "En inspección" || !isInspector()}
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
                                                disabled={appraisalData.status !== "En inspección" || !isInspector()}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Motor</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).motor || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, motor: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Año</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).year || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, year: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Rines</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).wheels || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, wheels: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Equipo de sonido</Form.Label>
                                            <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(appraisalData.vehicle || {}).eq_sound || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, eq_sound: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    {
                                        vehicleFields.map((vf: any, key: number) => {
                                            return <Col lg={3} key={key}>
                                                <Form.Group className="mb-3" controlId="validationCustom01">
                                                    <Form.Label>{vf.name}</Form.Label>
                                                    <Form.Control disabled={appraisalData.status !== "En inspección" || !isInspector()} value={(((appraisalData.vehicle || {}).fields || {})[vf.name] || {}).value || ""} type="text" onChange={async (e: any)=>{
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
                        <h4 className="header-title" onClick={toggleI}> <i className={ isOpenI ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Inspección mecanica</h4>
                        <Collapse in={isOpenI}>
                            <div>
                                <Row>
                                    <Col lg={12}>
                                        <div className="inspection-sections">
                                            {
                                                Object.keys(templateData).map(inspectionSection => {
                                                    return <div className="inspection-section" key={inspectionSection}>
                                                        <h3>{inspectionSection}</h3>
                                                        <table className="inspection-list col-12 text-center">
                                                            <thead>
                                                                <tr>
                                                                    <th className='col-3 text-start'>Descripción</th>
                                                                    <th>Bueno</th>
                                                                    <th>Dañado</th>
                                                                    <th>Precio</th>
                                                                    <th>Notas</th>
                                                                    <th>Fotos</th>                                                
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {
                                                                    templateData[inspectionSection].map((inspectionItem: any, key: any) => {
                                                                        return <tr key={inspectionSection + key}>
                                                                            <td className='text-start'>
                                                                                {inspectionItem.name}
                                                                            </td>
                                                                            <td>
                                                                                <Form.Group className="mb-1 ms-2">
                                                                                    <Form.Check checked={inspectionItem.good || false} disabled={appraisalData.status !== "En inspección" || !isInspector()} type="checkbox" id={"1"} name={"customRadio"+1} onChange={(e) => {
                                                                                        let copyTemplate = {...templateData}
                                                                                        copyTemplate[inspectionSection] = templateData[inspectionSection].map((value2: any, key2: any)=>{
                                                                                            if(key2 === key) return {...value2, good: e.target.checked, damaged: e.target.checked && value2.damaged ? false : value2.damaged}
                                                                                            return value2
                                                                                        })
                                                                                        setTemplateData(copyTemplate)
                                                                                    }}/>
                                                                                </Form.Group>
                                                                            </td>
                                                                            <td>
                                                                                <Form.Group className="mb-1 ms-2">
                                                                                    <Form.Check checked={inspectionItem.damaged || false} disabled={appraisalData.status !== "En inspección" || !isInspector()} type="checkbox" id={"2"} name={"customRadio"+2} onChange={(e) => {
                                                                                        let copyTemplate = {...templateData}
                                                                                        copyTemplate[inspectionSection] = templateData[inspectionSection].map((value2: any, key2: any)=>{
                                                                                            if(key2 === key) return {...value2, damaged:e.target.checked, good: e.target.checked && value2.good ? false : value2.good}
                                                                                            return value2
                                                                                        })
                                                                                        setTemplateData(copyTemplate)
                                                                                    }}/>
                                                                                </Form.Group>
                                                                            </td>
                                                                            <td className='col-1'>
                                                                                <Form.Group>
                                                                                    <Form.Control value={inspectionItem.price || 0} isInvalid={inspectionItem.damaged && inspectionItem.price <= 0} disabled={appraisalData.status !== "En inspección" || !isInspector()} type="text" id={"3"} name={"customRadio"+3} onChange={(e) => {
                                                                                        let copyTemplate = {...templateData}
                                                                                        copyTemplate[inspectionSection] = templateData[inspectionSection].map((value2: any, key2: any)=>{
                                                                                            if(key2 === key) return {...value2, price: parseFloat(e.target.value)}
                                                                                            return value2
                                                                                        })
                                                                                        setTemplateData(copyTemplate)
                                                                                    }}/>
                                                                                </Form.Group>
                                                                            </td>
                                                                            <td>
                                                                                <Form.Group>
                                                                                    <Form.Control value={inspectionItem.notes || ""} isInvalid={inspectionItem.damaged && (inspectionItem.notes === "" || !inspectionItem.notes)} disabled={appraisalData.status !== "En inspección" || !isInspector()} type="text" id={"4"} name={"customRadio"+4} onChange={(e) => {
                                                                                        let copyTemplate = {...templateData}
                                                                                        copyTemplate[inspectionSection] = templateData[inspectionSection].map((value2: any, key2: any)=>{
                                                                                            if(key2 === key) return {...value2, notes: e.target.value}
                                                                                            return value2
                                                                                        })
                                                                                        setTemplateData(copyTemplate)
                                                                                    }}/>
                                                                                </Form.Group>
                                                                            </td>
                                                                            <td className='col-3 display-flex'>
                                                                                <div className="uploadImage" hidden={appraisalData.status !== "En inspección" || !isInspector()}>
                                                                                    <label htmlFor={"file-input"+inspectionSection+"-"+key}>
                                                                                        <img className='avatar-md rounded' src={photoIcon} style={{pointerEvents: "none"}} alt=""/>
                                                                                    </label>
                                                                                    <input  id={"file-input"+inspectionSection+"-"+key} type="file" onChange={(e)=>{
                                                                                        let fileReader = new FileReader();
                                                                                        fileReader.onload = (e: any) => {
                                                                                            const { result } = e.target;
                                                                                            if (result) {
                                                                                                let copyTemplate = {...templateData}
                                                                                                copyTemplate[inspectionSection] = templateData[inspectionSection].map((value2: any, key2: any)=>{
                                                                                                    if(key2 === key) return {...value2, images: (value2.images || []).concat(result)}
                                                                                                    return value2
                                                                                                })
                                                                                                setTemplateData(copyTemplate)
                                                                                            }
                                                                                        }
                                                                                        if(e.target.files && e.target.files.length > 0)
                                                                                            fileReader.readAsDataURL(e.target.files[0]);
                                                                                    }}/>
                                                                                </div>
                                                                                {(inspectionItem.images || []).map((src: any, index: any) => (
                                                                                    <img
                                                                                    className='avatar-md rounded'
                                                                                    src={ src }
                                                                                    onClick={ () => openImageViewer(index,inspectionItem.images || []) }
                                                                                    width="300"
                                                                                    key={ index }
                                                                                    style={{ margin: '2px' }}
                                                                                    alt=""
                                                                                    />
                                                                                ))}
                                                                                {isViewerOpen && (
                                                                                    <ImageViewer
                                                                                    src={ viewerImages || [] }
                                                                                    currentIndex={ currentImage }
                                                                                    disableScroll={ true }
                                                                                    closeOnClickOutside={ true }
                                                                                    onClose={ closeImageViewer }
                                                                                    />
                                                                                )}
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                })
                                            }
                                        </div>
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
                        <h4 className="header-title" onClick={toggleF}> <i className={ isOpenF ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Inspeccion Fisica</h4>
                        <Collapse in={isOpenF}>
                            <div>
                            {
                                
                                appraisalData.appraisal_id && <Evaluate allowPrices={true} allowEdit={appraisalData.status === "En inspección" && isInspector()} appraisalId={appraisalData.appraisal_id} status={appraisalData.status} vehicleType={appraisalData.vehicle_type?.vector}/>
                            }
                            </div>
                        </Collapse>
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
                            <Link  hidden={certData.status !== "Borrador"} to="" className="btn btn-blue rounded-pill w-md waves-effect waves-light ms-2" onClick={async () => {
                                    (signRef.current as any).clear();
                                }}>
                                    <i className="mdi mdi-eraser me-1"></i>
                                    Limpiar
                                </Link>
                        </div>
                        <div className=' d-flex justify-content-center'>
                            <SignatureCanvas ref={signRef} penColor={ certData.status !== "Borrador" ? 'white' :'black'} canvasProps={{width: 500, height: 200, className: 'sigCanvas d-flex justify-content-center'}} />
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className='sticky-buttons'>    
            <Col>
                <Link to="#" className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3" onClick={async () => {
                    setLoading(true)
                    let result = await getCertPDF({certId: params["id"]})
                    console.log(result.data)
                    const blob = new Blob([dataURItoBlob(result.data.data)], { type: 'application/pdf' });
                    const fileURL = URL.createObjectURL(blob);
                    window.open(fileURL, "blank")
                    setLoading(false)
                }}>
                    <i className="mdi mdi-eye me-1"></i>
                    Vista Previa
                </Link>
                
                <Link hidden={(certData || {}).status !== "Borrador"} to="#" onClick={()=>{
                    save()
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-content-save me-1"></i>
                    Guardar
                </Link>
                <Link hidden={(certData || {}).status !== "Borrador"} to="#" onClick={()=>{
                    validate()
                }} className="btn btn-success rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-check me-1"></i>
                    Validar
                </Link>
                <Link hidden={(certData || {}).status !== "Validado"} to="#" onClick={async ()=>{
                    setLoading(true)
                    let result = await sendCertEmail({
                        certId: certData.cert_id
                    })
                    setLoading(false)
                    if(result.data.meta.code === 200){
                        swal.fire("Correo enviado","Se envio un correo con el certificado","success")
                    }else{
                        swal.fire("Error al enviar correo",result.data.meta.message,"error")
                    }
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-email-send me-1"></i>
                    Enviar correo
                </Link>
                <Link hidden={(certData || {}).status !== "Validado"} to="#" onClick={()=>{
                    cancel()
                }} className="btn btn-danger rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-close me-1"></i>
                    Anular
                </Link>
            </Col>
        </Row>
        <Loader2  loading={loading}/>
    </>;
};

export default CertDetail;
