import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoDark from '../../../assets/images/logo-sm.png';
import { addLineInvoice, cancelInvoice, editLineInvoice, getInvoiceById, removeLineInvoice, sendInvoiceEmail, validateInvoice } from '../../../helpers/api/invoices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// hooks
import { usePageTitle, useUser } from '../../../hooks';
import moment from 'moment';
// data
import * as convertir from 'numero-a-letras';
import swal from 'sweetalert2';
import ModalExoneration from './modal';
import FormInput from '../../../components/form/FormInput';
import Loader2 from '../../../components/Loader2';

const InvoiceDetail = () => {
    // set pagetitle
    const params = useParams()
    const [invocieData, setInvoiceData] = useState({
        description: "",
        price: "",
        quantity: ""
    } as any)
    const [newLine, setNewLine] = useState({} as any)
    const [printerMode, setPrinterMode] = useState("")
    const [modal, setModal] = useState<boolean>(false);
    const [modalMode, setModalMode] = useState<any>("1");
    const [loading, setLoading] = useState(false);
    const [loggedInUser] = useUser();
    const statusInfo: any = {
        "draft" : {
            name: "Proforma",
            color: "secondary"
        },
        "valid" : {
            name: "Valida",
            color: "success"
        },
        "deleted" : {
            name: "Anulada",
            color: "danger"
        }
    }
    usePageTitle({
        title: 'Invoice',
        breadCrumbItems: [
            {
                path: '/pages/invoice',
                label: 'Extra Pages',
            },
            {
                path: '/pages/invoice',
                label: 'Invoice',
                active: true,
            },
        ],
    });

    const loadInvoice = async () => {
        setLoading(true)
        let response = await getInvoiceById(params.id)
        setLoading(false)
        setInvoiceData(response.data.data)
    }

    useEffect(()=>{
        loadInvoice()
        window.onafterprint =  () => {
            setPrinterMode("")
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(()=>{
        if(printerMode === "pos" || printerMode === "printer")
            window.print()
    },[printerMode])

    const toggleModal = (mode: string) => {
        loadInvoice();
        setModalMode(mode)
        setModal(!modal);
    };

    const numberWithCommas = (x: any) => {
        if(x){
            var parts = x.split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
        else return ""
    }


    const validate = async () => {
        swal.fire({
            title: '¿Estas seguro de validar la factura?',
            text: "Se creara un numero de factura y se le asignara!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28bb4b',
            cancelButtonColor: '#f34e4e',
            confirmButtonText: 'Si, Validar!',
        })
        .then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
                let response: any = await validateInvoice({invoice_id: invocieData.invoice_id})
                setLoading(false)
                if(response.data.meta.code === 200) loadInvoice();
                else {
                    swal.fire("Error",response.data.data.error.message,"error")
                }
            }
        })
    }


    const cancel = async () => {
        swal.fire({
            title: '¿Estas seguro de anular la factura?',
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
                let response: any = await cancelInvoice({invoice_id: invocieData.invoice_id})
                setLoading(false)
                if(response.data.meta.code === 200) loadInvoice();
                else {
                    swal.fire("Error",response.data.data.error.message,"error")
                }
            }
        })
    }

    return (<>
        <Loader2 loading={loading}/>
        <Row>    
            <Col sm={12} className="d-print-none">
                <Link hidden={invocieData.status !== "draft"} to="#" onClick={()=>{
                    validate()
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3">
                    <i className="mdi mdi-check me-1"></i>
                    Validar 
                </Link>
                <Link hidden={!(invocieData.status === "valid" && (loggedInUser.role === "Admin" || loggedInUser.role === "Invoice"))} to="#" onClick={()=>{
                    cancel()
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-plus me-1"></i>
                    Anular
                </Link>
                <Link hidden={invocieData.status !== "draft"} to="#" onClick={()=>{
                    toggleModal("1")
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-plus me-1"></i>
                    Agregar Exoneración
                </Link>
                <Link hidden={invocieData.status !== "draft"} to="#" onClick={()=>{
                    toggleModal("2")
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-plus me-1"></i>
                    Agregar Excento
                </Link>
                <Link hidden={invocieData.status === "deleted" || !invocieData.customer?.email} to="#" onClick={async ()=>{
                    setLoading(true)
                    let result = await sendInvoiceEmail({
                        invoice_id: invocieData.invoice_id
                    })
                    setLoading(false)
                    if(result.data.meta.code === 200){
                        swal.fire("Correo enviado","Se envio un correo con la factura adjunta al cliente","success")
                    }else{
                        swal.fire("Error al enviar correo",result.data.meta.message,"error")
                    }
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3">
                    <i className="mdi mdi-email-send me-1"></i>
                    Enviar factura
                </Link>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col md={printerMode === "printer" || printerMode === "" ? 12 : 3}>
                <Card>
                    {(printerMode === "printer" || printerMode === "") && <Card.Body>
                        <div className="panel-body">
                            <div className="clearfix">
                                <div className="float-start d-flex align-items-center">
                                    <img src={logoDark} alt="logo-dark" height="60" />
                                    <h3>Avaluos Gibson</h3>
                                </div>
                                <div className="float-end">
                                    <h4 hidden={invocieData.status === "draft"}>
                                        Factura número <strong>{invocieData.invoice_number}</strong>
                                    </h4>
                                </div>
                            </div>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    <div className="float-start mt-3">
                                        <address>
                                            <strong>{invocieData.company?.name}</strong>
                                            <br />
                                            RTN: {invocieData.company?.rtn}
                                            <br />
                                            <div className="address-lines">
                                                Direccion: {invocieData.company?.address}
                                            </div>                                            
                                            Telefono: {invocieData.branch?.phone}
                                        </address>
                                    </div>
                                    <div className="float-end mt-3 text-end">
                                        <b>Factura {statusInfo[invocieData.status]?.name}</b> 
                                        <br />
                                        <b>Fecha de creación: </b> {moment(invocieData.created_date).format("DD-MM-YYYY") }
                                        <br />
                                        <b>Cliente: </b> {invocieData.customer?.name}
                                        <br />
                                        <b>RTN: </b> {invocieData.customer?.rtn}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <div className="table-responsive">
                                        <table className="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Descripcion</th>
                                                    <th className='quantity-size'>Cantidad</th>
                                                    <th className='unit-price'>Valor unitario</th>
                                                    <th className='unit-price'>Desc. %</th>
                                                    <th className='unit-price'>ISV</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(invocieData.lines || []).map((item: any, idx: number) => {
                                                    if(item.isEdit) 
                                                    return (
                                                        <tr className='d-print-none' key={idx}>
                                                            <td className='p-0 align-middle text-center'>{(invocieData.lines || []).length + 1 }</td>
                                                            <td className='p-0'><FormInput
                                                                type="text"
                                                                name="description"
                                                                value={item.description}
                                                                onChange={(e)=>{
                                                                    setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                        if(i.invoice_line_id === item.invoice_line_id) i.description = e.target.value
                                                                        return i
                                                                    })})
                                                                }}
                                                                placeholder="Descripción"
                                                            /></td>
                                                            <td className='p-0'><FormInput
                                                                type="text"
                                                                name="quantity"
                                                                value={item.quantity || 0}
                                                                onChange={(e)=>{
                                                                    setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                        if(i.invoice_line_id === item.invoice_line_id) i.quantity = e.target.value
                                                                        return i
                                                                    })})
                                                                }}
                                                                placeholder="1"
                                                            /></td>
                                                            <td className='p-0 text-end'><FormInput
                                                                type="text"
                                                                name="price"
                                                                value={item.price || 0}
                                                                onChange={(e)=>{
                                                                    setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                        if(i.invoice_line_id === item.invoice_line_id) i.price = e.target.value
                                                                        return i
                                                                    })})
                                                                }}
                                                                className='text-end'
                                                                placeholder="100.00"
                                                            /></td>
                                                            <td className='p-0 text-end'><FormInput
                                                                type="text"
                                                                name="discount"
                                                                value={item.discount || 0}
                                                                onChange={(e)=>{
                                                                    if(parseFloat(e.target.value) > 100) e.target.value = "100"
                                                                    setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                        if(i.invoice_line_id === item.invoice_line_id) i.discount = e.target.value
                                                                        return i
                                                                    })})
                                                                }}
                                                                className='text-end'
                                                                placeholder="0.00"
                                                            /></td>
                                                            <td className='p-0'>
                                                                <FormInput
                                                                    name="select"
                                                                    type="select"
                                                                    className="form-select"
                                                                    key="select"
                                                                    value={item.isvType || 'G15'}
                                                                    onChange={(e)=>{
                                                                        setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                            if(i.invoice_line_id === item.invoice_line_id) i.isvType = e.target.value
                                                                            return i
                                                                        })})
                                                                    }}
                                                                >
                                                                    <option value='G15'>G15</option>
                                                                    <option value='G18'>G18</option>
                                                                    <option value='EXC'>EXC</option>
                                                                </FormInput>
                                                            </td>
                                                            <td className='p-0 align-middle text-end'>{numberWithCommas((((item.price || 0) * (item.quantity || 0)) - ((item.price || 0) * (item.quantity || 0) * (item.discount > 0 ? item.discount/100 : 0))).toFixed(2))}</td>
                                                            <td className='p-0 ps-1 align-middle'>
                                                                <Button size="sm" variant={'outline-blue'} onClick={ async ()=>{
                                                                    let result = await removeLineInvoice({
                                                                        invoiceLineId: item.invoice_line_id
                                                                    })
                                                                    if(result.data.meta.code === 200){
                                                                        await loadInvoice()
                                                                    }else{
                                                                        swal.fire("Error al eliminar la linea",result.data.meta.message,"error")
                                                                    }
                                                                }}>
                                                                    <i className="fas fa-trash"></i>
                                                                </Button>
                                                                <Button size="sm" variant={'outline-blue'} onClick={ async ()=>{
                                                                    if(!item.description || item.description === ""
                                                                    || !item.price || item.price === 0
                                                                    || !item.quantity || item.quantity === 0) swal.fire("Error","Porfavor rellene todos los campos","error")
                                                                    else{
                                                                        let result = await editLineInvoice({
                                                                            invoiceLineId: item.invoice_line_id,
                                                                            description: item.description,
                                                                            price: item.price,
                                                                            isvType: item.isvType,
                                                                            discount: item.discount,
                                                                            quantity: item.quantity
                                                                        })
                                                                        if(result.data.meta.code === 200){
                                                                            setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                                if(i.invoice_line_id === item.invoice_line_id) i.isEdit = false
                                                                                return i
                                                                            })})
                                                                            await loadInvoice()
                                                                        }else{
                                                                            swal.fire("Error al guardar",result.data.meta.message,"error")
                                                                        }
                                                                    }
                                                                }}>
                                                                    <i className="fas fa-save"></i>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ) 
                                                    else 
                                                    return (
                                                        <tr key={idx}>
                                                            <td className='p-1 align-middle text-center'>{idx + 1}</td>
                                                            <td className='p-1'>{item.description}</td>
                                                            <td className='p-1'>{item.quantity}</td>
                                                            <td className='p-1 text-end'>{numberWithCommas(item.price.toFixed(2))}</td>
                                                            <td className='p-1 text-center'>{item.discount}%</td>
                                                            <td className='p-1 text-center'>{item.isvType}</td>                                                            
                                                            <td className='p-1 text-end'>{numberWithCommas(item.subtotal.toFixed(2))}</td>
                                                            <td className='p-1 ps-1 align-middle d-print-none' hidden={!(invocieData.status === "draft" && (invocieData.allow_add_line || loggedInUser.role === "Admin" || loggedInUser.role === "Invoice"))}>
                                                                <Button size="sm" variant={'outline-blue'} onClick={ async ()=>{
                                                                    let result = await removeLineInvoice({
                                                                        invoiceLineId: item.invoice_line_id
                                                                    })
                                                                    if(result.data.meta.code === 200){
                                                                        await loadInvoice()
                                                                    }else{
                                                                        swal.fire("Error al eliminar la linea",result.data.meta.message,"error")
                                                                    }
                                                                }}>
                                                                    <i className="fas fa-trash"></i>
                                                                </Button>
                                                                {!item.isEdit && <Button size="sm" variant={'outline-blue'} onClick={ async ()=>{
                                                                    setInvoiceData({...invocieData,lines: invocieData.lines.map((i: any) => {
                                                                        if(i.invoice_line_id === item.invoice_line_id) i.isEdit = true
                                                                        else i.isEdit = false
                                                                        return i
                                                                    })})
                                                                }}>
                                                                    <i className="fe-edit"></i>
                                                                </Button>}
                                                                {item.isEdit && <Button size="sm" variant={'outline-blue'} onClick={ async ()=>{
                                                                    let result = await removeLineInvoice({
                                                                        invoiceLineId: item.invoice_line_id
                                                                    })
                                                                    if(result.data.meta.code === 200){
                                                                        await loadInvoice()
                                                                    }else{
                                                                        swal.fire("Error al eliminar la linea",result.data.meta.message,"error")
                                                                    }
                                                                }}>
                                                                    <i className="fas fa-save"></i>
                                                                </Button>}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                                {(invocieData.status === "draft" && (invocieData.allow_add_line || loggedInUser.role === "Admin" || loggedInUser.role === "Invoice")) && 
                                                    <tr className='d-print-none'>
                                                        <td className='p-0 align-middle text-center'>{(invocieData.lines || []).length + 1 }</td>
                                                        <td className='p-0'><FormInput
                                                            type="text"
                                                            name="description"
                                                            value={newLine.description}
                                                            onChange={(e)=>{
                                                                setNewLine({...newLine, description: e.target.value})
                                                            }}
                                                            placeholder="Descripción"
                                                        /></td>
                                                        <td className='p-0'><FormInput
                                                            type="text"
                                                            name="quantity"
                                                            value={newLine.quantity || 0}
                                                            onChange={(e)=>{
                                                                setNewLine({...newLine, quantity: e.target.value})
                                                            }}
                                                            placeholder="1"
                                                        /></td>
                                                        <td className='p-0 text-end'><FormInput
                                                            type="text"
                                                            name="price"
                                                            value={newLine.price || 0}
                                                            onChange={(e)=>{
                                                                setNewLine({...newLine, price: e.target.value})
                                                            }}
                                                            className='text-end'
                                                            placeholder="100.00"
                                                        /></td>
                                                        <td className='p-0 text-end'><FormInput
                                                            type="text"
                                                            name="discount"
                                                            value={newLine.discount || 0.0}
                                                            onChange={(e)=>{
                                                                if(parseFloat(e.target.value) > 100) e.target.value = "100"
                                                                setNewLine({...newLine, discount: e.target.value})
                                                            }}
                                                            className='text-end'
                                                            placeholder="0.00"
                                                        /></td>
                                                        <td className='p-0'>
                                                            <FormInput
                                                                name="select"
                                                                type="select"
                                                                className="form-select"
                                                                key="select"
                                                                value={newLine.isvType || 'G15'}
                                                                onChange={(e)=>{
                                                                    setNewLine({...newLine, isvType: e.target.value})
                                                                }}
                                                            >
                                                                <option value='G15'>G15</option>
                                                                <option value='G18'>G18</option>
                                                                <option value='EXC'>EXC</option>
                                                            </FormInput>
                                                        </td>
                                                        <td className='p-0 align-middle text-end'>{(((newLine.price || 0) * (newLine.quantity || 0)) - ((newLine.price || 0) * (newLine.quantity || 0) * (newLine.discount > 0 ? newLine.discount/100 : 0))).toFixed(2)}</td>
                                                        <td className='p-0 ps-1 align-middle'>
                                                            <Button size="sm" variant={'outline-blue'} onClick={ async ()=>{
                                                                if(!newLine.description || newLine.description === ""
                                                                || !newLine.price || newLine.price === 0
                                                                || !newLine.quantity || newLine.quantity === 0) swal.fire("Error","Porfavor rellene todos los campos","error")
                                                                else{
                                                                    let result = await addLineInvoice({
                                                                        invoiceId: invocieData.invoice_id,
                                                                        ...newLine,
                                                                        isvType: newLine.isvType || 'G15',
                                                                        discount: newLine.discount || 0
                                                                    })
                                                                    if(result.data.meta.code === 200){
                                                                        await loadInvoice()
                                                                        setNewLine({
                                                                            description: "",
                                                                            price: 0,
                                                                            quantity: 0,
                                                                            discount: 0
                                                                        })
                                                                    }else{
                                                                        swal.fire("Error al guardar",result.data.meta.message,"error")
                                                                    }
                                                                }
                                                            }}>
                                                                <i className="fas fa-save"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={7} xs={7} className="col-xl-7 col-7">
                                    <div className="float-start">
                                            <b>CAI: </b> {invocieData.sar?.cai}
                                            <br />
                                            <b>Rango de facturacion: del </b> {invocieData.sar?.start_range} 
                                            <br />
                                            <b>al</b> {invocieData.sar?.end_range}
                                            <br />
                                            <b>Fecha límite de emisión:</b> {moment(invocieData.sar?.expiration_date).format("DD-MM-YYYY")}
                                            <br />
                                            <div className="text-start">
                                                <b>Nº Orden Compra Excenta:</b>  { invocieData.number_excent ? invocieData.number_excent : "_______________________________________" }
                                            </div>
                                            <div className="text-start">
                                                <b>Nº Cons. Del Registro Exonerado:</b> { invocieData.constance_number ? invocieData.constance_number : "_______________________________________" }
                                            </div>
                                            <div className="text-start">
                                                <b>Nº Identificativo del registro de la SAG:</b>  { invocieData.excent_identify_number ? invocieData.excent_identify_number : "_______________________________________" }
                                            </div>
                                        <p>
                                        </p>
                                        <p className="m-t-10">
                                        </p>
                                        <p className="m-t-10">
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={5} xl={{ offset: 1, span: 1 }} className="col-xl-4 col-5">
                                    <div className="text-end">Exonerado: L. {numberWithCommas(invocieData.exonerated?.toFixed(2))}</div>
                                    <div className="text-end">Excento: L. {numberWithCommas(invocieData.excent?.toFixed(2))}</div>
                                    <div className="text-end">Descuentos: L. {numberWithCommas(invocieData.discounts?.toFixed(2))}</div>
                                    <div className="text-end">
                                        <b>Importe gravado 15%: </b> L. {numberWithCommas(invocieData.subtotal_15?.toFixed(2))}
                                    </div>
                                    <div className="text-end">
                                        <b>Importe gravado 18%: </b> L. {numberWithCommas(invocieData.subtotal_18?.toFixed(2))}
                                    </div>
                                    <div className="text-end">ISV 15%: L. {numberWithCommas(invocieData.tax_15?.toFixed(2))}</div>
                                    <div className="text-end">ISV 18%: L. {numberWithCommas(invocieData.tax_18?.toFixed(2))}</div>
                                    <hr/>
                                    <h3 className="text-end">Total: L. {numberWithCommas(invocieData.total?.toFixed(2))}</h3>
                                </Col>
                                <div className="text-end">
                                <b>Valor en letras:</b><br />
                                    {convertir.NumerosALetras(invocieData.total).toUpperCase().replace("PESOS", "LEMPIRAS").replace("M.N.","")}
                                </div>
                                <div className="text-end">
                                    <p>Copia Cliente/Copia Emisor</p>
                                </div>
                            </Row>
                            <hr />
                            <div className="d-print-none">
                                <div className="float-end">
                                    <Link
                                        to="#"
                                        className="btn btn-dark waves-effect waves-light me-1"
                                        onClick={(e) => {
                                            setPrinterMode("printer")
                                        }}
                                    >
                                        <i className="mdi mdi-printer"></i>
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-dark waves-effect waves-light me-1"
                                        onClick={(e) => {
                                            setPrinterMode("pos")
                                        }}
                                    >
                                        <i className="mdi mdi-printer-pos"></i>
                                    </Link>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </Card.Body>}
                    {(printerMode === "pos") && <Card.Body className='pos-print'>
                        <div className="panel-body">
                            <div className="clearfix">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={logoDark} alt="logo-dark" height="60" />
                                </div>
                                <div className="text-center">
                                    <b>{invocieData.company?.name}</b>
                                </div>
                                <div className="text-center">
                                    <b>R.T.N. {invocieData.company?.rtn}</b>
                                </div>
                                <div className="text-center">
                                    Casa matriz: {invocieData.company?.address}
                                </div>
                                <div className="text-center separator">
                                   __&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;
                                </div>
                                {
                                    invocieData.allBranchs?.map((b: any)=>{
                                        return <div key={b.branch_id}>                                        
                                            <div className="text-center">
                                                Sucursal: {b.address} <br />
                                            </div>
                                            <div className="text-center separator">
                                                __&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;
                                            </div>
                                        </div>
                                        
                                    })
                                }
                                <div className="text-center">
                                    <b>F A C T U R A</b>
                                </div>
                                <div className="text-center separator">
                                    __&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;
                                </div>
                                <div className="text-center">
                                    <b>CAI:</b> {invocieData.sar?.cai}
                                </div>
                                <div className="text-start">
                                    <strong>Rango autorizado </strong> 
                                    <br />
                                    {invocieData.sar?.start_range} al
                                    <br />
                                    {invocieData.sar?.end_range}
                                </div>
                                <div className="text-start">
                                    <b>Fecha límite de emisión:</b> {moment(invocieData.sar?.expiration_date).format("DD-MM-YYYY")}
                                </div>
                                <div className="text-center separator">
                                    __&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;
                                </div>
                                <div className="text-start">
                                    <b>Factura:</b> {invocieData.invoice_number}
                                </div>
                                <div className="text-start">
                                    <b>Documento:</b> {invocieData.document_number}
                                </div>
                                <div className="text-start">
                                    <b>Fecha:</b> {moment(invocieData.created_date).format("DD/MM/YYYY")}
                                </div>
                                <div className="text-start">
                                    Cliente Consumidor Final
                                    <br />
                                    {invocieData.customer?.name}
                                </div>
                                <br />
                                <div className="text-start">
                                    <b>R.T.N. {invocieData.customer?.rtn}</b>                                    
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-8"><b>Descripción</b></div>
                                    <div className="col-4 text-end"><b>Total</b></div>
                                </div>
                                {(invocieData.lines || []).map((item: any, idx: number) => {
                                    return (<div className="row" key={idx}>
                                            <div className="col-8">{item.quantity}x {item.description}</div>
                                            <div className="col-4 text-end">{numberWithCommas(item.subtotal.toFixed(2))}</div>
                                        </div>                                        
                                    );
                                })}
                                <br />
                                <div className="text-start">
                                    <b>Forma de pago:</b> Contado
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">Importe Exonerado L.</div>
                                    <div className="col-4 text-end">{numberWithCommas(invocieData.exonerated?.toFixed(2))}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">Importe Excento L.</div>
                                    <div className="col-4 text-end">{numberWithCommas(invocieData.excent?.toFixed(2))}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">Descuentos y Rebajas otorgados L.</div>
                                    <div className="col-4 text-end">0.00</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">Importe Gravado 15% L.</div>
                                    <div className="col-4 text-end">{numberWithCommas(invocieData.subtotal_15?.toFixed(2))}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">Importe Gravado 18% L.</div>
                                    <div className="col-4 text-end">{numberWithCommas(invocieData.subtotal_18?.toFixed(2))}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">I.S.V 15% L.</div>
                                    <div className="col-4 text-end">{numberWithCommas(invocieData.tax_15?.toFixed(2))}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-end">I.S.V 18% L.</div>
                                    <div className="col-4 text-end">{numberWithCommas(invocieData.tax_18?.toFixed(2))}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8 text-start"><b>TOTAL L.</b></div>
                                    <div className="col-4 text-end"><b>{numberWithCommas(invocieData.total?.toFixed(2))}</b></div>
                                </div>
                                <div className="text-center separator">
                                    _____________________________________
                                </div>
                                <div className="text-start">
                                    <b>Valor en letras:</b><br />
                                    {convertir.NumerosALetras(invocieData.total).toUpperCase().replace("PESOS", "LEMPIRAS").replace("M.N.","")}
                                </div>
                                <div className="text-center separator">
                                    _____________________________________
                                </div>
                                <div className="small-text">
                                    <div className="text-start">
                                        <b>Nº Orden Compra Excenta:</b>  { invocieData.number_excent ? invocieData.number_excent : "_______________________________________" }
                                    </div>
                                    <div className="text-start">
                                        <b>Nº Cons. Del Registro Exonerado:</b>  { invocieData.constance_number ? invocieData.constance_number : "_______________________________________" }
                                    </div>
                                    <div className="text-start">
                                        <b>Nº Identificativo del registro de la SAG:</b>  { invocieData.excent_identify_number ? invocieData.excent_identify_number : "_______________________________________" }
                                    </div>
                                </div>
                                <div className="text-center separator">
                                    _____________________________________
                                </div>
                                <div className="small-text text-center">
                                    La factura es beneficio de todos. Exijala <br />
                                    Atendio: {invocieData.user?.name} {moment().format("HH:mm:ss")}<br />
                                    NO SE HACEN DEVOLUCIONES POR SERVICIO DE AVALÚOS. <br />
                                    <div className="text-start">
                                        Factura Original: Cliente <br />
                                        Factura Copia: Obligado tributario emisor
                                    </div>
                                </div>
                            </div>
                            <hr />                            
                        </div>
                    </Card.Body>}
                </Card>
            </Col>
        </Row>
        <ModalExoneration data={invocieData} toggle={toggleModal} modal={modal} mode={modalMode}></ModalExoneration>
    </>
    );
};

export default InvoiceDetail;
