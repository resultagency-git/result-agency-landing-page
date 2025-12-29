import { IBudget } from "../budget";
import { ICustomer } from "../customer";
import { IEmployee } from "../employee";
export interface IAppointment {
  _id?: string;
  type?: number;
  code?: string;
  scheduled?: {
    date?: string;
    time?: string;
  };
  customer?: ICustomer | string;
  employee?: IEmployee | string;
  createdBy?: IEmployee | string;
  budget?: IBudget | string;
  createdAt?: Date;
  updatedAt?: Date;
  employeeVisit?: {
    status: boolean;
    employee: IEmployee;
    text: string;
  };
  info?: {
    archived: {
      status: boolean;
      changes?: [
        {
          employee: IEmployee;
          updatedAt: Date;
        }
      ];
    };
    cancelled: {
      status: boolean;
      changes?: [
        {
          employee: IEmployee;
          updatedAt: Date;
        }
      ];
    };
    rescheduled: {
      status: boolean;
      changes?: [
        {
          employee: IEmployee;
          updatedAt: Date;
        }
      ];
    };
    finished: {
      status: boolean;
      finishedBy: IEmployee;
    };
  };
}
export type IEventCalendar = {
  allDay?: boolean;
  start?: Date;
  end?: Date;
  resource?: any;
};

export type ExternosRequest = {
  _id?: string;
  clientName?: string;
  clientFullAddress?: string;
  clientVisitType?: string;
  appointmentCode?: string;
  appointmentDone?: boolean;
};
