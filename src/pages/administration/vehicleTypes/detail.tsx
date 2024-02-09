import { usePageTitle } from "../../../hooks";


const VehicleTypeDetail = () => {
    // set pagetitle
    usePageTitle({
        title: 'Detalle de tipo de vehiculo',
        breadCrumbItems: [
            {
                path: '/settings/vehicle-type-detail',
                label: 'Configuracion',
            },
            {
                path: '/settings/vehicle-type-detail',
                label: 'Detalle de tipo de vehiculo',
                active: true,
            },
        ],
    });

    return <></>;
};

export default VehicleTypeDetail;
