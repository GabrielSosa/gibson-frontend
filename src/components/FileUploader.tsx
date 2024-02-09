import React, { forwardRef, useImperativeHandle , useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

type FileType = File & {
    preview?: string;
    formattedSize?: string;
    newName?: string;
    description?: string;
};

type FileUploaderProps = {
    onFileUpload?: (files: FileType[]) => void;
    label?: string;
    multi?: boolean;
    showPreview?: boolean;
};

const FileUploader = forwardRef((props: FileUploaderProps, ref) => {
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);
    useImperativeHandle(ref, () => ({

        clearFiles() {
          setSelectedFiles([])
        }
    
    }));
    /**
     * Handled the accepted files and shows the preview
     */
    const handleAcceptedFiles = (files: FileType[]) => {
        var allFiles = files;

        if (props.showPreview) {
            (files || []).map((file,key) =>
                Object.assign(file, {
                    preview: file['type'].split('/')[0] === 'image' ? URL.createObjectURL(file) : null,
                    formattedSize: formatBytes(file.size),
                    newName: Date.now()+"_"+key + "." + file.name.split(".")[1]
                })
            );
            allFiles = [...selectedFiles];
            allFiles.push(...files);
            setSelectedFiles(allFiles);
        }

        //if (props.onFileUpload) props.onFileUpload(allFiles);
    };

    /**
     * Formats the size
     */
    const formatBytes = (bytes: number, decimals: number = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    /*
     * Removes the selected file
     */
    const removeFile = (fileIndex: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(fileIndex, 1);
        setSelectedFiles(newFiles);
        //if (props.onFileUpload) props.onFileUpload(newFiles);
    };

    useEffect(()=>{
        if (props.onFileUpload) props.onFileUpload(selectedFiles);
    },[selectedFiles,props])

    return (
        <>
            <Dropzone {...props} useFsAccessApi={false} onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone mb-3 mt-3">
                        <div className="dz-message needsclick" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <i className="h3 text-muted dripicons-cloud-upload"></i>
                            <h4>{props.label || "Drop files here or click to upload."}</h4>
                        </div>
                    </div>
                )}
            </Dropzone>

            {!props.multi && selectedFiles.length > 0 && (<div>
                <Card className="mt-3 mb-3 shadow-none border charge-image-container">
                    <div className="remove" onClick={() => removeFile(0)}>
                        <i className="mdi mdi-trash-can-outline" ></i>
                    </div>
                    <img className='charge-image' alt={selectedFiles[0].name} src={selectedFiles[0].preview} />
                </Card>
            </div>)}

            {props.multi && props.showPreview && (
                <div className="dropzone-previews" id="uploadPreviewTemplate">
                    {(selectedFiles || []).map((f, i) => {
                        return (
                            <Card className="mt-1 mb-0 shadow-none border" key={i + '-file'}>
                                <div className="p-2">
                                    <Row className="">
                                        {f.preview && (
                                            <Col className="col-auto">
                                                <img
                                                    data-dz-thumbnail=""
                                                    className="avatar rounded bg-light file-preview"
                                                    alt={f.name}
                                                    src={f.preview}
                                                />
                                            </Col>
                                        )}
                                        {!f.preview && (
                                            <Col className="col-auto">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-primary rounded">
                                                        {f.type.split('/')[0]}
                                                    </span>
                                                </div>
                                            </Col>
                                        )}
                                        <Col className="ps-0">
                                            <Form.Group className="mb-3" controlId="validationCustom01">
                                                <Form.Label>Descripcion</Form.Label>
                                                <Form.Control required type="text" placeholder="Describe la foto aqui" onChange={(e: any)=>{
                                                    setSelectedFiles([...selectedFiles.map((sf: FileType)=>{
                                                        if(sf.newName === f.newName) sf.description = e.target.value
                                                        return sf
                                                    })])
                                                }} />
                                            </Form.Group>
                                            <Link to="#" className="text-muted fw-bold">
                                                {f.newName}
                                            </Link>
                                            <p className="mb-0">
                                                <strong>{f.formattedSize}</strong>
                                            </p>
                                        </Col>
                                        <Col className="text-end col-1">
                                            <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                                                <i className="dripicons-cross" onClick={() => removeFile(i)}></i>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
});

FileUploader.defaultProps = {
    showPreview: true,
};

export default FileUploader;
