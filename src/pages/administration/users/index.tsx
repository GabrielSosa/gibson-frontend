// hooks
import { Card, Col, Row } from 'react-bootstrap';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../../hooks';
import ModalUser from './modal'
import { cleanUser } from './types';

import { useEffect, useState } from 'react';
import { getUsers, getUserTypes } from '../../../helpers/api/settings';
import { getAllBrnahces } from '../../../helpers/api/invoices';
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

const Users = () => {

    const [modal, setModal] = useState<boolean>(false);
    const [action, setAction] = useState<string>("create");
    const [currentUser, setCurrentUser] = useState<any>(cleanUser);
    const [allUsers, setAllUsers] = useState<Array<any>>([])
    const [allUserTypes, setAllUserTypes] = useState<Array<any>>([])
    const [allBranches, setAllBranches] = useState<Array<any>>([])
    const [loading, setLoading] = useState(false);
    const toggleModal = (refresh?: boolean) => {
        if(modal){
            setCurrentUser({})
            if(refresh)
                loadUsers();
        } else {
        }
        setModal(!modal);
    };

    const columns = [
        {
            Header: 'ID',
            accessor: 'user_id',
            sort: true,
        },
        {
            Header: 'Tipo de usuario',
            accessor: 'user_type_name',
            sort: true,
        },
        {
            Header: 'Nombre',
            accessor: 'name',
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
            accessor: 'id',
            Cell: (cellInfo: any) => {
                const userData = cellInfo.row.original
                return <>
                    <button className="btn btn-blue ml-2" onClick={()=>{editUser(userData)}}><i className="mdi mdi-lead-pencil"></i></button>
                </>
            }
        }
    ];

    const editUser = async (userData: any) => {
        setCurrentUser(userData);
        setAction("edit")
        toggleModal();
    }


    // set pagetitle
    usePageTitle({
        title: 'Usuarios',
        breadCrumbItems: [
            {
                path: '/settings/users',
                label: 'Configuración',
            },
            {
                path: '/settings/users',
                label: 'Usuarios',
                active: true,
            },
        ],
    });

    const loadUsers = async () => {
        setLoading(true)
        let responseTypes = await getUserTypes()
        setAllUserTypes(responseTypes.data.data);
        let responseBranches = await getAllBrnahces()
        setAllBranches(responseBranches.data.data);
        let response = await getUsers()
        setAllUsers(response.data.data.map((user: any) => {
            return {
                ...user,
                user_type_name: responseTypes.data.data.find((ut: any) => ut.user_type_id === user.user_type_id ).name,
                userTypeId: user.user_type_id,
                branchId: user.branch_id
            }
        }));
        setLoading(false)
    }

    useEffect(()=>{
        loadUsers()
    },[])

    return <>
        <Row>    
            <Col sm={4}>
                <Link to="#" onClick={()=> {
                    toggleModal(false)
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
                        <h4 className="header-title">Lista de usuarios</h4>
                        <Table
                            columns={columns}
                            data={allUsers}
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
        <ModalUser user={currentUser} types={allUserTypes} branches={allBranches} toggle={toggleModal} action={action} modal={modal}></ModalUser>
    </>;
};

export default Users;
