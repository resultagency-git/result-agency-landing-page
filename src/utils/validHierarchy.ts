import { IEmployee } from "./../types/employee/index";

export class ValidHierarchy {
  employee: IEmployee = {};
  constructor(employee: IEmployee) {
    this.employee = employee;
  }

  doesEmployeeHasCRUD() {
    if (
      this.employee.jobPosition &&
      this.employee.jobPosition.hierarchy &&
      this.employee.jobPosition.hierarchy <= 2
    ) {
      return true;
    }
    return false;
  }

  isUserNotAllowed() {
    if (
      this.employee.jobPosition &&
      this.employee.jobPosition.hierarchy &&
      this.employee.jobPosition.hierarchy === 4
    ) {
      return true;
    }
    return false;
  }

  getAllowedPages() {
    return [
      "/dashboard",
      "/dashboard/externos",
      "/dashboard/externos/history",
      "/settings/profile",
      "/logout",
    ];
  }
}
