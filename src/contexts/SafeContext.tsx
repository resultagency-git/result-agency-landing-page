import React, { createContext, ReactNode } from "react";
import { EventProps } from "react-big-calendar";

import { IAppointment } from "../types/appointment";
import { IBudget } from "../types/budget";
import { ICustomer } from "../types/customer";
import { IEmployee } from "../types/employee";
import { IPosition } from "../types/positions";
// import { handleRetrieveNextAppointments } from "./hook";

export type NextAppt = {
  value: string;
  data: IAppointment[];
};

interface ISafeContext {
  safeContext: SafeContextProps;
  setSafeContext: React.Dispatch<React.SetStateAction<SafeContextProps>>;
}
export type SafeContextProps = {
  employee?: IEmployee;
  templateActive?: boolean;
  newAppointment?: {
    step?: number;
    data?: IAppointment;
    finish?: boolean;
  };
  editingPosition?: IPosition;
  positions?: IPosition[];
  employees?: IEmployee[];
  customers?: ICustomer[];
  appointments?: IAppointment[];
  appointmentsCalendar?: EventProps[];
  budgets?: IBudget[];
  nextAppointments?: NextAppt[];
  oldAppointmeents?: NextAppt[];
};
interface ISafeContextProvider {
  children: ReactNode;
}

const SafeContext = createContext<ISafeContext>({
  safeContext: {},
  setSafeContext: () => {},
});

export const SafeContextProvider = ({ children }: ISafeContextProvider) => {
  return children;
  // return (
  //   <SafeContext.Provider
  //     value={{
  //       safeContext,
  //       setSafeContext,
  //     }}
  //   >
  //     <BoxChildren>
  //       <div className="firstBoxChildren" ref={refChildren}>
  //         {children}
  //       </div>
  //     </BoxChildren>
  //   </SafeContext.Provider>
  // );
};

export default SafeContext;
