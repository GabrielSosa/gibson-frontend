import { APICore } from './apiCore';

const api = new APICore();

function getInspectionTemplate(params: any) {
    const baseUrl = '/getInspectionTemplate';
    return api.get(`${baseUrl}`, params);
}

function startInspection(params: any) {
    const baseUrl = '/startInspection';
    return api.create(`${baseUrl}`, params);
}

function endInspection(params: any) {
    const baseUrl = '/endInspection';
    return api.create(`${baseUrl}`, params);
}
function saveInspection(params: any) {
    const baseUrl = '/saveInspection';
    return api.create(`${baseUrl}`, params);
}
function getCerts(params: any) {
    const baseUrl = '/certs';
    return api.get(`${baseUrl}`, params);
}
function getCertPDF(params: any) {
    const baseUrl = '/getCertPDF';
    return api.create(`${baseUrl}`, params);
}

function cancelCert(params: any) {
    const baseUrl = '/cert/cancel';
    return api.create(`${baseUrl}`, params);
}

function validateCert(params: any) {
    const baseUrl = '/cert/validate';
    return api.create(`${baseUrl}`, params);
}
function saveCert(params: any) {
    const baseUrl = '/cert/save';
    return api.create(`${baseUrl}`, params);
}

function sendCertEmail(params: any) {
    const baseUrl = '/cert/sendEmail';
    return api.create(`${baseUrl}`, params);
}

export { startInspection,sendCertEmail, endInspection, getInspectionTemplate, saveInspection, getCerts,getCertPDF, cancelCert,saveCert,validateCert };
