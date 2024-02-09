// hooks
import { Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../../hooks';
import ModalCustomer from './modal'
import { Customer, cleanCustomer } from './types';

import { useEffect, useState } from 'react';
import { getAllCustomers } from '../../../helpers/api/reception';
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

const Customers = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [currentCustomer, setCurrentCustomer] = useState<Customer>(cleanCustomer);
    const [allCustomers, setAllCustomers] = useState<Array<any>>([])
    const [loading, setLoading] = useState(false);
    const columns = [
        {
            Header: 'ID',
            accessor: 'customer_id',
            sort: true,
        },
        {
            Header: 'Nombre',
            accessor: 'name',
            sort: true,
        },
        {
            Header: 'Identidad',
            accessor: 'identity',
            sort: false,
        },
        {
            Header: 'Telefono',
            accessor: 'phone',
            sort: false,
        },
        {
            Header: 'Correo',
            accessor: 'email',
            sort: true,
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'customer_id',
            Cell: (cellInfo: any) => {
                const data = cellInfo.row.original
                return <>            
                    <button className="btn btn-blue mr-2" onClick={()=>{editCustomer(data.customer_id)}}><i className="mdi mdi-lead-pencil"></i></button>
                    {/*<button className="btn btn-blue" onClick={()=>{editCustomer(customer_id)}}><i className="mdi mdi-car"></i></button>*/}
                </>
            }
        }
    ];
    
    const toggleModal = (newCustomer?: Customer) => {
        if(newCustomer)
            loadCustomers();
        setModal(!modal);
    };

    const editCustomer = async (customer_id: number) => {
        // fetch customer
        let customer = allCustomers.find(c => c.customer_id === customer_id)
        setCurrentCustomer(customer);
        setAction("edit")
        toggleModal();
    }

    // set pagetitle
    usePageTitle({
        title: 'Clientes',
        breadCrumbItems: [
            {
                path: '/appraisal/',
                label: 'Avaluos',
            },
            {
                path: '/appraisal/customers',
                label: 'Clientes',
                active: true,
            },
        ],
    });
    const loadCustomers = async () => {
        setLoading(true)
        let response = await getAllCustomers({})
        setAllCustomers(response.data.data)
        setLoading(false)
    }

    useEffect(()=>{
        loadCustomers()
    },[])
    return <>
        <Row>    
            <Col sm={4}>
                <Link to="#" onClick={()=>{
                    setAction("add")
                    setCurrentCustomer(cleanCustomer);
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
                        <h4 className="header-title">Lista de clientes</h4>
                        <Table
                            columns={columns}
                            data={allCustomers}
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
        <ModalCustomer customer={currentCustomer} toggle={toggleModal} action={action} modal={modal}></ModalCustomer>
    </>;
};

export default Customers;
