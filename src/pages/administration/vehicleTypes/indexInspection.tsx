// hooks
import {Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { usePageTitle } from '../../../hooks';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVehicleTypeById } from '../../../helpers/api/settings';
import Loader2 from '../../../components/Loader2';
import ModalEvaluation from './modalEvaluation';

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

const VehycleTypeEvaluations = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [allEvaluations, setAllEvaluations] = useState<Array<any>>([])
    const [currentVehicleType, setCurrentVehicleType] = useState<any>({});
    const [currentEvItem, setCurrentEvItem] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const params = useParams()
    const toggleModal = (refresh?: boolean) => {
        if(modal){
            if(refresh)
                loadVehicleTypes();
        } else {
        }
        setModal(!modal);
    };

    const columns = [
        {
            Header: 'ID',
            accessor: 'evaluation_item_id',
            sort: true,
        },
        {
            Header: 'Sección',
            accessor: 'name',
            sort: true,
        },
        {
            Header: 'Descripción',
            accessor: 'description',
            sort: false,
        },
        {
            Header: 'Tipo de entrada',
            accessor: 'type',
            sort: true,
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'id',
            Cell: (cellInfo: any) => {
                const evaluationData = cellInfo.row.original
                return <>
                    <button className="btn btn-blue ml-2" onClick={()=>{editEvaluation(evaluationData.evaluation_item_id)}}><i className="mdi mdi-lead-pencil"></i></button>           
                </>
            }
        }
    ];
    
    const editEvaluation = async (evaluationItemId: number) => {
        // fetch sar
        let evItem: any = allEvaluations.find((vt: any) => vt.evaluation_item_id === evaluationItemId);
        setCurrentEvItem(evItem);
        setAction("edit")
        toggleModal();
    }


    // set pagetitle
    usePageTitle({
        title: 'Lista de evaluacion fisica',
        breadCrumbItems: [
            {
                path: '/settings/vehicle-types',
                label: 'Configuración',
            },
            {
                path: '/settings/vehicle-types',
                label: 'Lista de evaluacion fisica',
                active: true,
            },
        ],
    });
    const getVehicleData = async () => {
        let response = await getVehicleTypeById({id: params["id"]})
        setCurrentVehicleType(response.data.data)
        setAllEvaluations(response.data.data.evaluations || [])
    }
    const loadVehicleTypes = async () => {
        setLoading(true)
        await getVehicleData();
        
        setLoading(false)
    }

    useEffect(()=>{
        loadVehicleTypes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <>
        <Row>    
            <Col sm={4}>
                <Link to="#" onClick={()=>{
                    setAction("create")
                    setCurrentEvItem(undefined)
                    toggleModal()
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
                        <h4 className="header-title">Lista de evaluacion para {currentVehicleType.name}</h4>
                        <Table
                            columns={columns}
                            data={allEvaluations}
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
        <ModalEvaluation vehicleType={currentVehicleType} item={currentEvItem} toggle={toggleModal} action={action} modal={modal}></ModalEvaluation>
    </>;
};

export default VehycleTypeEvaluations;
