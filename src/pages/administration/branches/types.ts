export type Branch = {
    id: number;
    sar_setting_id: number;
    phone: string;
    name: string;
    address: string;
    country_code: string;
    created_date: Date;
};

export const cleanBranch: Branch = {
    id: 0,
    sar_setting_id: 0,
    phone: "",
    name: "",
    address: "",
    country_code: "",
    created_date: new Date()
}