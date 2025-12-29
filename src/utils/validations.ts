export class AppValidations {
  static hasToken(): boolean {
    const findToken = window.localStorage.getItem("cdp_token");
    if (findToken) {
      return true;
    }
    return false;
  }
}
