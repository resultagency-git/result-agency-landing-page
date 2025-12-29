import generalApi from "../../services";
import { SafeContextProps } from "../SafeContext";

const handleRetrieveNextAppointments = async ({
    setSafeContext,
}: {
    setSafeContext: React.Dispatch<React.SetStateAction<SafeContextProps>>;
}) => {
    try {
        const request = await generalApi.post(
            "/employee/mobile/next-appointments"
        );
        if (request.data.error === false) {
            setSafeContext({
                nextAppointments: request.data.return,
            });
            return null;
        }
    } catch (error) {
        return undefined;
    }
};

const handleRetrieveOldAppointments = async ({
    setSafeContext,
}: {
    setSafeContext: React.Dispatch<React.SetStateAction<SafeContextProps>>;
}) => {
    try {
        const request = await generalApi.post(
            "/employee/mobile/old-appointments"
        );
        if (request.data.error === false) {
            setSafeContext({
                oldAppointmeents: request.data.return,
            });
            return null;
        }
    } catch (error) {
        return undefined;
    }
};

export { handleRetrieveNextAppointments, handleRetrieveOldAppointments };
