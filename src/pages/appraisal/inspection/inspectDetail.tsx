import { Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import { usePageTitle, useUser } from '../../../hooks';
import { useEffect, useCallback, useState } from 'react';
import Loader2 from '../../../components/Loader2';
import { Typeahead } from 'react-bootstrap-typeahead';
import { getBrands, getModelsByBrand } from '../../../helpers/api/carApi';
import { getAllVehicleTypes, getVehicleFields } from '../../../helpers/api/settings';
import { getVehicleByVin, saveImage } from '../../../helpers/api/reception';
import swal from 'sweetalert2';
import { getAppraisalDetail } from '../../../helpers/api/appraisal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { endInspection, getInspectionTemplate, saveInspection, startInspection } from '../../../helpers/api/inspection';
import Evaluate from '../appraisal/ecaluate';
import photoIcon from '../../../assets/images/photo.png';
import StatisticsWidget3 from '../../../components/StatisticsWidget3';
import { FormInput } from '../../../components/form';

const InspectionDetail = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false);
    const [isOpenV, setIsOpenV] = useState<boolean>(false);
    const toggleV = () => setIsOpenV(!isOpenV);
    const [isOpenP, setIsOpenP] = useState<boolean>(false);
    const toggleP = () => setIsOpenP(!isOpenP);
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
    const navigate = useNavigate();
    const [viewerImages, setViewerImages] = useState([] as any);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
  
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
        title: 'Detalle de inspección',
        breadCrumbItems: [
            {
                path: '/appraisal/inspection',
                label: 'Inspección',
            },
            {
                path: '/appraisal/inspection',
                label: 'Inspección',
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
        console.log(loggedInUser)
        loadTemplate(params["id"])
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

    const isInspector = () => {
        
        if((appraisalData.status && appraisalData.status !== "Inspeccionado") || loggedInUser.role === "Admin"){
            if(appraisalData.inspected_for_one === loggedInUser.user_id || loggedInUser.role === "Admin") return true
            if(appraisalData.inspected_for_two === loggedInUser.user_id || loggedInUser.role === "Admin") return true
        }
        return false
    }

    const allowEdit = () => {
        return appraisalData.status === "En inspección" || loggedInUser.role === "Admin"
    }

    return <>
        {appraisalData.status && <Row style={{marginTop: "70px"}} hidden={appraisalData.status === "Recepcionado"}>
            <h4 className="header-title"> Encargados de la inspección {allowEdit() ? "true": "false"}</h4>
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
                                                disabled={!allowEdit() || !isInspector()}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>{(appraisalData.vehicle || {}).miles_type === "miles" ? "Millaje": "Kilometraje"}</Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text onClick={() => {
                                                    if(allowEdit() && isInspector()){
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, miles_type: (appraisalData.vehicle || {}).miles_type === "miles" ? "km": "miles"}})
                                                    }
                                                }}>{(appraisalData.vehicle || {}).miles_type === "miles" ? "Mi": "Km"}</InputGroup.Text>
                                                <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).miles || ""} type="text" onChange={async (e: any)=>{
                                                    setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, miles: e.target.value}})
                                                
                                                }}/>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Placa {allowEdit()}</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).plate || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, plate: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>VIN</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).vin || ""} type="text" onChange={async (e: any)=>{
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
                                                disabled={!allowEdit() || !isInspector()}
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
                                                disabled={!allowEdit() || !isInspector()}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Motor</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).motor || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, motor: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Año</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).year || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, year: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Rines</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).wheels || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, wheels: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Equipo de sonido</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).eq_sound || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, eq_sound: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    {
                                        vehicleFields.map((vf: any, key: number) => {
                                            return <Col lg={3} key={key}>
                                                <Form.Group className="mb-3" controlId="validationCustom01">
                                                    <Form.Label>{vf.name}</Form.Label>
                                                    <Form.Control disabled={!allowEdit() || !isInspector()} value={(((appraisalData.vehicle || {}).fields || {})[vf.name] || {}).value || ""} type="text" onChange={async (e: any)=>{
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
                        <h4 className="header-title" onClick={toggleP}> <i className={ isOpenP ? "mdi mdi-chevron-down me-1" : "mdi mdi-chevron-right me-1"}></i> Prueba de manejo</h4>
                        <Collapse in={isOpenP}>
                            <div>
                                <Row>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Potencia del motor"}
                                            type="select"
                                            name="motor_potency"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).motor_potency || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).motor_potency || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, motor_potency: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Color de humo"}
                                            type="select"
                                            name="smoke_color"
                                            containerClass="mb-3"
                                            className="form-select"
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).smoke_color || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, smoke_color: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Sin humo">Sin humo</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Negro">Negro</option>
                                            <option value="Celeste">Celeste</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Temperatura"}
                                            type="select"
                                            name="temperature_status"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).temperature_status || "Normal") === "Alta" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).temperature_status || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, temperature_status: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Normal">Normal</option>
                                            <option value="Alta">Alta</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Combustión"}
                                            type="select"
                                            name="combustion"
                                            containerClass="mb-3"
                                            key="select0"
                                            className={"form-select " + (((appraisalData.vehicle || {}).combustion || "Normal") === "Revisar" ? "is-invalid": "")}
                                            value={(appraisalData.vehicle || {}).combustion || "Normal"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, combustion: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Normal">Normal</option>
                                            <option value="Revisar">Revisar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Marcha del motor"}
                                            type="select"
                                            name="engine_runing"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).engine_runing || "Normal") === "Inestable" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).engine_runing || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, engine_runing: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Normal">Normal</option>
                                            <option value="Inestable">Inestable</option>
                                            <option value="Leve">Leve</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Sistema aire acondicionado"}
                                            type="select"
                                            name="air_conditioning"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).air_conditioning || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).air_conditioning || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, air_conditioning: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Tipo de combustible"}
                                            type="select"
                                            name="gas"
                                            containerClass="mb-3"
                                            className="form-select"
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).gas || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, gas: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Diesel">Diesel</option>
                                            <option value="Gasolina">Gasolina</option>
                                            <option value="Gasolina">Hibrido</option>
                                            <option value="Gasolina">LPG</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Soplo"}
                                            type="select"
                                            name="oil"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).oil || "Normal") === "Excesivo" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).oil || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, oil: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Normal">Normal</option>
                                            <option value="Leve">Leve</option>
                                            <option value="Excesivo">Excesivo</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Herramientas"}
                                            type="select"
                                            name="tools"
                                            containerClass="mb-3"
                                            className="form-select"
                                            key="select0"
                                            value={((appraisalData.vehicle || {}).tools || "Tiene") ? "Tiene": "No tiene"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, tools: e.target.value === "Tiene"}})                                            
                                            }}
                                        >
                                            <option value="Tiene">Tiene</option>
                                            <option value="No tiene">No tiene</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Estado del chasis"}
                                            type="select"
                                            name="chasis_status"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).chasis_status || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).chasis_status || "Bueno"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, chasis_status: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Check engine"}
                                            type="select"
                                            name="check_engine"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).check_engine || "") === "Encendido" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).check_engine || "Normal"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, check_engine: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Normal">Normal</option>
                                            <option value="Encendido">Encendido</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"ABS"}
                                            type="select"
                                            name="abs"
                                            containerClass="mb-3"
                                            className="form-select"
                                            key="select0"
                                            value={((appraisalData.vehicle || {}).abs) ? "Tiene": "No tiene"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, abs: e.target.value === "Tiene"}})                                            
                                            }}
                                        >
                                            <option value="Tiene">Tiene</option>
                                            <option value="No tiene">No tiene</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Bolsas de aire"}
                                            type="select"
                                            name="air_bags"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).air_bags || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).air_bags || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, air_bags: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Turbo"}
                                            type="select"
                                            name="turbo"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).turbo || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).turbo || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, turbo: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"ODM"}
                                            type="select"
                                            name="odm"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).odm || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).odm || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, odm: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Velo"}
                                            type="select"
                                            name="velo"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).velo || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).velo || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, velo: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"TPMS"}
                                            type="select"
                                            name="tpms"
                                            containerClass="mb-3"
                                            className={"form-select " + (((appraisalData.vehicle || {}).tpms || "Bueno") !== "Bueno" ? "is-invalid": "")}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).tpms || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, tpms: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Bueno">Bueno</option>
                                            <option value="No tiene">No tiene</option>
                                            <option value="Leve daño">Leve daño</option>
                                            <option value="Reparar">Reparar</option>
                                        </FormInput>
                                    </Col>
                                    
                                    
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Traccion"}
                                            type="select"
                                            name="notes"
                                            containerClass="mb-3"
                                            className={"form-select"}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).notes || "4x4"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, notes: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="4x4">4x4</option>
                                            <option value="4x2">4x2</option>
                                        </FormInput>                                        
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Estado de bateria</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).battery_status || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, battery_status: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Rines y llantas</Form.Label>
                                            <Form.Control disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).wheels_tires || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, wheels_tires: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Llanta de repuesto"}
                                            type="select"
                                            name="spare_tire"
                                            containerClass="mb-3"
                                            className="form-select"
                                            key="select0"
                                            value={((appraisalData.vehicle || {}).spare_tire || "") ? "Tiene": "No tiene"}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, spare_tire: e.target.value === "Tiene"}})                                            
                                            }}
                                        >
                                            <option value="Tiene">Tiene</option>
                                            <option value="No tiene">No tiene</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Compresion</Form.Label>
                                            <Row>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='1' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression1 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression1: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='2' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression2 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression2: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='3' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression3 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression3: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='4' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression4 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression4: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='5' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression5 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression5: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='6' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression6 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression6: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='7' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression7 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression7: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='8' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression8 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression8: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='9' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression9 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression9: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                                <Col lg={1} style={{padding: "3px"}}>
                                                    <Form.Control placeholder='10' disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).compression10 || ""} type="text" onChange={async (e: any)=>{
                                                        setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, compression10: e.target.value}})                                            
                                                    }}/>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3}>
                                        <FormInput
                                            label={"Transmision"}
                                            type="select"
                                            name="transmision"
                                            containerClass="mb-3"
                                            className={"form-select"}
                                            key="select0"
                                            value={(appraisalData.vehicle || {}).transmision || ""}
                                            disabled={!allowEdit() || !isInspector()}
                                            onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, transmision: e.target.value}})                                            
                                            }}
                                        >
                                            <option value="Automatica">Automatica</option>
                                            <option value="Secuencial">Secuencial</option>
                                            <option value="Tiptronic">Tiptronic</option>
                                            <option value="CVT">CVT</option>
                                            <option value="Manual">Manual</option>
                                        </FormInput>
                                    </Col>
                                    <Col lg={3} hidden={(appraisalData.vehicle || {}).transmision !== "Manual"}>
                                        <Form.Group className="mb-3" controlId="validationCustom01">
                                            <Form.Label>Número de velocidades</Form.Label>
                                            <Form.Control  disabled={!allowEdit() || !isInspector()} value={(appraisalData.vehicle || {}).num_vel || ""} type="text" onChange={async (e: any)=>{
                                                setAppraisalData({...appraisalData,vehicle: {...appraisalData.vehicle, num_vel: e.target.value}})
                                            
                                            }}/>
                                        </Form.Group>
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
                        <h4 className="header-title">Inspección mecanica</h4>
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
                                                                            <Form.Check checked={inspectionItem.good || false} disabled={!allowEdit() || !isInspector()} type="checkbox" id={"1"} name={"customRadio"+1} onChange={(e) => {
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
                                                                            <Form.Check checked={inspectionItem.damaged || false} disabled={!allowEdit() || !isInspector()} type="checkbox" id={"2"} name={"customRadio"+2} onChange={(e) => {
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
                                                                            <Form.Control value={inspectionItem.price || 0} isInvalid={inspectionItem.damaged && inspectionItem.price <= 0} disabled={!allowEdit() || !isInspector()} type="text" id={"3"} name={"customRadio"+3} onChange={(e) => {
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
                                                                            <Form.Control value={inspectionItem.notes || ""} isInvalid={inspectionItem.damaged && (inspectionItem.notes === "" || !inspectionItem.notes)} disabled={!allowEdit() || !isInspector()} type="text" id={"4"} name={"customRadio"+4} onChange={(e) => {
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
                                                                        <div className="uploadImage" hidden={!allowEdit() || !isInspector()}>
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
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Inspeccion Fisica</h4>
                            <Evaluate allowPrices={true} allowEdit={allowEdit() && isInspector()} appraisalId={params["id"]} status={appraisalData.status} vehicleType={appraisalData.vehicle_type?.vector}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        <Row className='sticky-buttons'>    
            <Col>
                <Link hidden={!allowEdit() || !isInspector()} to="#" className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3" onClick={async () => {
                    setLoading(true)
                    let copyTemplate = {...templateData}
                    await Object.keys(copyTemplate).reduce(async (groupPromise: any, group: any) => {
                        await groupPromise

                        await copyTemplate[group].reduce(async (itemPromise: any, item: any) => {
                            await itemPromise
                            if(item.images && item.images.length > 0){
                                await item.images.reduce(async (imagePromise: any, image: any) => {
                                    await imagePromise
                                    if(!image.includes(".png")){
                                        let newUpl = await saveImage({
                                            file: dataURItoBlob(image),
                                            description: "Foto info",
                                            name: Date.now() + ".png"
                                        })
        
                                        if(newUpl.data.meta.code === 200) {
                                            copyTemplate[group] = copyTemplate[group].map((value2: any, key2: any)=>{
                                                if(item.inspection_item_id === value2.inspection_item_id) return {...value2, newImages: (value2.newImages || []).concat(newUpl.data.data)}
                                                return value2
                                            })
                                        }
                                    }
                                    return Promise.resolve()
                                }, Promise.resolve())
                            }
    
                            return Promise.resolve()
                        }, Promise.resolve())

                        return Promise.resolve()
                    }, Promise.resolve())
                    let result = await saveInspection({
                        vehicleData: appraisalData.vehicle,
                        templateData: copyTemplate,
                        appraisalId: appraisalData.appraisal_id
                    })
                    if(result.data.meta.code === 200){
                        loadTemplate(appraisalData.appraisal_id)
                    }else {
                        swal.fire("Error",result.data.data.error.message,"error")
                    }
                    setLoading(false)
                }}>
                    <i className="mdi mdi-content-save me-1"></i>
                    Guardar
                </Link>
                <Link hidden={!isInspector() || appraisalData.status !== "En inspección"} to="#" className="btn btn-success rounded-pill w-md waves-effect waves-light mb-3 ms-1" onClick={async () => {
                    let res = await swal.fire({
                        title: '¿Estas seguro de terminar la inspección?',
                        text: "Se dara por terminada la inspección mecanica",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#28bb4b',
                        cancelButtonColor: '#f34e4e',
                        confirmButtonText: 'Si, Terminar!',
                    })
                    if (res.isConfirmed) {
                        setLoading(true)
                        let result: any = await endInspection({appraisalId: appraisalData.appraisal_id})
                        setLoading(false)
                        if(result.data.meta.code === 200){
                            navigate("/appraisal/inspection", { replace: true });
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }
                }}>
                    <i className="mdi mdi-check me-1"></i>
                    Finalizar inspección 
                </Link>
                {appraisalData.status && <Link hidden={appraisalData.status === "Inspeccionado" || appraisalData.inspected_for_two} to="#" className="ms-1 btn btn-info rounded-pill w-md waves-effect waves-light mb-3" onClick={async () => {
                    let res = await swal.fire({
                        title: '¿Estas seguro de iniciar la inspección?',
                        text: "Se te asignara este vehiculo y deberas completar la inspección mecanica",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#28bb4b',
                        cancelButtonColor: '#f34e4e',
                        confirmButtonText: 'Si, Iniciar!',
                    })
                    if (res.isConfirmed) {
                        setLoading(true)
                        let result: any = await startInspection({appraisalId: appraisalData.appraisal_id})
                        setLoading(false)
                        if(result.data.meta.code === 200){
                            loadTemplate(appraisalData.appraisal_id)
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }

                    }}>
                        <i className="mdi mdi-content-paste me-1"></i>
                        Iniciar inspección
                </Link>}
                {appraisalData.status && <Link hidden={appraisalData.status === "Inspeccionado" || !appraisalData.inspected_for_one || appraisalData.inspected_for_two === loggedInUser.user_id || appraisalData.inspected_for_one === loggedInUser.user_id } to="#" className="ms-1 btn btn-info rounded-pill w-md waves-effect waves-light mb-3" onClick={async () => {
                    let res = await swal.fire({
                        title: '¿Estas seguro de unirte a la inspección?',
                        text: "Se te asignara este vehiculo y ayudaras a completar la inspección mecanica",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#28bb4b',
                        cancelButtonColor: '#f34e4e',
                        confirmButtonText: 'Si, Unirme!',
                    })
                    if (res.isConfirmed) {
                        setLoading(true)
                        let result: any = await startInspection({appraisalId: appraisalData.appraisal_id})
                        setLoading(false)
                        if(result.data.meta.code === 200){
                            loadTemplate(appraisalData.appraisal_id)
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }

                    }}>
                        <i className="mdi mdi-content-paste me-1"></i>
                        Unirme a la inspección
                </Link>}
            </Col>
        </Row>
        <Loader2  loading={loading}/>
    </>;
};

export default InspectionDetail;
