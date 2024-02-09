export type Customer = {
    customer_id: number;
    name: string;
    identity: string;
    phone: string;
    rtn?: string;
    email?: string;
    created_date: Date;
    isExcent: boolean;
};

export const cleanCustomer: Customer = {
    customer_id: 0,
    name: "",
    identity: "",
    phone: "",
    created_date: new Date(),
    isExcent: false
}