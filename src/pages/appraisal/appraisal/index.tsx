import Table from '../../../components/Table';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { usePageTitle } from '../../../hooks';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllAppraisal } from '../../../helpers/api/reception';
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

const Appraisal = () => {
    const [allAppraisals, setAllAppraisals] = useState<Array<any>>([])
    const [loading, setLoading] = useState(false);
    const purposeList: any = {
        "insurance": "Seguro",
        "buysell":"Compra/Venta",
        "agency":"Agencia",
        "guaranty":"Garantia",
        "repair":"Reparaciòn"
    }
    usePageTitle({
        title: 'Avaluos',
        breadCrumbItems: [
            {
                path: '/appraisal/appraisal',
                label: 'Avaluos',
            },
            {
                path: '/appraisal/appraisal',
                label: 'Avaluos',
                active: true,
            },
        ],
    });

    const columns = [
        {
            Header: 'ID',
            accessor: 'appraisal_id',
            sort: true,
        },
        {
            Header: 'Cliente',
            accessor: 'customer_name',
            sort: true,
        },
        {
            Header: 'Vehiculo',
            accessor: 'vehicle_name',
            sort: false,
        },
        {
            Header: 'Propositos',
            accessor: 'purposes',
            sort: false,
        },
        {
            Header: 'Proceso',
            id: 'process_name',
            sort: true,
            accessor: 'process_name',
            Cell: (cellInfo: any) => {
                const appraisalData = cellInfo.row.original
                return <div className="d-flex justify-content-start">            
                    <Badge bg={appraisalData.process_color} className="float-end">
                        {appraisalData.process_name}
                    </Badge>
                </div>
            }
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'customer_id',
            Cell: (cellInfo: any) => {
                const appraisalData = cellInfo.row.original
                return <Link to={"/appraisal/appraisal-detail/"+appraisalData.appraisal_id}>
                    <button className="btn btn-blue mr-2"><i className="mdi mdi-book-edit"></i></button>
                </Link>
            }
        }
    ];

    const loadAppraisals = async () => {
        setLoading(true)
        let response = await getAllAppraisal({})
        setAllAppraisals(response.data.data.map((v: any) => {
            return {
                ...v,
                purposes: v.purposes.split(",").map((p: any) => purposeList[p]).join(", "),
                vehicle_name: v.brand + " " + v.model,
                process_name: v.status,
                process_color: v.status_color
            }
        }))
        setLoading(false)
    }

    useEffect(()=>{
        loadAppraisals()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Lista de avaluos</h4>
                        <Table
                            columns={columns}
                            data={allAppraisals}
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

export default Appraisal;
