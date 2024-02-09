import { APICore } from './apiCore';

const api = new APICore();

// account
function getBrands(params: any) {
    const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes';
    return api.getCarApi(`${baseUrl}`,{format: "json"});
}

function getModelsByBrand(brandId: any) {
    const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/'+brandId;
    return api.getCarApi(`${baseUrl}`,{format: "json"});
}
export { getBrands, getModelsByBrand };
