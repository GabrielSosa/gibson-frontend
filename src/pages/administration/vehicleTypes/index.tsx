// hooks
import { Badge, Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { usePageTitle } from '../../../hooks';
import { useEffect, useState } from 'react';
import ModalVehicleType from './modal'
import { Link } from 'react-router-dom';
import { getAllVehicleTypes } from '../../../helpers/api/settings';
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

const VehycleTypes = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [allVehicleTypes, setAllVehicleTypes] = useState<Array<any>>([])
    const [currentVehicleType, setCurrentVehicleType] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const toggleModal = (refresh?: boolean) => {
        if(modal){
            setCurrentVehicleType({})
            if(refresh)
                loadVehicleTypes();
        } else {
        }
        setModal(!modal);
    };

    const columns = [
        {
            Header: 'ID',
            accessor: 'vehicle_type_id',
            sort: true,
        },
        {
            Header: 'Nombre',
            accessor: 'name',
            sort: true,
        },
        {
            Header: 'Descripción',
            accessor: 'description',
            sort: false,
        },
        {
            Header: 'Precio de avaluo',
            accessor: 'price',
            sort: true,
        },{
            Header: 'Estado',
            id: 'status',
            accessor: 'status',
            Cell: (cellInfo: any) => {
                const vehcileTypeData = cellInfo.row.original
                return <div className="d-flex justify-content-start">            
                    <Badge bg={vehcileTypeData.status_color} className="float-end">
                        {vehcileTypeData.status}
                    </Badge>
                </div>
            }
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'id',
            Cell: (cellInfo: any) => {
                const vehcileTypeData = cellInfo.row.original
                return <>
                    <button className="btn btn-blue ml-2" onClick={()=>{editVehicleType(vehcileTypeData.vehicle_type_id)}}><i className="mdi mdi-lead-pencil"></i></button>
                    <Link className='ms-1' to={"/settings/vehicle-type/inspection-list/"+vehcileTypeData.vehicle_type_id}>
                        <button className="btn btn-blue mr-2"><i className="mdi mdi-car"></i></button>
                    </Link>
                    <Link className='ms-1' to={"/settings/vehicle-type/evaluation-list/"+vehcileTypeData.vehicle_type_id}>
                        <button className="btn btn-blue mr-2"><i className="mdi mdi-car-cog"></i></button>
                    </Link>
                </>
            }
        }
    ];
    
    const editVehicleType = async (vehicleTypeId: number) => {
        // fetch sar
        let vehicleType: any = allVehicleTypes.find((vt: any) => vt.vehicle_type_id === vehicleTypeId);
        setCurrentVehicleType(vehicleType);
        setAction("edit")
        toggleModal();
    }


    // set pagetitle
    usePageTitle({
        title: 'Tipos de vehiculo',
        breadCrumbItems: [
            {
                path: '/settings/vehicle-types',
                label: 'Configuración',
            },
            {
                path: '/settings/vehicle-types',
                label: 'Tipos de vehiculo',
                active: true,
            },
        ],
    });

    const loadVehicleTypes = async () => {
        setLoading(true)
        let response = await getAllVehicleTypes({})
        setAllVehicleTypes(response.data.data.map((vt: any) => {
            return {...vt, status_color: "success"}
        }))
        setLoading(false)
    }

    useEffect(()=>{
        loadVehicleTypes()
    },[])

    return <>
        <Row>    
            <Col sm={4}>
                <Link to="#" onClick={()=>{
                    setAction("create")
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
                        <h4 className="header-title">Lista de tipos de vehiculo</h4>
                        <Table
                            columns={columns}
                            data={allVehicleTypes}
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
        <ModalVehicleType vehicleType={currentVehicleType} toggle={toggleModal} action={action} modal={modal}></ModalVehicleType>
    </>;
};

export default VehycleTypes;
