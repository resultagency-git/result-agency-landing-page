import { Dispatch, SetStateAction } from "react";
import { SafeContextProps } from "../contexts/SafeContext";
import generalApi from "../services";

type Props = {
  safeContext: SafeContextProps;
  setSafeContext: Dispatch<SetStateAction<SafeContextProps>>;
};

const handleSuperFast = async ({ safeContext, setSafeContext }: Props) => {
  try {
    const requestSafeContext = await generalApi.post("/employee/superFast");

    if (requestSafeContext.data.error) {
      throw new Error("Algo deu errado.");
    }

    setSafeContext({
      employee: requestSafeContext.data.return.employee,
    });
  } catch (error) {
    window.localStorage.clear();
    window.location.href = "/";
  }
};

export default handleSuperFast;
