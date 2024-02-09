import { Button, Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FileUploader from '../../../components/FileUploader';
import { useState } from 'react';
import { saveImage } from '../../../helpers/api/reception';
import { addUser, updateUser } from '../../../helpers/api/settings';
import swal from 'sweetalert2';

type FileType = File & {
    preview?: string;
    formattedSize?: string;
    newName?: string;
    description?: string;
};


const ModalUser = ({ user, types, branches, toggle, modal, action }: any) => {
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            userTypeId: yup.string().required('Por favor seleccione el tipo de usuario'),
            branchId: yup.string().required('Por favor seleccione la sucursal'),
            name: yup.string().required('Por favor ingrese el nombre'),
            email: yup.string().required('Por favor ingrese el correo')
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
                <Modal.Title as="h4">Agregar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e: any) => {
                    let nUser: any = {
                        name: e.name,
                        userTypeId: e.userTypeId,
                        branchId: e.branchId,
                        email: e.email,
                        password: e.password
                    }
                    if(selectedFiles[0]){
                        let resultImage = await saveImage({
                            file: selectedFiles[0],
                            description: selectedFiles[0].description,
                            name: selectedFiles[0].newName
                        })
                        nUser.profilePic = resultImage.data.data.url
                    } else {
                        nUser.profilePic = e.profile_picture_url
                    }
                    if(getActionText() === "Agregar"){
                        let result = await addUser(nUser)
                        if(result.data.meta.code === 200){
                            toggle(true);
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    } else {
                        nUser.userId = e.user_id
                        let result = await updateUser(nUser)
                        if(result.data.meta.code === 200){
                            toggle(true);
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }
                }} resolver={schemaResolver} defaultValues={{...user}}>
                    <FormInput
                        label={"Tipo de usuario"}
                        type="select"
                        name="userTypeId"
                        containerClass="mb-3"
                        className="form-select"
                        key="select0"
                    >
                        {
                            (types || []).map((t: any) => {
                                return <option key={"ut_"+t.user_type_id} value={t.user_type_id}>{t.name}</option>
                            })
                        }
                    </FormInput>
                    <FormInput
                        label={"Sucursal"}
                        type="select"
                        name="branchId"
                        containerClass="mb-3"
                        className="form-select"
                        key="select1"
                    >
                        {
                            (branches || []).map((t: any) => {
                                return <option key={"b_"+t.branch_id} value={t.branch_id}>{t.name}</option>
                            })
                        }
                    </FormInput>
                    <FormInput
                        label={'Nombre'}
                        type="text"
                        name="name"
                        placeholder="Ingrese el nombre"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Correo'}
                        type="text"
                        name="email"
                        placeholder="Ingrese el correo"
                        containerClass={'mb-3'}
                    />

                    <FormInput
                        label={'Contraseña'}
                        type="password"
                        name="password"
                        placeholder="Ingrese la Contraseña"
                        containerClass={'mb-3'}
                    />
                    <div className="vector-img" hidden={!user.profile_picture_url || user.profile_picture_url === "picture"}>
                        <img src={user.profile_picture_url} alt="asd" />
                    </div>
                    <FileUploader
                        label={!user.profile_picture_url || user.profile_picture_url === "picture" ? "Cargar foto de perfil" : "Actualizar foto de perfil"}
                        showPreview = {true}
                        multi = {false}
                        onFileUpload={(files: FileType[]) => {
                            setSelectedFiles(files);
                        }}
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

export default ModalUser;
