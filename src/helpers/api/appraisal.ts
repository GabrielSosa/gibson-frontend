import { APICore } from './apiCore';

const api = new APICore();

// account
function getEvaluationTemplate(params: any) {
    const baseUrl = '/getEvaluationTemplate';
    return api.get(`${baseUrl}`, params);
}

function getNotes(params: any) {
    const baseUrl = '/getNotes';
    return api.get(`${baseUrl}`, params);
}

function getDetails(params: any) {
    const baseUrl = '/getDetails';
    return api.get(`${baseUrl}`, params);
}

function getAppraisalDetail(params: any) {
    const baseUrl = '/getAppraisal';
    return api.get(`${baseUrl}`, params);
}

function checkReference(params: any) {
    const baseUrl = '/checkReference';
    return api.get(`${baseUrl}`, params);
}

function addNote(params: any) {
    const baseUrl = '/addNote';
    return api.create(`${baseUrl}`, params);
}

function editNote(params: any) {
    const baseUrl = '/editNote';
    return api.create(`${baseUrl}`, params);
}

function removeNote(params: any) {
    const baseUrl = '/removeNote';
    return api.create(`${baseUrl}`, params);
}

function addDetail(params: any) {
    const baseUrl = '/addDetail';
    return api.create(`${baseUrl}`, params);
}

function removeDetail(params: any) {
    const baseUrl = '/removeDetail';
    return api.create(`${baseUrl}`, params);
}


function startAppraisal(params: any) {
    const baseUrl = '/startAppraisal';
    return api.create(`${baseUrl}`, params);
}

function endAppraisal(params: any) {
    const baseUrl = '/endAppraisal';
    return api.create(`${baseUrl}`, params);
}

function saveAppraisal(params: any) {
    const baseUrl = '/saveAppraisal';
    return api.create(`${baseUrl}`, params);
}

function sendAppraisalEmail(params: any) {
    const baseUrl = '/sendAppraisalEmail';
    return api.create(`${baseUrl}`, params);
}

function getAppraisalPDF(params: any) {
    const baseUrl = '/getAppraisalPDF';
    return api.create(`${baseUrl}`, params);
}


export { getEvaluationTemplate, addNote, getNotes, removeNote, getAppraisalDetail, addDetail, removeDetail, getDetails, startAppraisal, endAppraisal, saveAppraisal,sendAppraisalEmail, getAppraisalPDF, checkReference, editNote };
