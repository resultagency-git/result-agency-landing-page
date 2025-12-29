/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, ReactNode } from "react";
import useSetState from "./../hooks/useSetState";

interface IMobileContext {
  mobileContext: MobileContextProps;
  setMobileContext: React.Dispatch<React.SetStateAction<MobileContextProps>>;
}
export type MobileContextProps = {
  modalComponent?: ReactNode;
};
interface IMobileContextProvider {
  children: ReactNode;
}

const MobileContext = createContext<IMobileContext>({
  mobileContext: {},
  setMobileContext: () => {},
});

export const MobileContextProvider = ({ children }: IMobileContextProvider) => {
  const [mobileContext, setMobileContext] = useSetState<MobileContextProps>({});

  return (
    <MobileContext.Provider
      value={{
        mobileContext,
        setMobileContext,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContext;
