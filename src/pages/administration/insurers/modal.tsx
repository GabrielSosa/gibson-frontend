import { Button, Form, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TagsInput } from "react-tag-input-component";
import { useState } from 'react';
import swal from 'sweetalert2';
import { addInsurer, updateInsurer } from '../../../helpers/api/settings';

const ModalInsurer = ({ insurer, toggle, modal, action }: any) => {
    const [emails, setEmails] = useState([] as Array<any>);
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Por ingrese el nombre')
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
                <Modal.Title as="h4">{getActionText()} aseguradora</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e: any) => {
                    console.log(e)
                    let nC: any = {
                        name: e.name,
                        status: "Activo"
                    }
                    if(emails.length > 0) nC.emails = emails.join(",")
                    let response
                    if(action === "edit"){
                        nC.insurerId = insurer.insurer_id
                        response = await updateInsurer(nC)
                    } else
                        response = await addInsurer(nC)
                    if(response.data.meta.code === 200){
                        swal.fire("Exito","Cliente guardado correctamente","success")
                        toggle({...e as any, insurer_id: response.data.data.insurer_id})
                    }else {
                        swal.fire("Error",response.data.data.error.message,"error")
                    }
                }} resolver={schemaResolver} defaultValues={{...insurer}}>
                    <FormInput
                        label={'Nombre'}
                        type="text"
                        name="name"
                        placeholder="Ingrese el nombre"
                        containerClass={'mb-3'}
                    />
                    
                    <>            
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Correos</Form.Label>                        
                            <TagsInput
                                value={insurer.emails?.split(",").filter((e: any) => e !== "")}
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

export default ModalInsurer;
