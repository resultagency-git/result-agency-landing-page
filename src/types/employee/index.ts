import { IPosition } from "../positions";

export type IEmployee = {
    _id?: string;
    surname?: string;
    forename?: string;
    login?: string;
    jobPosition?: IPosition;
    status?: boolean;
    security?: {
        newPassword?: {
            code: string;
            attempts: number;
            lastAttempt: Date;
        };
    };
    aparence?: {
        theme: 1 | 2;
        color: {
            hex: string;
            rgb: string;
        };
    };
    info?: {
        archive?: boolean;
    };
    createdAt?: Date;
    updatedAt?: Date;
};
