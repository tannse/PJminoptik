import { useState } from "react";
import useSupportMail from "./useSupportMail";

const useSupportOption = () => {
    const { handleSupportMail } = useSupportMail();
    const [support, setSupport] = useState(false);
    const HandleSupportOption = (e) => {
        setSupport(!support);
        handleSupportMail();
    };
    return { support, HandleSupportOption };
};
export default useSupportOption;
