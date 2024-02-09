import Table from '../../../components/Table';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { usePageTitle, useUser } from '../../../hooks';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllInvoices } from '../../../helpers/api/invoices';
import moment from 'moment';
import ModalNewInvoice from './addModal';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import Loader2 from '../../../components/Loader2';
const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    }
];

const Invoices = () => {
    //const [currentInvoice, setCurrentInvoice] = useState<any>({});
    const [modal, setModal] = useState<boolean>(false);
    const [allInvoices, setAllInvoices] = useState<Array<any>>([])
    const navigate = useNavigate();
    const [loggedInUser] = useUser();
    const [loading, setLoading] = useState(false);
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
        title: 'Facturas',
        breadCrumbItems: [
            {
                path: '/appraisal/invoices',
                label: 'Avaluos',
            },
            {
                path: '/appraisal/invoices',
                label: 'Avaluos',
                active: true,
            },
        ],
    });

    const columns = [
        {
            Header: 'ID',
            accessor: 'invoice_id',
            sort: true,
        },
        {
            Header: 'Cliente',
            accessor: 'customer_name',
            sort: true,
        },
        {
            Header: 'Descripcion',
            accessor: 'description',
            sort: true,
        },
        {
            Header: 'Numero de fatura',
            accessor: 'invoice_number',
            sort: false,
        },
        {
            Header: 'Fecha',
            accessor: 'date',
            sort: false,
        },
        {
            Header: 'Estado',
            id: 'status_name',
            accessor: 'status_name',
            Cell: (cellInfo: any) => {
                const appraisalData = cellInfo.row.original
                return <div className="d-flex justify-content-start">            
                    <Badge bg={appraisalData.status_color} className="float-end">
                        {appraisalData.status_name}
                    </Badge>
                </div>
            }
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'invoice_id',
            Cell: (cellInfo: any) => {
                const appraisalData = cellInfo.row.original
                return <Link to={"/appraisal/invoice-detail/"+appraisalData.invoice_id}>
                    <button className="btn btn-blue mr-2"><i className="mdi mdi-eye"></i></button>
                </Link>
            }
        }
    ];

    const toggleModal = (newInvoice?: any) => {
        setModal(!modal);
        if(newInvoice.invoice_id){
            swal.fire('Creado!', 'Se creo una factura para el cliente con identificador: '+newInvoice.invoice_id, 'success').then(()=>{
                navigate("/appraisal/invoice-detail/"+newInvoice.invoice_id, { replace: true });
            });
        }
    };


    
    const loadInvoices = async () => {
        setLoading(true)
        let response = await getAllInvoices({})
        setAllInvoices(response.data.data.map((inv: any) => {
            return {
                ...inv,
                date: moment(inv.date).format('L'),
                status_name: statusInfo[inv.status].name,
                status_color: statusInfo[inv.status].color
            }
        }))
        setLoading(false)
    }

    useEffect(()=>{
        loadInvoices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return <>   
        <Row>    
            <Col sm={4}>
                <Link to="#" hidden={loggedInUser.role !== "Admin" && loggedInUser.role !== "Invoice"} onClick={()=>{
                    setModal(true);
                }} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3">
                    <i className="mdi mdi-plus me-1"></i>
                    Agregar
                </Link>
            </Col>
        </Row>     
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Lista de facturas</h4>
                        <Table
                            columns={columns}
                            data={allInvoices}
                            pageSize={5}
                            sizePerPageList={sizePerPageList}
                            isSortable={true}
                            pagination={true}
                            isSearchable={true}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Loader2  loading={loading}/>
        <ModalNewInvoice toggle={toggleModal} modal={modal}></ModalNewInvoice>
    </>;
};

export default Invoices;
