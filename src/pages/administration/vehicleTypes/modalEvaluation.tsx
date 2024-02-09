import { Button,  Form,  Modal } from 'react-bootstrap';
import { VerticalForm, FormInput } from '../../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addEvaluationItem, addEvaluationList, updaEvaluationItem } from '../../../helpers/api/settings';
import { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import swal from 'sweetalert2';

const ModalEvaluation = ({ vehicleType, item, toggle, modal, action }: any) => {
    const [listSelected, setListSelected] = useState([] as any)
    const [blur, setBlur] = useState(true)
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            description: yup.string().required('Por favor ingrese la descripcion'),
            type: yup.string().required('Por favor seleccione un tipo')
            
        })
    );

    const onChangeList = async (listSelec: any[]) => {
        if(listSelec.length > 0){
            if(listSelec[0].customOption){
                let newList = await addEvaluationList({
                     vehicleTypeId: vehicleType.vehicle_type_id,
                     name: listSelec[0].name
                })
                setListSelected([newList.data.data])
            } else {
                setListSelected(listSelec)
            }
        }
    };

    const getActionText = () => {
        switch (action) {
            case "edit":
                return "Guardar"
        
            default:
                return "Agregar"
                
        }
    }

    useEffect(()=> {
        if(item && item.name){
            setListSelected([vehicleType.evaluationLists.find((i: any)=>{ return i.name === item.name})])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[item])

    return (
        <Modal show={modal} onHide={toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h4">{getActionText()} tipo de vehiculo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VerticalForm<any> onSubmit={async (e) => {
                    let vType: any = {                        
                        listId: listSelected[0].evaluation_list_id,
                        description: e.description,
                        type: e.type
                    }
                    if(getActionText() === "Agregar"){
                        let result = await addEvaluationItem(vType)
                        if(result.data.meta.code === 200){
                            toggle(true);
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    } else {
                        vType.itemId = item.evaluation_item_id
                        let result = await updaEvaluationItem(vType)
                        if(result.data.meta.code === 200){
                            toggle(true);
                        }else {
                            swal.fire("Error",result.data.data.error.message,"error")
                        }
                    }

                }} resolver={schemaResolver} defaultValues={{...item}}>
                    <Form.Group className="mb-3" controlId="validationCustom01">                        
                        <Typeahead
                            id="listId"
                            labelKey={'name'}
                            multiple={false}
                            isValid={listSelected[0] ? true : false}
                            onBlur={()=> { setBlur(true)}}
                            onFocus={()=> { setBlur(false)}}
                            maxResults={4}
                            onChange={onChangeList}
                            options={vehicleType.evaluationLists || []}
                            allowNew={true}
                            placeholder="Escoge una sección"
                            selected={blur ? listSelected : undefined}
                        />
                    </Form.Group>

                    <FormInput
                        label={'Descripcion'}
                        type="text"
                        name="description"
                        placeholder="Ingrese la descripcion"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        name="type"
                        label="Tipo"
                        type="select"
                        containerClass="mb-3"
                        className="form-select"
                        key="select">
                        <option value="check">Check</option>
                        <option value="input">Input</option>
                    </FormInput>

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

export default ModalEvaluation;
