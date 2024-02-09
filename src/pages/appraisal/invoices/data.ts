// types
import { PricingPlan } from './types';

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: 'Basic',
        price: 19,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 1,
        name: 'Premium',
        price: 29,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: true,
    },
    {
        id: 2,
        name: 'Developer',
        price: 39,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 3,
        name: 'Business',
        price: 49,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
];

const pricingPlans2: PricingPlan[] = [
    {
        id: 1,
        name: 'Basic',
        price: 19,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 1,
        name: 'Premium',
        price: 29,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: true,
    },
    {
        id: 2,
        name: 'Developer',
        price: 39,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
];

const invoiceDetails: any = {
    invoice_id: '000-000-001-00000010',
    notes: 'notas aqui.',
    order_date: '14 de Febrero de 2022',
    order_status: 'Valida',
    order_id: '#123456',
    sar: {
        cai: "35BD6A-0195F4-B34BAA-8B7D13-37791A-2D",
        prefix: "000-001-00-",
        start_range: 1,
        end_range: 1000,
        expiration_date: "05-12-2023"
    },
    company: {
        owner: 'Avaluos Gibson S.A de C.V',
        rtn: '0801-1999-010236',
        line_1: '795 Folsom Ave, Suite 600',
        city: 'Tegucigalpa',
        state: 'Francisco Morazan',
        zip: 11101,
        phone: '+504 2222-2222',
        cash_unit: 'L. '
    },
    customer: {
        customer_name: 'Jaime Fonseca',
        rtn: '1503-1994-010634'
    },
    items: [
        {
            id: 1,
            name: 'Avaluo',
            description: 'Evaluacion basica de vehiculo',
            quantity: 1,
            unit_cost: 213.04,
            total: 213.04,
        }
    ],
    sub_total: 213.04,
    excent: 0,
    tax: 31.96,
    total: 245,
};

export { pricingPlans, pricingPlans2, invoiceDetails };
