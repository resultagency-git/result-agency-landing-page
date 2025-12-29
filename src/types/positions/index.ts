import { IEmployee } from "../employee";

export type IPosition = {
    _id?: string;
    name?: string;
    hierarchy?: number;
    createdBy?: IEmployee;
    createdAt?: Date;
    updatedAt?: Date;
    history?: [{
        when?: Date,
        who?: string;
    }];
    info?: {
        archive?: boolean,
    }
};