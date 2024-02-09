import { Button, Form, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { Typeahead } from 'react-bootstrap-typeahead';
// types
import { useEffect, useState } from 'react';
import { getAllCustomers } from '../../../helpers/api/reception';
import swal from 'sweetalert2';
import { createInvoice } from '../../../helpers/api/invoices';

const ModalNewInvoice = ({ toggle, modal }: any) => {
    const [customerSelected, setCustomerSelected] = useState([] as any)
    const [allCustomers, setAllCustomers] = useState([] as any);
    // form validation schema

    const onChangeCustomer = (customerSelec: any[]) => {
        if(customerSelec.length > 0){
            setCustomerSelected(customerSelec)
        }
    };

    const loadCustomers = async () => {
        let result = await getAllCustomers({});
        setAllCustomers(result.data.data)
    }

    useEffect(()=>{
        loadCustomers()
    },[])

    return (
        <Modal show={modal} onHide={toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">Agregar sucursal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e) => {
                    if(!customerSelected[0])
                        swal.fire('Error!', 'Por favor selecciona un cliente para crear la factura', 'error');
                    else {
                        let result = await createInvoice({
                            customerId: customerSelected[0].customer_id,
                            paymentMethod: e.payment_method
                        })
                        if(result.data.meta.code === 200){
                            toggle({invoice_id: result.data.data.invoiceId});
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }
                }}>
                    <Form.Group className="mb-3" controlId="validationCustom01">   
                        <Form.Label>Cliente</Form.Label>                         
                        <Typeahead
                            id="sarId"
                            labelKey={'name'}
                            multiple={false}
                            isValid={customerSelected[0] ? true : false}
                            maxResults={4}
                            onChange={onChangeCustomer}
                            options={allCustomers}
                            allowNew={false}
                            placeholder="Escoge un cliente..."
                            selected={customerSelected}
                        />
                    </Form.Group>
                    <FormInput
                        label={"Metodo de pago"}
                        type="select"
                        name="payment_method"
                        containerClass="mb-3"
                        className="form-select"
                        key="select"
                    >
                        <option value='cash'>Efectivo</option>
                        <option value='card'>Tarjeta</option>
                        <option value='credit'>Crédito</option>
                    </FormInput>

                    <Button variant="primary" className="waves-effect waves-light me-1 rounded-pill" type="submit">
                        Agregar
                    </Button>
                    <Button variant="light" className="waves-effect waves-light rounded-pill" onClick={toggle}>
                        Cancelar
                    </Button>
                </VerticalForm>
            </Modal.Body>
        </Modal>
    );
};

export default ModalNewInvoice;
