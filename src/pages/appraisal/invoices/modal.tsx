import { Button, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// types
import { addExoneration } from '../../../helpers/api/invoices';
import swal from 'sweetalert2';

const ModalExoneration = ({ data, toggle, modal, mode }: any) => {
    //const [emails, setEmails] = useState([] as Array<any>);
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            
        })
    );

    return (
        <Modal show={modal} onHide={()=>{toggle()}} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">Agregar datos de {mode === "1" ? "exoneración":"excento"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e) => {
                    let result = await addExoneration({
                        number_excent: e.number_excent || "",
                        constance_number: e.constance_number || "",
                        excent_identify_number: e.excent_identify_number || "",
                        invoice_id: e.invoice_id
                    })
                    if(result.data.meta.code === 200){
                        toggle();
                    }else {
                        swal.fire("Error",result.data.data.error.message,"error")
                    }
                }} resolver={schemaResolver} defaultValues={{...data}}>
                    {
                        mode === "2" &&
                        <FormInput
                            label={'Número correlativo de la Orden de Compra exenta'}
                            type="text"
                            name="number_excent"
                            placeholder="Ingrese el número"
                            containerClass={'mb-3'}
                        />
                    }
                    {
                        mode === "1" && 
                        <FormInput
                            label={'Número correlativo de la Constancia del Registro de Exonerados'}
                            type="text"
                            name="constance_number"
                            placeholder="Ingrese el número"
                            containerClass={'mb-3'}
                        />     
                    
                    }
                    {
                        mode === "1" && 
                        <FormInput
                            label={'Número identificativo del Registro de Estado en el Despacho de Agricultura y Ganadería del Registro de Exonerados'}
                            type="text"
                            name="excent_identify_number"
                            placeholder="Ingrese el numero de número"
                            containerClass={'mb-3'}
                        />
                    }
                    

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

export default ModalExoneration;
