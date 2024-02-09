import { Button, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ModalNote = ({ data, toggle, modal, mode }: any) => {
    //const [emails, setEmails] = useState([] as Array<any>);
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            
        })
    );

    return (
        <Modal show={modal} onHide={()=>{toggle()}} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">{data.apraisal_note_id ? "Editar": "Agregar"} nota</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e) => {
                    toggle(e.description, e.price);
                }} resolver={schemaResolver} defaultValues={{...data}}>
                    
                    <FormInput
                        label={'Descripcion'}
                        type="text"
                        name="description"
                        placeholder="Ingrese descripcion de la nota"
                        containerClass={'mb-3'}
                    />      
                    <FormInput
                        label={'Precio'}
                        type="text"
                        name="price"
                        placeholder="Ingrese el precio"
                        containerClass={'mb-3'}
                    />

                    <Button variant="primary" className="waves-effect waves-light me-1 rounded-pill" type="submit">
                        Guardar
                    </Button>
                    <Button variant="light" className="waves-effect waves-light rounded-pill" onClick={()=>{toggle()}}>
                        Cancelar
                    </Button>
                </VerticalForm>
            </Modal.Body>
        </Modal>
    );
};

export default ModalNote;
