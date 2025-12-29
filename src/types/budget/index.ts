import { IAppointment } from "../appointment";
import { ICustomer } from "../customer";
import { IEmployee } from "../employee";

export type IBudgetProducts = {
    name: string;
    price: number;
    qty: number;
};

export type IBudget = {
    _id?: string;
    appointment?: IAppointment | null;
    createdBy?: IEmployee;
    customer?: ICustomer | null;
    products: IBudgetProducts[];
    info?: {
        archive?: boolean;
    };
    createdAt?: Date;
    updatedAt?: Date;
    employee?: IEmployee | null;
    validity?: Date;
    textInfo?: string;
    employeeInfo?: string;
};
