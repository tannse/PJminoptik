import { useEffect, useState } from "react";
import VisionPost3 from "./VisionList/VisionPost3";
const useSupportMail = () => {
    const [supportMail, setSupportMail] = useState(false);

    const handleSupportMail = (e) => {
        setSupportMail(!supportMail);
        console.log(supportMail);
    };

    return { supportMail, handleSupportMail };
};
export default useSupportMail;
