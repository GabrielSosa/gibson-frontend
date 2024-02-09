import { APICore } from './apiCore';

const api = new APICore();


function getAllInvoices(params: any) {
    const baseUrl = '/invoices';
    return api.get(`${baseUrl}`, params);
}

function getInvoiceById(invoiceId: any) {
    const baseUrl = '/invoicesById/'+invoiceId;
    return api.get(`${baseUrl}`, {});
}

function validateInvoice(params: any) {
    const baseUrl = '/invoices/validate';
    return api.create(`${baseUrl}`, params);
}

function cancelInvoice(params: any) {
    const baseUrl = '/invoices/cancel';
    return api.create(`${baseUrl}`, params);
}

function getAllSarSetting(){
    const baseUrl = '/getAllSarSetting';
    return api.get(`${baseUrl}`, {});
}

function getAllBrnahces(){
    const baseUrl = '/branches';
    return api.get(`${baseUrl}`, {});
}

function addBranch(params: any) {
    const baseUrl = '/createBranch';
    return api.create(`${baseUrl}`, params);
}

function addSarSetting(params: any) {
    const baseUrl = '/createSarSetting';
    return api.create(`${baseUrl}`, params);
}
function addExoneration(params: any) {
    const baseUrl = '/invoices/addExoneration';
    return api.create(`${baseUrl}`, params);
}
function addLineInvoice(params: any) {
    const baseUrl = '/invoices/addLine';
    return api.create(`${baseUrl}`, params);
}
function editLineInvoice(params: any) {
    const baseUrl = '/invoices/editLine';
    return api.create(`${baseUrl}`, params);
}
function removeLineInvoice(params: any) {
    const baseUrl = '/invoices/removeLine';
    return api.create(`${baseUrl}`, params);
}
function sendInvoiceEmail(params: any) {
    const baseUrl = '/invoices/sendEmail';
    return api.create(`${baseUrl}`, params);
}
function createInvoice(params: any) {
    const baseUrl = '/invoices/create';
    return api.create(`${baseUrl}`, params);
}
export { sendInvoiceEmail, createInvoice, addLineInvoice, editLineInvoice, removeLineInvoice, getAllInvoices, getInvoiceById, validateInvoice, getAllSarSetting, getAllBrnahces, addBranch, addSarSetting, cancelInvoice, addExoneration };
