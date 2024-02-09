import { Button,  Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createVehicleType, updateVehicleType } from '../../../helpers/api/settings';
import FileUploader from '../../../components/FileUploader';
import { useState } from 'react';
import { saveImage } from '../../../helpers/api/reception';
import swal from 'sweetalert2';
// types
type FileType = File & {
    preview?: string;
    formattedSize?: string;
    newName?: string;
    description?: string;
};

const ModalVehicleType = ({ vehicleType, toggle, modal, action }: any) => {
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);
    
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Por favor ingrese el nombre'),
            description: yup.string().required('Por favor ingrese la descripcion'),
            price: yup.string().required('Por favor ingrese el precio de avaluo')
            
        })
    );

    const getActionText = () => {
        switch (action) {
            case "edit":
                return "Guardar"
        
            default:
                return "Agregar"
                
        }
    }

    return (
        <Modal show={modal} onHide={toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">{getActionText()} tipo de vehiculo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e) => {
                    let vType: any = {
                        name: e.name,
                        description: e.description,
                        price: e.price
                    }
                    if(selectedFiles[0]){
                        let resultImage = await saveImage({
                            file: selectedFiles[0],
                            description: selectedFiles[0].description,
                            name: selectedFiles[0].newName
                        })
                        vType.vector = resultImage.data.data.url
                    } else {
                        vType.vector = e.vector
                    }
                    if(getActionText() === "Agregar"){
                        let result = await createVehicleType(vType)
                        if(result.data.meta.code === 200){
                            toggle(true);
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    } else {
                        vType.vehicleTypeId = e.vehicle_type_id
                        let result = await updateVehicleType(vType)
                        if(result.data.meta.code === 200){
                            toggle(true);
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }

                }} resolver={schemaResolver} defaultValues={{...vehicleType}}>
                    <FormInput
                        label={'Nombre'}
                        type="text"
                        name="name"
                        placeholder="Ingrese el nombre"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Descripcion'}
                        type="text"
                        name="description"
                        placeholder="Ingrese la descripcion"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Precio de avaluo'}
                        type="text"
                        name="price"
                        placeholder="100.00"
                        containerClass={'mb-3'}
                    />
                    <div className="vector-img" hidden={!vehicleType.vector || vehicleType.vector === "vector"}>
                        <img src={vehicleType.vector} alt="vector" />
                    </div>
                    <FileUploader
                        label={!vehicleType.vector || vehicleType.vector === "vector" ? "Cargar imagen para inspección física" : "Actualizar imagen para inspección física"}
                        showPreview = {true}
                        multi = {false}
                        onFileUpload={(files: FileType[]) => {
                            setSelectedFiles(files);
                        }}
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

export default ModalVehicleType;
