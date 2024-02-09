// hooks
import { useEffect, useState } from 'react';
import { usePageTitle } from '../../../hooks';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Row, Col, Card, Form } from 'react-bootstrap';
import CustomerModal from '../customers/modal';
import {cleanCustomer, Customer} from '../customers/types';
import MaskedInput from 'react-text-mask';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { getAllCustomers, getVehicleByPlate, saveImage, saveReception } from '../../../helpers/api/reception';
import FileUploader from '../../../components/FileUploader';
import { getBrands, getModelsByBrand } from '../../../helpers/api/carApi';
import { getInvoiceById } from '../../../helpers/api/invoices';
import { getAllVehicleTypes, getInsurers } from '../../../helpers/api/settings';
import Loader2 from '../../../components/Loader2';
import { checkReference } from '../../../helpers/api/appraisal';

type FileType = File & {
    preview?: string;
    formattedSize?: string;
    newName?: string;
    description?: string;
};

const SaveButton = (props: any, context: any) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    return (<Link to="#" onClick={() => {
        let validations: any = {
            reference: props.data.reference === "" && !props.data.purpose.includes("repair"),
            brand: props.data.brand === "",
            model: props.data.model === "",
            year: props.data.year === "",
            plate: props.data.plate.length !== 0 && props.data.plate.length !== 8 && props.data.plate.length !== 7,
            vehicleTypeSelected: !props.data.vehicle_type_id ? true : false,
            mainCustomer: !props.data.main_customer_id ? true : false,
            insurance_id: (props.data.purpose.includes("insurance") ? (!props.data.insurance_id ? true : false) : false) 
        }
        props.setValidations(validations)
        let hasErrors = false
        Object.keys(validations).forEach(key=>{
            if(validations[key]) hasErrors = true
        })
        if(hasErrors){
            swal.fire('Error!', 'Por favor complete los campos', 'error').then(()=>{
                            
            });
        }else{

            swal.fire({
                title: '¿Estas seguro de agregar el registro?',
                text: "Se guardara el registro y se creara una factura!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28bb4b',
                cancelButtonColor: '#f34e4e',
                confirmButtonText: 'Si, Crear!',
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    setLoading(true)
                    let allUps: any = []
                    await props.selectedFiles.reduce(async (previousPromise: any, file: FileType) => {
                        await previousPromise
                        let newUpl = await saveImage({
                            file: file,
                            description: file.description,
                            name: file.newName
                        })
                        if(newUpl.data.meta.code === 200) allUps.push(newUpl.data.data);
                        return Promise.resolve()
                    }, Promise.resolve())
                    props.data.allUps = allUps
                    if(!props.data.insurance_id) delete props.data.insurance_id
                    if(!props.data.guarantyFor || props.data.guarantyFor === "") props.data.guarantyFor = "N/A"
                    if(props.data.invoiceId === "") delete props.data.invoiceId
                    if(!props.data.reference) props.data.reference = "N/A"
                    if(props.data.plate.length === 0) props.data.plate = "NO PORTA PLACA"
                    let result = await saveReception(props.data)
                    setLoading(false)
                    if(result.data.meta.code === 200){
                        swal.fire('Creado!', 'Se creo una factura para el cliente con identificador: '+result.data.data.invoiceId, 'success').then(()=>{
                            navigate("/appraisal/invoice-detail/"+result.data.data.invoiceId, { replace: true });
                        });
                    } else {
                        
                        swal.fire('Error!', result.data.meta.message, 'error').then(()=>{
                            
                        });
                    }
                }
            }).catch((error: any)=>{
                if(error === "Invalid request payload input"){
                    swal.fire('Error!', 'Hubo un error al guardar', 'error').then(()=>{
                            
                    });
                }
            })
        }


    }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3">
        <Loader2 loading={loading}/>
        <i className="mdi mdi-content-save me-1"></i>
        Guardar
    </Link>)
};


const Reception = () => {
    // set pagetitle
    const [reference, setReference] = useState<string>("");
    const [allCustomers, setAllCustomers] = useState<Array<any>>([])
    const [mainCustomer, setMainCustomer] = useState<any[]>([]);
    const [mainPhone, setMainPhone] = useState<string>("")
    const [reportPhone, setReportPhone] = useState<string>("")
    const [vehiclePhone, setVehiclePhone] = useState<string>("")
    const [modal, setModal] = useState<boolean>(false);
    const [validated] = useState<boolean>(false);
    const [purposes, setPurposes] = useState<any>({
        buysell: false,
        agency: false,
        guaranty: false,
        repair: false,
        insurance: false
    });
    const [invoiceId, setInvoiceId] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<string>("card");
    const [guarantyFor, setGuarantyFor] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [plate, setPlate] = useState<string>("");
    const [insuranceFrom, setInsuranceFrom] = useState<any[]>([]);
    const [validations, setValidations] = useState<any>({})
    const [reportName, setReportName] =  useState<string>("");
    const [vehicleName, setVehicleName] =  useState<string>("");
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);
    const [cantPurposes, setCantPurposes] = useState(0)
    
    const [insurances, setInsurers] = useState<any[]>([
        { id: 1, value: 1, name: 'Ficohsa' },
        { id: 2, value: 2, name: 'Otros' }
    ])

    const [newCustomerModal, setNewCustomerModal] = useState<Customer>(cleanCustomer)
    const [vehicleTypeSelected, setVehicleTypeSelected] = useState<any[]>([]);
    const [brands, setBrands] =  useState<any[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<any[]>([]);
    const [allVehicleTypes, setAllVehicleTypes] = useState<Array<any>>([])
    const [models, setModels] =  useState<any[]>([]);
    const [selectedModel, setSelectedModel] = useState<any[]>([]);


    const onChangeVehicleType = (vehicleTypes: any[]) => {
        if(vehicleTypes.length > 0){
            setVehicleTypeSelected(vehicleTypes);
        } else {
            setVehicleTypeSelected([])
        }
    };

    usePageTitle({
        title: 'Recepción',
        breadCrumbItems: [
            {
                path: '/appraisal/reception',
                label: 'Avaluos',
            },
            {
                path: '/appraisal/reception',
                label: 'Recepción',
                active: true,
            },
        ],
    });

    const toggleModal = async (newCustomer?: Customer, type?: string) => {
        await loadCustomers()
        if(newCustomer){            
            setAllCustomers([...allCustomers, {...newCustomer, id: allCustomers.length + 1, value: allCustomers.length + 1}])
            setMainCustomer([{...newCustomer, id: allCustomers.length + 1, value: allCustomers.length + 1}])
            setMainPhone(newCustomer.phone)        
        }
        setModal(!modal);
    };

    const onChangeMainCustomer = (customerSelected: any[]) => {
        if(customerSelected.length > 0 && customerSelected[0].customOption){
            setNewCustomerModal({...newCustomerModal, name:customerSelected[0].name})
            toggleModal(undefined,"main");
        } else if(customerSelected.length > 0){
            setMainCustomer(customerSelected);  
            setMainPhone(customerSelected[0].phone)
        } else {
            setMainPhone("")
            setMainCustomer([])
        }
    };

    const onChangeInsuranceId = (insuranceSelected: any[]) => {
        if(insuranceSelected.length > 0){
            setInsuranceFrom(insuranceSelected);
        }
    };

    const onChangeBrand = (n: any[]) => {
        if(n.length > 0){
            setSelectedBrand(n);
            loadModels(n[0].Make_ID);
            setSelectedModel([]);
        }else{
            setSelectedBrand([]);
        }
    };


    const onChangeModel = (n: any[]) => {
        if(n.length > 0){
            setSelectedModel(n);
        }else{
            setSelectedModel([]);
        }
    };

    const loadCustomers = async () => {
        let response = await getAllCustomers({})
        setAllCustomers(response.data.data)
    }

    const loadInsurers = async () => {
        let response = await getInsurers()
        setInsurers(response.data.data.map((i: any)=> {
            return {
                id: i.insurer_id,
                value: i.insurer_id,
                name: i.name
            }
        }))
    }

    const loadBrands = async () => {
        let response = await getBrands({})
        setBrands(response.data.Results)
    }

    const loadModels = async (brandId:number) => {
        let response = await getModelsByBrand(brandId)
        setModels(response.data.Results)
    }

    const loadVehicleTypes = async () => {
        let response = await getAllVehicleTypes({})
        setAllVehicleTypes(response.data.data.map((vt: any) => {
            return {...vt, status_color: "success"}
        }))
    }


    useEffect(()=>{
        loadCustomers()
        loadBrands()
        loadVehicleTypes()
        loadInsurers()
    },[])

    useEffect(()=>{
        let cont = 0;
        Object.keys(purposes).forEach(key=>{
            if(purposes[key]) cont++
        })
        setCantPurposes(cont)
    },[purposes])

    const loadInvoiceData = async () => {
        if(invoiceId !== ""){
            let result = await getInvoiceById(invoiceId)
            let iData = result.data.data
            if(iData.status !== "draft"){
                setInvoiceId("")
                await swal.fire({
                    title: 'Factura inválida',
                    text: "Esta factura no es valida para adjuntar un avaluo",
                    icon: 'error'
                })
                
            } else {
                setMainCustomer([allCustomers.find(c => { return c.customer_id === iData.customer_id})])
                setMainPhone(iData.customer.phone)
                setPaymentMethod(iData.type)
                let nPurposes = {...purposes}
                iData.lastAppraisal.purposes.split(",").forEach((pur: any)=>{
                    nPurposes[pur] = true
                })
                setPurposes(nPurposes)
                setReportName(iData.lastAppraisal.report_name)
                setReportPhone(iData.lastAppraisal.report_phone)
                setVehicleName(iData.lastAppraisal.vehicle_name)
                setVehiclePhone(iData.lastAppraisal.vehicle_phone)
            }
        }
    }

    return <>

        <Row  style={{marginTop: "70px"}}>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Informacion Personal</h4>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Label>Vincular factura (opcional)</Form.Label>
                                    <Form.Control required type="text" value={invoiceId} onChange={(e: any)=>{
                                        setInvoiceId(e.target.value)
                                    }} onBlur={(e: any)=>{
                                        loadInvoiceData()
                                    }}/>
                                </Form.Group>
                            </Col>
                        </Row>
        
                        <Form noValidate validated={validated}>
                            <Form.Group className="mb-3" controlId="validationCustom02">
                                <Form.Label>Proposito</Form.Label>
                                <Row>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPurposes({...purposes, buysell: e.target.checked})
                                        }} checked={purposes.buysell} disabled={!purposes.buysell && cantPurposes === 3} type="checkbox" id="buysell" name="customRadio" label="Compra/Venta" />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPurposes({...purposes, agency: e.target.checked})
                                        }}  checked={purposes.agency} disabled={!purposes.agency && cantPurposes === 3} type="checkbox" id="agency" name="customRadio" label="Agencia" />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPurposes({...purposes, guaranty: e.target.checked})
                                        }}  checked={purposes.guaranty} disabled={!purposes.guaranty && cantPurposes === 3} type="checkbox" id="guaranty" name="customRadio" label="Garantia" />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPurposes({...purposes, repair: e.target.checked})
                                        }}  checked={purposes.repair} disabled={!purposes.repair && cantPurposes === 3} type="checkbox" id="repair" name="customRadio" label="Reparacion" />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPurposes({...purposes, insurance: e.target.checked})
                                        }} checked={purposes.insurance} disabled={!purposes.insurance && cantPurposes === 3} type="checkbox" id="insurance" name="customRadio" label="Seguros" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            {purposes.insurance && (<Form.Group className="" controlId="validationCustom03">
                                <Form.Label>Seguro de</Form.Label>
                                <Row>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Typeahead
                                            id="insuranceId"
                                            labelKey={'name'}
                                            multiple={false}
                                            isValid={insuranceFrom[0] ? true : false}
                                            isInvalid={validations["insuranceFrom"] || false}
                                            maxResults={4}
                                            onChange={onChangeInsuranceId}
                                            options={insurances}
                                            onBlur={()=>{
                                                setValidations({...validations, insuranceFrom: insuranceFrom[0] ? false : true})
                                            }}
                                            allowNew={false}
                                            placeholder="Escoge un banco..."
                                        />
                                    </Form.Group>
                                </Row>
                            </Form.Group>)}
                            {purposes.guaranty && (<Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label>Garantía para</Form.Label>
                                <Form.Control required type="text" placeholder="Jhon Doe" onChange={(e: any)=>{
                                    setGuarantyFor(e.target.value)
                                }} />
                            </Form.Group>)}
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Solicitante</Form.Label>
                                        <Typeahead
                                            id="customer"
                                            labelKey={'name'}
                                            multiple={false}
                                            isValid={mainCustomer[0] ? true : false}
                                            isInvalid={validations["mainCustomer"] || false}
                                            maxResults={4}
                                            onChange={onChangeMainCustomer}
                                            options={allCustomers}
                                            onBlur={()=>{
                                                setValidations({...validations, mainCustomer: mainCustomer[0] ? false : true})
                                            }}
                                            allowNew={true}
                                            placeholder="Escoge o crea un cliente..."
                                            selected={mainCustomer}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Label>Telefono</Form.Label>
                                    <MaskedInput
                                        mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                        placeholder="____-____"
                                        value={mainPhone}                                        
                                        className={"form-control " + (mainPhone === "" ? "" : (mainPhone.length === 8 ? "is-valid" : "is-invalid"))}
                                    />
                                </Col>
                            </Row>
        
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Entregar informe a</Form.Label>
                                        <Form.Control required type="text" value={reportName} isValid={reportName !== ""} isInvalid={validations["reportName"] || false} placeholder="Jhon Doe" onChange={(e: any)=>{
                                            //setValidations({...validations, reportName: e.target.value === ""})
                                            setReportName(e.target.value)
                                        }} />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Label>Telefono</Form.Label>
                                    <MaskedInput
                                        mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                        placeholder="____-____"
                                        value={reportPhone}
                                        onChange={(e)=>{
                                            setReportPhone(e.target.value)
                                        }}
                                        className={"form-control " + (reportPhone === "" ? "" : (reportPhone.length === 9 ? "is-valid" : "is-invalid"))}
                                    />
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Entregar vehiculo a</Form.Label>
                                        <Form.Control required type="text" value={vehicleName} isValid={vehicleName !== ""} isInvalid={validations["vehicleName"] || false} placeholder="Jhon Doe" onChange={(e: any)=>{
                                            //setValidations({...validations, vehicleName: e.target.value === ""})
                                            setVehicleName(e.target.value)
                                        }} />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Label>Telefono</Form.Label>
                                    <MaskedInput
                                        mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                        placeholder="____-____"
                                        value={vehiclePhone}
                                        onChange={(e)=>{
                                            setVehiclePhone(e.target.value)
                                        }}
                                        className={"form-control " + (vehiclePhone === "" ? "" : (vehiclePhone.length === 9 ? "is-valid" : "is-invalid"))}
                                    />
                                </Col>
                            </Row>                                                        
                            <h4 className="header-title">Informacion de factura</h4>
                            <Form.Group className="mb-3" controlId="validationCustom02">
                                <Form.Label>Metodo de pago</Form.Label>
                                <Row>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPaymentMethod(e.target.id)
                                        }} checked={paymentMethod === "cash"} type="radio" id="cash" name="customRadio5" label="Efectivo" />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPaymentMethod(e.target.id)
                                        }}  checked={paymentMethod === "card"} type="radio" id="card" name="customRadio5" label="Tarjeta" />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Check onChange={(e: any)=>{
                                            setPaymentMethod(e.target.id)
                                        }}  checked={paymentMethod === "credit"} type="radio" id="credit" name="customRadio5" label="Credito" />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                        <CustomerModal customer={newCustomerModal} modal={modal} toggle={toggleModal}></CustomerModal>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Informacion Del Vehículo</h4>
                        <Form noValidate validated={validated}>
                            <Row>
                                <Col lg={4}>
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
                                            isValid={vehicleTypeSelected[0] ? true : false}
                                            isInvalid={validations["vehicleTypeSelected"] || false}
                                            onBlur={()=>{
                                                setValidations({...validations, vehicleTypeSelected: vehicleTypeSelected[0] ? false : true})
                                            }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Certificado/Orden de trabajo</Form.Label>
                                        <Form.Control value={reference} required type="text" isValid={reference !== ""} isInvalid={validations["reference"] || false} placeholder="12345" onChange={async (e: any)=>{
                                            if(e.target.value.match("^[0-9-]+$")!=null) {
                                                setReference(e.target.value)
                                                let res = await checkReference({ref: e.target.value})
                                                if(res.data.meta.code === 200){
                                                    if(!res.data.data){
                                                        setValidations({...validations, reference: e.target.value === "" && !purposes["repair"]})
                                                        
                                                    }else {
                                                        await swal.fire({
                                                            title: 'Ya se registraron certificados con ese codigo',
                                                            text: "Porfavor verifique el número",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            cancelButtonColor: '#f34e4e',
                                                        })
                                                    }
                                                }
                                            } else {
                                                setReference(reference)
                                            }
                                        }} />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Placa</Form.Label>
                                        <Form.Control required type="text" isValid={plate !== ""} isInvalid={validations["plate"] || false} placeholder="AAA 0000" onChange={async (e: any)=>{
                                            setValidations({...validations, plate: e.target.value.length !== 0 && e.target.value.length !== 8 && e.target.value.length !== 7})
                                            setPlate(e.target.value)
                                            
                                        }} onBlur={async (e: any) => {
                                            if(plate.length === 8){
                                                let result = await getVehicleByPlate({plate: plate})
                                                if(result.data.data.vehicle_id){
                                                    let resultSwal = await swal.fire({
                                                        title: 'Ya existe un vehiculo con esta placa',
                                                        text: "¿Desea rellenar la inormacion con el vehiculo encontrado?",
                                                        icon: 'info',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#28bb4b',
                                                        cancelButtonColor: '#f34e4e',
                                                        confirmButtonText: 'Si, Rellenar!',
                                                    })

                                                    if (resultSwal.isConfirmed) {
                                                        let vehicle = result.data.data
                                                        onChangeBrand([{Make_Name: vehicle.brand, Make_ID: 999999}])
                                                        onChangeModel([{Model_Name: vehicle.model, Model_ID: 999999}])
                                                        setYear(vehicle.year)
                                                    }
                                                }
                                            }
                                        }}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col lg={4}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Marca</Form.Label>
                                        <Typeahead
                                            id="brand"
                                            labelKey={'Make_Name'}
                                            multiple={false}
                                            maxResults={4}
                                            options={brands}
                                            allowNew={true}
                                            isValid={selectedBrand[0] ? true : false}
                                            isInvalid={validations["brand"] || false}
                                            onChange={onChangeBrand}
                                            placeholder="Escoge una marca..."
                                            selected={selectedBrand}
                                            onBlur={()=>{
                                                setValidations({...validations, brand: selectedBrand[0] ? false : true})
                                            }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Modelo</Form.Label>
                                        <Typeahead
                                            id="model"
                                            labelKey={'Model_Name'}
                                            multiple={false}
                                            maxResults={4}
                                            options={models}
                                            allowNew={true}
                                            isValid={selectedModel[0] ? true : false}
                                            isInvalid={validations["model"] || false}
                                            onChange={onChangeModel}
                                            placeholder="Escoge un modelo..."
                                            selected={selectedModel}
                                            onBlur={()=>{
                                                setValidations({...validations, brand: selectedModel[0] ? false : true})
                                            }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Label>Año</Form.Label>
                                        <Form.Control required type="text" value={year} isValid={year !== ""} isInvalid={validations["year"] || false} placeholder="2012" onChange={(e: any)=>{
                                            setValidations({...validations, year: e.target.value === ""})
                                            setYear(e.target.value)
                                        }} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Sube Anexos</h4>
                        <Row>
                            <Col lg={12}>
                                <FileUploader
                                    label="Cargar fotos como anexos al ingreso del vehiculo"
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
        <Row className='sticky-buttons'>    
            <Col>
                <SaveButton {...{
                    setValidations: setValidations,
                    data:{
                        main_customer_id: mainCustomer[0] ? mainCustomer[0].customer_id : false,
                        reportName,reportPhone,
                        vehicleName, vehiclePhone,
                        purpose: Object.keys(purposes).filter(p => purposes[p]).map(p => p).join(","),
                        insurance_id: insuranceFrom[0] ? insuranceFrom[0].id : false,
                        vehicle_type_id: vehicleTypeSelected[0] ? vehicleTypeSelected[0].vehicle_type_id : false,
                        plate,
                        brand: selectedBrand[0] ? selectedBrand[0].Make_Name : false,
                        model: selectedModel[0] ? selectedModel[0].Model_Name : false,
                        year,
                        paymentMethod,
                        reference,
                        guarantyFor,
                        invoiceId: invoiceId
                    },
                    selectedFiles
                }}/>
            </Col>
        </Row>
    </>;
}

export default Reception;
