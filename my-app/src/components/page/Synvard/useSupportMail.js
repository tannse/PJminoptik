import { useState } from "react";

const useSupportMail = () => {
    const [supportMail, setSupportMail] = useState(false);
    const handleSupportMail = () => {
        setSupportMail(!supportMail);
    };
    return { supportMail, handleSupportMail };
};

export default useSupportMail;
