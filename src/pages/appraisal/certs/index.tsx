import Table from '../../../components/Table';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { usePageTitle } from '../../../hooks';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader2 from '../../../components/Loader2';
import { getCerts } from '../../../helpers/api/inspection';
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

const Certs = () => {
    const [allCerts, setCerts] = useState<Array<any>>([])
    const [loading, setLoading] = useState(false);
    
    usePageTitle({
        title: 'Certificados',
        breadCrumbItems: [
            {
                path: '/appraisal/certs',
                label: 'Certificados',
            },
            {
                path: '/appraisal/certs',
                label: 'Certificados',
                active: true,
            },
        ],
    });

    const columns = [
        {
            Header: 'ID',
            accessor: 'cert_id',
            sort: true,
        },
        {
            Header: 'Número',
            accessor: 'code',
            sort: true,
        },
        {
            Header: 'Vehiculo',
            accessor: 'vehicle_name',
            sort: false,
        },
        {
            Header: 'Estado',
            id: 'status',
            sort: true,
            accessor: 'status',
            Cell: (cellInfo: any) => {
                const certData = cellInfo.row.original
                return <div className="d-flex justify-content-start">            
                    <Badge bg={certData.status_color} className="float-end">
                        {certData.status}
                    </Badge>
                </div>
            }
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'cert_id',
            Cell: (cellInfo: any) => {
                const certData = cellInfo.row.original
                return <Link to={"/appraisal/cert-detail/"+certData.cert_id+"/"+certData.appraisal_id}>
                    <button className="btn btn-blue mr-2"><i className="mdi mdi-book-edit"></i></button>
                </Link>
            }
        }
    ];

    const loadCerts = async () => {
        setLoading(true)
        let response = await getCerts({})
        setCerts(response.data.data)
        setLoading(false)
    }

    useEffect(()=>{
        loadCerts()
    },[])

    return <>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Lista de certificados</h4>
                        <Table
                            columns={columns}
                            data={allCerts}
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
    </>;
};

export default Certs;
