/* eslint-disable no-useless-escape */
const isEmailValid = (email: string) => {
    try {
        // This regex is supposed to work in 99% of the cases. Create by a community project: source: https://emailregex.com/
  
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        return re.test(email);
        
    } catch (err) {
        return false;
    }
  }
  
export default isEmailValid;