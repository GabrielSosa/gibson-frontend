// hooks
import { Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { usePageTitle } from '../../../hooks';
import { useEffect, useState } from 'react';
import ModalSar from './modal'
import { SarSetting, cleanSarSetting } from './types';
import { Link } from 'react-router-dom';
import { getAllSarSetting } from '../../../helpers/api/invoices';
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

const Sar = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [allSars, setAllSars] = useState([] as any);
    const [currentSarSetting, setCurrentSarSetting] = useState<SarSetting>(cleanSarSetting);
    const [loading, setLoading] = useState(false);
    const toggleModal = () => {
        if(modal){
            setCurrentSarSetting(cleanSarSetting)
            loadSars();
        } else {
        }
        setModal(!modal);
    };

    const columns = [
        {
            Header: 'ID',
            accessor: 'sar_setting_id',
            sort: true,
        },
        {
            Header: 'Cai',
            accessor: 'cai',
            sort: true,
        },
        {
            Header: 'Prefijo',
            accessor: 'prefix',
            sort: false,
        },
        {
            Header: 'Rango Inicial',
            accessor: 'start_range',
            sort: true,
        },
        {
            Header: 'Rango Final',
            accessor: 'end_range',
            sort: false,
        },
        {
            Header: 'Siguiente número',
            accessor: 'next_number',
            sort: false,
        },
        {
            Header: 'Fecha de expiration',
            accessor: 'expiration_date',
            sort: false,
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'id',
            Cell: (cellInfo: any) => {
                const sarData = cellInfo.row.original
                return <>
                    <button className="btn btn-blue ml-2" onClick={()=>{editSar(sarData.sar_setting_id)}}><i className="mdi mdi-lead-pencil"></i></button>           
                </>
            }
        }
        
    ];
    
    const editSar = async (sar_id: number) => {
        let sarSetting: any = allSars.find((vt: any) => vt.sar_setting_id === sar_id);
        setCurrentSarSetting(sarSetting);
        setAction("edit")
        toggleModal();
    }


    // set pagetitle
    usePageTitle({
        title: 'Sar',
        breadCrumbItems: [
            {
                path: '/settings/sar',
                label: 'Configuración',
            },
            {
                path: '/settings/sar',
                label: 'Sar',
                active: true,
            },
        ],
    });
    
    const loadSars = async () => {
        setLoading(true)
        let result = await getAllSarSetting();
        setAllSars(result.data.data)
        setLoading(false)
    }

    useEffect(()=>{
        loadSars()
    },[])

    return <>
        <Row>    
            <Col sm={4}>
                <Link to="#" onClick={toggleModal} className="btn btn-blue rounded-pill w-md waves-effect waves-light mb-3">
                    <i className="mdi mdi-plus me-1"></i>
                    Agregar
                </Link>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Lista de rangos de facturacion</h4>
                        <Table
                            columns={columns}
                            data={allSars}
                            pageSize={5}
                            sizePerPageList={sizePerPageList}
                            isSortable={true}
                            pagination={true}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Loader2  loading={loading}/>
        <ModalSar sarSetting={currentSarSetting} toggle={toggleModal} action={action} modal={modal}></ModalSar>
    </>;
};

export default Sar;
