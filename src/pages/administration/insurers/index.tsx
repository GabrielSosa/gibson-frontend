// hooks
import { Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../../hooks';
import { useEffect, useState } from 'react';
import Loader2 from '../../../components/Loader2';
import { getInsurers } from '../../../helpers/api/settings';
import ModalInsurer from './modal';
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

const Insurers = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [currentInsurer, setCurrentInsurer] = useState<any>({});
    const [allInsurers, setAllInsurers] = useState<Array<any>>([])
    const [loading, setLoading] = useState(false);
    const columns = [
        {
            Header: 'ID',
            accessor: 'insurer_id',
            sort: true,
        },
        {
            Header: 'Nombre',
            accessor: 'name',
            sort: true,
        },
        {
            Header: 'Correo',
            accessor: 'emails',
            sort: true,
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'customer_id',
            Cell: (cellInfo: any) => {
                const data = cellInfo.row.original
                return <>            
                    <button className="btn btn-blue mr-2" onClick={()=>{editCustomer(data.insurer_id)}}><i className="mdi mdi-lead-pencil"></i></button>
                    {/*<button className="btn btn-blue" onClick={()=>{editCustomer(customer_id)}}><i className="mdi mdi-car"></i></button>*/}
                </>
            }
        }
    ];
    
    const toggleModal = (newInsurer?: any) => {
        if(newInsurer)
            loadInsurers();
        setModal(!modal);
    };

    const editCustomer = async (insurer_id: number) => {
        // fetch customer
        let insurer = allInsurers.find(c => c.insurer_id === insurer_id)
        setCurrentInsurer(insurer);
        setAction("edit")
        toggleModal();
    }

    // set pagetitle
    usePageTitle({
        title: 'Aseguradoras',
        breadCrumbItems: [
            {
                path: '/settings/',
                label: 'Configuración',
            },
            {
                path: '/settings/Insurers',
                label: 'Aseguradoras',
                active: true,
            },
        ],
    });
    const loadInsurers = async () => {
        setLoading(true)
        let response = await getInsurers()
        console.log(response.data)
        setAllInsurers(response.data.data)
        setLoading(false)
    }

    useEffect(()=>{
        loadInsurers()
    },[])
    return <>
        <Row>    
            <Col sm={4}>
                <Link to="#" onClick={()=>{
                    setAction("add")
                    setCurrentInsurer({});
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
                        <h4 className="header-title">Lista de aseguradoras</h4>
                        <Table
                            columns={columns}
                            data={allInsurers}
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
        <ModalInsurer insurer={currentInsurer} toggle={toggleModal} action={action} modal={modal}></ModalInsurer>
    </>;
};

export default Insurers;
