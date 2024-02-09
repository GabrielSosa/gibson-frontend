export type SarSetting = {
    sar_setting_id: number;
    cai: string;
    prefix: string;
    start_range: number;
    end_range: number;
    next_number: number;
    expiration_date: Date;
    created_date: Date;
};

export const cleanSarSetting: SarSetting = {
    sar_setting_id: 0,
    cai: "",
    prefix: "",
    start_range: 0,
    end_range: 0,
    next_number: 0,
    expiration_date: new Date(),
    created_date: new Date()
}