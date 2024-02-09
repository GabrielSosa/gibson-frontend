import { Button, Form, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Typeahead } from 'react-bootstrap-typeahead';
// types
import { Branch } from './types';
import { useEffect, useState } from 'react';
import { addBranch, getAllSarSetting } from '../../../helpers/api/invoices';
import { updateBranch } from '../../../helpers/api/settings';
import swal from 'sweetalert2';

type BranchProp = {
    branch: Branch;
    toggle: () => any;
    modal: boolean;
    action?: string;
};

const ModalBranch = ({ branch, toggle, modal, action }: BranchProp) => {
    const [sarSelected, setSarSelected] = useState([] as any)
    const [allSars, setAllSars] = useState([] as any);
    const [blur, setBlur] = useState(true)

    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            phone: yup.string().required('Por favor ingrese el telefono'),
            name: yup.string().required('Por favor ingrese el nombre'),
            address: yup.string().required('Por favor ingrese la direccion'),
            country_code: yup.string().required('Por favor ingrese el código de pais')
        })
    );

    const onChangeSar = (sarSelec: any[]) => {
        if(sarSelec.length > 0){
            setSarSelected(sarSelec)
        }
    };

    const getActionText = () => {
        switch (action) {
            case "edit":
                return "Editar"
            default:
                return "Agregar"
        }
    }

    const loadSars = async () => {
        let result = await getAllSarSetting();
        setAllSars(result.data.data)
        
    }

    useEffect(()=>{
        loadSars()
    },[])

    useEffect(()=>{
        if(modal && branch.sar_setting_id){
            setSarSelected([allSars.find((vt: any) => vt.sar_setting_id === branch.sar_setting_id)])
        }
    },[modal,allSars,branch])

    return (
        <Modal show={modal} onHide={toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">{getActionText()}  sucursal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e: any) => {
                    let newBranch: any = {
                        sarSettingId: sarSelected[0].sar_setting_id,
                        name: e.name,
                        address: e.address,
                        phone: e.phone,
                        countryCode: e.country_code
                    }

                    let result 
                    
                    if(action === "edit"){
                        newBranch.branchId = e.branch_id
                        result = await updateBranch(newBranch)
                    }else {
                        result = await addBranch(newBranch)
                    }
                    if(result.data.meta.code === 200){
                        toggle();
                    }else {
                        swal.fire("Error",result.data.data.error.message,"error")
                    }
                }} resolver={schemaResolver} defaultValues={{...branch}}>
                    <Form.Group className="mb-3" controlId="validationCustom01">                        
                        <Typeahead
                            id="sarId"
                            labelKey={'cai'}
                            multiple={false}
                            isValid={sarSelected[0] ? true : false}
                            maxResults={4}
                            onBlur={()=> { setBlur(true)}}
                            onFocus={()=> { setBlur(false)}}
                            onChange={onChangeSar}
                            options={allSars}
                            allowNew={false}
                            selected={blur ? sarSelected : undefined}
                            placeholder="Escoge un ajuste de sar..."
                        />
                    </Form.Group>
                    <FormInput
                        label={'Nombre'}
                        type="text"
                        name="name"
                        placeholder="Ingrese el nombre"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Telefono'}
                        type="text"
                        name="phone"
                        placeholder="Ingrese el telefono"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Dirección'}
                        type="text"
                        name="address"
                        placeholder="Ingrese la dirección"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Codigo de pais'}
                        type="text"
                        name="country_code"
                        placeholder="Ingrese el codigo de pais"
                        containerClass={'mb-3'}
                    />

                    <Button variant="primary" className="waves-effect waves-light me-1 rounded-pill" type="submit">
                        {getActionText()}
                    </Button>
                    <Button variant="light" className="waves-effect waves-light rounded-pill" onClick={toggle}>
                        Cancelar
                    </Button>
                </VerticalForm>
            </Modal.Body>
        </Modal>
    );
};

export default ModalBranch;
