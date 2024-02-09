import { Button, Form, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// types
import { Customer } from './types';
import { createCustomer, updateCustomer } from '../../../helpers/api/reception';
import { TagsInput } from "react-tag-input-component";
import { useState } from 'react';
import swal from 'sweetalert2';

type CustomerData = {
    customer_id?: number;
    name: string;
    identity: string;
    phone: string;
    rtn: string;
    email: string;
    is_excent: boolean;
};

type CustomerProp = {
    customer: Customer;
    toggle: (customer?: Customer) => any;
    modal: boolean;
    action?: string;
};

const ModalCustomer = ({ customer, toggle, modal, action }: CustomerProp) => {
    const [emails, setEmails] = useState([] as Array<any>);
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Por ingrese el nombre'),
            phone: yup.string().min(8,"Debe ingresar al menos 8 numeros").required('Por favor ingrese el telefono'),
            mail: yup.string().email()
        })
    );

    const getActionText = () => {
        switch (action) {
            case "edit":
                return "Editar"
        
            default:
                return "Agregar"
                
        }
    }
    return (
        <Modal show={modal} onHide={()=>{toggle()}} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">{getActionText()} cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<CustomerData> onSubmit={async (e) => {
                    let nC: any = {
                        name: e.name,
                        phone: e.phone,
                        isExcent: e.is_excent || false
                    }
                    if(e.is_excent && e.rtn === ""){
                        swal.fire("Error","Por favor ingrese un RTN","error")
                    } else {
                        if(e.rtn !== "") nC.rtn = e.rtn
                        if(e.identity !== "") nC.identity = e.identity
                        if(emails.length > 0) nC.email = emails.join(",")
                        let response
                        if(action === "edit"){
                            if(nC.isExcent === 1 || nC.isExcent) nC.isExcent = true
                            else nC.isExcent = false
                            nC.customer_id = customer.customer_id
                            response = await updateCustomer(nC)
                        } else
                            response = await createCustomer(nC)
                        if(response.data.meta.code === 200){
                            swal.fire("Exito","Cliente guardado correctamente","success")
                            toggle({...e as any, customer_id: response.data.data.customerId})
                        }else {
                            swal.fire("Error",response.data.data.error.message,"error")
                        }
                    }
                }} resolver={schemaResolver} defaultValues={{...customer}}>
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
                        label={'Numero de identidad'}
                        type="text"
                        name="identity"
                        placeholder="Ingrese el numero de identidad"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'RTN'}
                        type="text"
                        name="rtn"
                        placeholder="Ingrese el RTN"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'¿Es exonerado?'}
                        type="checkbox"
                        name="is_excent"
                        containerClass={'mb-3'}
                    />
                    <>            
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Correos</Form.Label>                        
                            <TagsInput
                                value={customer.email?.split(",").filter(e => e !== "")}
                                onChange={setEmails}
                                
                                name="emails"
                                placeHolder="Agregue correos"
                            />
                        </Form.Group>
                    </>

                    <Button variant="primary" className="waves-effect waves-light me-1 rounded-pill" type="submit">
                        {getActionText()}
                    </Button>
                    <Button variant="light" className="waves-effect waves-light rounded-pill" onClick={()=>{toggle()}}>
                        Cancelar
                    </Button>
                </VerticalForm>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCustomer;
