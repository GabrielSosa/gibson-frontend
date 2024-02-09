import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { addDetail, addNote, editNote, getDetails, getNotes, removeDetail, removeNote } from '../../../helpers/api/appraisal';
import ModalNote from './modalNote';
import swal from 'sweetalert2';

const Evaluate = (props: any) => {
    const [addingNote, setAddingNote] = useState(false);
    const [addingDetail, setAddingDetail] = useState("");
    const [modal, setModal] = useState<boolean>(false);
    const [newNote, setNewNote] = useState({} as any)
    const [notes, setNotes] = useState([] as Array<any>)
    const [details, setDetails] = useState([] as Array<any>)

    function getCursorPosition(canvas: any, event: any) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        if(canvas.addingNote){
            setNewNote({
                posx: x,
                posy: y
            })
            toggleModal()
        }

        if(canvas.addingDetail !== ""){
            addDetailItem(canvas.addingDetail,{
                posx: x,
                posy: y
            },canvas.vector)
        }
    } 

    useEffect(()=>{
        if(props.vehicleType){
            reloadCanvas(props.vehicleType)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    },[props.vehicleType])

    const reloadCanvas = async (vector?: any) => {
        const vehicleURL = (vector || props.vehicleType) === "vector" || !(vector || props.vehicleType) ? window.location.origin+"/vehicles/sedan.png" : (vector || props.vehicleType)
        var canvas: any = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = 700;
        canvas.height = 700;

        var canvas2: any = document.getElementById("canvas_bars"),
        ctx2 = canvas2.getContext("2d");
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        canvas2.width = 700;
        canvas2.height = 100;

        var background = new Image();
        background.src = vehicleURL
        background.onload = async function(){
            var hRatio = canvas.width / background.width    ;
            var vRatio = canvas.height / background.height  ;
            var ratio  = Math.min ( hRatio, vRatio );
            ctx.drawImage(background, 0,0, background.width, background.height, 0,0,background.width*ratio, background.height*ratio);
            let resultD = await getDetails({appraisalId: props.appraisalId});
            if(resultD.data.meta.code === 200){
                setDetails(resultD.data.phisycDetails)
            }
            let result = await getNotes({appraisalId: props.appraisalId});
            if(result.data.meta.code === 200){
                setNotes(result.data.notes)
            }else {
                swal.fire("Error",result.data.data.error.message,"error")
            }
        }

        var background2 = new Image();
        background2.src =  window.location.origin+"/svg/barras.png";

        background2.onload = async function(){
            var hRatio = canvas2.width / background2.width    ;
            var vRatio = canvas2.height / background2.height  ;
            var ratio  = Math.min ( hRatio, vRatio );
            ctx2.drawImage(background2, 0,0, background2.width, background2.height, 0,0,background2.width*ratio, background2.height*ratio);            
        }


        

        
    }

    const canvasClick = useCallback((e: any) => {
        var canvas: any = document.getElementById("canvas");
        getCursorPosition(canvas, e);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        var canvas: any = document.getElementById("canvas");
        canvas.addingNote = addingNote
        canvas.addingDetail = addingDetail
        canvas.vector = props.vehicleType
        if(addingNote || addingDetail !== ""){
            canvas.style.cursor = "crosshair";
            canvas.addEventListener('mousedown', canvasClick)
        } else {
            canvas.style.cursor = "default";
            canvas.removeEventListener('mousedown', canvasClick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[addingNote,addingDetail])

    const toggleModal = async (description?: any, price?: any) => {
        
        setModal(!modal)
        if(description){
            let result: any = {} 
            
            if(!newNote.apraisal_note_id){
                result = await addNote({...newNote, description, price: price === "" ? 0 : (price || 0), appraisalId: props.appraisalId})
            } else {
                newNote.appraisalNoteId = newNote.apraisal_note_id
                delete newNote.apraisal_note_id
                delete newNote.appraisal_id
                result = await editNote({...newNote, description, price: price === "" ? 0 : (price || 0)})
            }
            if(result.data.meta.code === 200){
                reloadCanvas(props.vehicleType)
            }else {
                swal.fire("Error",result.data.data.error.message,"error")
            }
        }
    };

    const addDetailItem = async (type: string, data: any, vector?: any) => {
        let result = await addDetail({...data, type, appraisalId: props.appraisalId})
        if(result.data.meta.code === 200){
            reloadCanvas(vector)
        }else {
            swal.fire("Error",result.data.data.error.message,"error")
        }
    };

    const loadNotes = () => {
        var canvas: any = document.getElementById("canvas");
        var ctx: any = canvas.getContext("2d");        
        
        var cont = 0
        notes.forEach(note=>{
            cont ++;
            
            ctx.beginPath();
            ctx.arc(note.posx + 1.5, note.posy+2.5, 15, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();

            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(cont, note.posx - 3.5, note.posy + 10);
        })
    }

    const loadDetails = () => {
        var canvas: any = document.getElementById("canvas");
        var ctx: any = canvas.getContext("2d"); 
        var canvas2: any = document.getElementById("canvas_bars");
        var ctx2: any = canvas2.getContext("2d");        
        
        details.forEach(detail=>{            
            var image = new Image();
            image.onload = function() {
                if(detail.type === "Oxido"){
                    ctx.drawImage(image, detail.posx - 5, detail.posy - 5, 10, 10);
                }else{
                    if(detail.type === "Bar"){
                        ctx2.drawImage(image, detail.posx - 5, detail.posy - 5, 10, 10);
                    } else {
                        ctx.drawImage(image, detail.posx - 7, detail.posy - 7, 18, 18);
                    }
                }
            };   
            image.src = window.location.origin+"/svg/"+detail.type+".svg";

           
        })
    }

    useEffect(()=>{
        loadNotes()
        loadDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[notes])

    const getDistance = (p1: any, p2: any) => {
        return Math.sqrt(
            ( ( p1.x - p2.x) * (p1.x - p2.x) )
            +
            ( ( p1.y - p2.y) * (p1.y - p2.y) )
        )
    }

    const canvasClickEvent = (e: any) => {
        if(props.allowEdit){
            var canvas: any = document.getElementById("canvas");
            if(!(addingNote || addingDetail !== "")){
                const rect = canvas.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                details.forEach(detail=>{
                    if(getDistance({x,y}, {x: detail.posx, y: detail.posy}) < 15){
                        removeDetailItem(detail.appraisal_phisycs_detail_id)
                        return true
                    }
                })            
            }
        }
    }

    const canvasBarClickEvent = (e: any) => {
        
        if(props.allowEdit){
            var canvasBars: any = document.getElementById("canvas_bars");
            const rect = canvasBars.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            let removeFlag = false;
            details.forEach(detail=>{
                if(detail.type === "Bar"){
                    if(getDistance({x,y}, {x: detail.posx, y: detail.posy}) < 15){
                        removeDetailItem(detail.appraisal_phisycs_detail_id)
                        removeFlag = true
                        return true
                    }
                }
            })
            if(!removeFlag){
                canvasBars.addingDetail = "Bar"
                getCursorPosition(canvasBars, e);
            }
        }
    }

    const removeDetailItem = async (id: any) => {
        let result = await removeDetail({detailId: id})
        if(result.data.meta.code === 200){
            reloadCanvas()
        }else {
            swal.fire("Error",result.data.data.error.message,"error")
        }
    }
    

    return <>
        <div className="container">
            <div className="image-draw">
                <canvas id='canvas_bars' onClick={canvasBarClickEvent}>

                </canvas>
            </div>
            <div className="tool-bar" hidden={!props.allowEdit}>
                <Button variant={'outline-success'} className="rounded-pill waves-effect waves-light" hidden={addingNote || addingDetail !== ""} size="sm" onClick={()=>{
                    setAddingNote(!addingNote)
                }}>
                    Agregar nota
                </Button>
                <Button hidden={ addingNote || addingDetail !== ""} size="sm" variant={'outline-success'} className="rounded-pill waves-effect waves-light ms-1" onClick={()=>{
                    setAddingDetail("Oxido")
                }}>
                    Oxido <i className="dripicons-dot"></i>
                </Button>
                <Button hidden={ addingNote || addingDetail !== ""} size="sm" variant={'outline-success'} className="rounded-pill waves-effect waves-light ms-1" onClick={()=>{
                    setAddingDetail("Rajado")
                }}>
                    Rajado <i className="ti-bolt-alt"></i>
                </Button>
                <Button hidden={ addingNote || addingDetail !== ""} size="sm" variant={'outline-success'} className="rounded-pill waves-effect waves-light ms-1" onClick={()=>{
                    setAddingDetail("Quebrado")
                }}>
                    Quebrado <i className="dripicons-cross"></i>
                </Button>
                <Button hidden={ addingNote || addingDetail !== ""} size="sm" variant={'outline-success'} className="rounded-pill waves-effect waves-light ms-1" onClick={()=>{
                    setAddingDetail("Rayado")
                }}>
                    Rayado <i className="dripicons-checkmark"></i>
                </Button>
                <Button hidden={ addingNote || addingDetail !== ""} size="sm" variant={'outline-success'} className="rounded-pill waves-effect waves-light ms-1" onClick={()=>{
                    setAddingDetail("Golpeado")
                }}>
                    Golpeado <i className="dripicons-media-record"></i>
                </Button>
                <Button hidden={!addingNote && addingDetail === ""} size="sm" variant={'outline-danger'} className="rounded-pill waves-effect waves-light ms-1" onClick={()=>{
                    setAddingNote(false)
                    setAddingDetail("")
                }}>
                    Cancelar
                </Button>
            </div>
            <div className="image-draw">
                <canvas id='canvas' onClick={canvasClickEvent}>

                </canvas>
            </div>
            <h3>Notas</h3>
            <table className="notes">
                <tbody>
                    {
                        notes.map((note: any, index: number) => {
                            return <tr className="note-item" key={index+"45"}>
                                <td>{index + 1}.-</td>
                                <td>{note.description}</td>
                                <td className='text-end'>L. {(note.price || 0).toFixed(2)}</td>
                                <td>
                                    <Button className='ms-2' size="sm" variant={'outline-info'} disabled={!props.allowEdit} onClick={ async ()=>{
                                        setNewNote(note)
                                        toggleModal()
                                    }}>
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                    <Button className='ms-2' size="sm" variant={'outline-danger'} disabled={!props.allowEdit} onClick={ async ()=>{
                                        let result = await removeNote({noteId: note.apraisal_note_id})
                                        if(result.data.meta.code === 200){
                                            reloadCanvas()
                                        }else {
                                            swal.fire("Error",result.data.data.error.message,"error")
                                        }
                                    }}>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <ModalNote toggle={toggleModal} modal={modal} data={newNote}></ModalNote>
    </>;
};

export default Evaluate;
