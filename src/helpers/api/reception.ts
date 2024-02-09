import { APICore } from './apiCore';

const api = new APICore();

// account
function createCustomer(params: any) {
    const baseUrl = '/createCustomer';
    return api.create(`${baseUrl}`, params);
}

function updateCustomer(params: any) {
    const baseUrl = '/updateCustomer';
    return api.updatePatch(`${baseUrl}`, params);
}

function getAllCustomers(params: any) {
    const baseUrl = '/getAllCustomers';
    return api.get(`${baseUrl}`, params);
}

function getAllAppraisal(params: any) {
    const baseUrl = '/getAllAppraisal';
    return api.get(`${baseUrl}`, params);
}

function getVehicleByPlate(params: any) {
    const baseUrl = '/getByPlate/'+params.plate;
    return api.get(`${baseUrl}`, {});
}

function getVehicleByVin(params: any) {
    const baseUrl = '/getByVin/'+params.vin;
    return api.get(`${baseUrl}`, {});
}

function saveReception(params: any) {
    const baseUrl = '/reception';
    return api.create(`${baseUrl}`, params);
}

function saveImage(params: any) {
    const baseUrl = '/uploadFile';
    return api.createWithFile(`${baseUrl}`, params);
}
export { createCustomer, getAllCustomers, saveReception, getAllAppraisal, saveImage, updateCustomer,getVehicleByPlate, getVehicleByVin };
