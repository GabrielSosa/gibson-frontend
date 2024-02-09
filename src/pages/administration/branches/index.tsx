// hooks
import { Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../../hooks';
import ModalBranch from './modal'
import Loader2 from '../../../components/Loader2';
import { useEffect, useState } from 'react';
import { getAllBrnahces } from '../../../helpers/api/invoices';


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

const Branches = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [currentBranch, setCurrentBranch] = useState<any>({});
    const [allBranches, setAllBranches] = useState([] as any);
    const [loading, setLoading] = useState(false);
    const toggleModal = () => {
        if(modal){
            setCurrentBranch({})
            loadBranches();
        } else {
        }
        setModal(!modal);
    };
    const columns = [
        {
            Header: 'ID',
            accessor: 'branch_id',
            sort: true,
        },
        {
            Header: 'Nombre',
            accessor: 'name',
            sort: true,
        },
        {
            Header: 'Telefono',
            accessor: 'phone',
            sort: false,
        },
        {
            Header: 'Dirección',
            accessor: 'address',
            sort: true,
        },
        {
            Header: 'Acciones',
            id: 'edit',
            accessor: 'id',
            Cell: (cellInfo: any) => {
                const branchData = cellInfo.row.original
                return <>
                    <button className="btn btn-blue ml-2" onClick={()=>{editBranch(branchData.branch_id)}}><i className="mdi mdi-lead-pencil"></i></button>           
                </>
            }
        }
    ];
    // set pagetitle
    usePageTitle({
        title: 'Sucursales',
        breadCrumbItems: [
            {
                path: '/settings/branches',
                label: 'Configuración',
            },
            {
                path: '/settings/branches',
                label: 'Sucursales',
                active: true,
            },
        ],
    });

    const editBranch = async (branchId: number) => {
        let branch: any = allBranches.find((vt: any) => vt.branch_id === branchId);
        setCurrentBranch(branch);
        setAction("edit")
        toggleModal();
    }

    const loadBranches = async () => {
        setLoading(true)
        let result = await getAllBrnahces();
        setAllBranches(result.data.data)
        setLoading(false)
    }

    useEffect(()=>{
        loadBranches()
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
                        <h4 className="header-title">Lista de sucursales</h4>
                        <Table
                            columns={columns}
                            data={allBranches}
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
        <ModalBranch branch={currentBranch} toggle={toggleModal} modal={modal} action={action}></ModalBranch>
    </>;
};

export default Branches;
