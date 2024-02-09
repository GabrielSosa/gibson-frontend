// hooks
import {Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { usePageTitle } from '../../../hooks';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVehicleTypeById } from '../../../helpers/api/settings';
import Loader2 from '../../../components/Loader2';
import ModalInspection from './modalInspection';

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
    const [allInspections, setAllInspections] = useState<Array<any>>([])
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
            accessor: 'inspection_item_id',
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
            Header: 'Acciones',
            id: 'edit',
            accessor: 'id',
            Cell: (cellInfo: any) => {
                const inspectionData = cellInfo.row.original
                return <>
                    <button className="btn btn-blue ml-2" onClick={()=>{editInspection(inspectionData.inspection_item_id)}}><i className="mdi mdi-lead-pencil"></i></button>           
                </>
            }
        }
    ];
    
    const editInspection = async (inspectionItemId: number) => {
        // fetch sar
        let evItem: any = allInspections.find((vt: any) => vt.inspection_item_id === inspectionItemId);
        setCurrentEvItem(evItem);
        setAction("edit")
        toggleModal();
    }


    // set pagetitle
    usePageTitle({
        title: 'Lista de inspección mecanica',
        breadCrumbItems: [
            {
                path: '/settings/vehicle-types',
                label: 'Configuración',
            },
            {
                path: '/settings/vehicle-types',
                label: 'Lista de inspección mecanica',
                active: true,
            },
        ],
    });
    const getVehicleData = async () => {
        let response = await getVehicleTypeById({id: params["id"]})
        setCurrentVehicleType(response.data.data)
        setAllInspections(response.data.data.inspections || [])
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
                        <h4 className="header-title">Lista de inspección para {currentVehicleType.name}</h4>
                        <Table
                            columns={columns}
                            data={allInspections}
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
        <ModalInspection vehicleType={currentVehicleType} item={currentEvItem} toggle={toggleModal} action={action} modal={modal}></ModalInspection>
    </>;
};

export default VehycleTypeEvaluations;
