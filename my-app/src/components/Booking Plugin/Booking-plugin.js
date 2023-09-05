import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingPlugin = () => {
    const [loadedData, setLoadedData] = useState("");

    useEffect(() => {
        const apiUrl =
            "https://ocucowebdiary.net/WD47SEOPTITECRS/wd/../api/widget/generatefile?scheme=https&type=js&key=929ad27055e56298a2ddc0d894ac7e49&clear=1";

        axios
            .get(apiUrl)
            .then((response) => {
                // Xử lý dữ liệu tải về tại đây
                const loadedJavascript = response.data;

                // Hiển thị dữ liệu trong state
                setLoadedData(loadedJavascript);
            })
            .catch((error) => {
                console.error("Error loading JavaScript:", error);
            });
    }, []);

    return (
        <div>
            {/* Hiển thị dữ liệu đã tải về */}
            <script dangerouslySetInnerHTML={{ __html: loadedData }} />
            {/* Các thành phần React khác ở đây */}
            <h1>Booking system</h1>
        </div>
    );
};

export default BookingPlugin;
