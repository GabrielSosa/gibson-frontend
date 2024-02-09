import { APICore } from './apiCore';

const api = new APICore();

// account
function createVehicleType(params: any) {
    const baseUrl = '/vehicleType/create';
    return api.create(`${baseUrl}`, params);
}

function updateVehicleType(params: any) {
    const baseUrl = '/vehicleType/update';
    return api.updatePatch(`${baseUrl}`, params);
}

function getAllVehicleTypes(params: any) {
    const baseUrl = '/vehicleTypes';
    return api.get(`${baseUrl}`, params);
}

function updateSarSetting(params: any) {
    const baseUrl = '/updateSarSetting';
    return api.updatePatch(`${baseUrl}`, params);
}

function updateBranch(params: any) {
    const baseUrl = '/updateBranch';
    return api.create(`${baseUrl}`, params);
}

function getVehicleFields(params: any) {
    const baseUrl = '/vehicleFields';
    return api.get(`${baseUrl}`, params);
}

function getVehicleTypeById(params: any) {
    const baseUrl = '/getVehicleTypeById';
    return api.get(`${baseUrl}`, params);
}

function updaEvaluationItem(params: any) {
    const baseUrl = '/evaluationItem/update';
    return api.updatePatch(`${baseUrl}`, params);
}
function addEvaluationItem(params: any) {
    const baseUrl = '/evaluationItem/create';
    return api.create(`${baseUrl}`, params);
}
function addEvaluationList(params: any) {
    const baseUrl = '/evaluationList/create';
    return api.create(`${baseUrl}`, params);
}

function updaInspectionItem(params: any) {
    const baseUrl = '/inspectionItem/update';
    return api.updatePatch(`${baseUrl}`, params);
}
function addInspectionItem(params: any) {
    const baseUrl = '/inspectionItem/create';
    return api.create(`${baseUrl}`, params);
}
function addInspectionList(params: any) {
    const baseUrl = '/inspectionList/create';
    return api.create(`${baseUrl}`, params);
}

function addUser(params: any) {
    const baseUrl = '/user/create';
    return api.create(`${baseUrl}`, params);
}

function updateUser(params: any) {
    const baseUrl = '/user/update';
    return api.updatePatch(`${baseUrl}`, params);
}

function getUsers() {
    const baseUrl = '/users';
    return api.get(`${baseUrl}`, {});
}

function getUserTypes() {
    const baseUrl = '/userTypes';
    return api.get(`${baseUrl}`, {});
}
function addInsurer(params: any) {
    const baseUrl = '/insurer/create';
    return api.create(`${baseUrl}`, params);
}

function updateInsurer(params: any) {
    const baseUrl = '/insurer/update';
    return api.updatePatch(`${baseUrl}`, params);
}

function getInsurers() {
    const baseUrl = '/insurers';
    return api.get(`${baseUrl}`, {});
}
export { createVehicleType, updateVehicleType, getAllVehicleTypes,updateSarSetting, 
    updateBranch,getVehicleFields,getVehicleTypeById,updaEvaluationItem, addEvaluationItem, 
    addEvaluationList, updaInspectionItem,addInspectionItem,addInspectionList,
    addUser, updateUser, getUsers, getUserTypes, addInsurer, updateInsurer, getInsurers};
