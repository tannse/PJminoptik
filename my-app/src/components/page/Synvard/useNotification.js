import { useState } from "react";
import useSupportMail from "./useSupportMail";
const useNotification = () => {
    const { handleSupportMail } = useSupportMail();
    const [notification, setNotification] = useState(false);
    const handleNotification = () => {
        setNotification(!notification);
        handleSupportMail();
    };
    return { notification, handleNotification };
};
export default useNotification;
