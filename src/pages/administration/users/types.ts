export type User = {
    id: number;
    branch_id: number;
    user_type_id: number;
    user_type_name?: string;
    name: string;
    password: string;
    email: string;
    created_date: Date;
};

export const cleanUser: User = {
    id: 0,
    branch_id: 0,
    user_type_id: 0,
    name: "",
    password: "",
    email: "",
    created_date: new Date()
}