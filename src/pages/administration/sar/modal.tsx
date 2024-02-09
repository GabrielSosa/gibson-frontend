import { Button, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// types
import { SarSetting } from './types';
import { addSarSetting } from '../../../helpers/api/invoices';
import { updateSarSetting } from '../../../helpers/api/settings';
import swal from 'sweetalert2';

type SarSettingsProp = {
    sarSetting: SarSetting;
    toggle: () => any;
    modal: boolean;
    action?: string;
};

const ModalSar = ({ sarSetting, toggle, modal, action }: SarSettingsProp) => {

    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            cai: yup.string().required('Por favor ingrese el cai'),
            prefix: yup.string().required('Por favor ingrese el prefijo'),
            start_range: yup.string().required('Por favor ingrese el rango inicial'),
            end_range: yup.string().required('Por favor ingrese el rango final'),
            expiration_date: yup.string().required('Por favor ingrese la fecha de expiracion')

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
        <Modal show={modal} onHide={toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">{getActionText()} rango de facturación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e: any) => {
                    let newSar: any = {
                        cai: e.cai,
                        prefix: e.prefix,
                        startRange: e.start_range,
                        endRange: e.end_range,
                        nextNumber: e.start_range,
                        expirationDate: e.expiration_date
                    }
                    let result
                    if(action === "edit"){
                        newSar.sarSettingId = e.sar_setting_id
                        result = await updateSarSetting(newSar)
                    }else {
                        result = await addSarSetting(newSar)
                    }
                    if(result.data.meta.code === 200){
                        toggle();
                    }else {
                        swal.fire("Error",result.data.data.error.message,"error")
                    }
                }} resolver={schemaResolver} defaultValues={{...sarSetting}}>
                    <FormInput
                        label={'Cai'}
                        type="text"
                        name="cai"
                        placeholder="Ingrese el cai"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Prefijo'}
                        type="text"
                        name="prefix"
                        placeholder="Ingrese el prefijo"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Rango inicial'}
                        type="text"
                        name="start_range"
                        placeholder="Ingrese el rango inicial"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Rango final'}
                        type="text"
                        name="end_range"
                        placeholder="Ingrese el rango final"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Fecha de expiracion'}
                        type="date"
                        name="expiration_date"
                        placeholder="Ingrese la fecha de expiracion"
                        containerClass={'mb-3'}
                    />

                    <Button variant="primary" className="waves-effect waves-light me-1" type="submit">
                        {getActionText()}
                    </Button>
                    <Button variant="light" className="waves-effect waves-light" onClick={toggle}>
                        Cancelar
                    </Button>
                </VerticalForm>
            </Modal.Body>
        </Modal>
    );
};

export default ModalSar;
