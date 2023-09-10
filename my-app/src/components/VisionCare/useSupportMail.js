import { useState } from "react";

const useSupportMail = () => {
    const [supportMail, setSupportMail] = useState(false);
    const handleSupportMail = () => {
        if (supportMail) {
            setSupportMail(false);
        } else {
            setSupportMail(!supportMail);
        }
    };
    return { supportMail, handleSupportMail };
};

export default useSupportMail;
