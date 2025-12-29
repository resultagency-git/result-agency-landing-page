import { IEmployee } from "./../employee";

export type ICustomer = {
    _id?: string;
    fullName?: string;
    address?: {
        street?: string;
        number?: string;
        neighborhood?: string;
        city?: string;
        province?: string;
        country?: string;
        zipcode?: string;
        referencial?: string;
    };
    phoneNumber?: string;
    phoneNumberClean?: string;
    email?: string;
    info?: {
        archive?: boolean;
    };
    createdBy?: string | IEmployee;
    createdAt?: Date;
    updatedAt?: Date;
};
