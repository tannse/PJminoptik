import { useState, useEffect } from "react";

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollPosition(true);
            } else {
                setScrollPosition(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function để loại bỏ sự kiện khi component bị hủy bỏ hoặc thay đổi
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Thêm mảng rỗng để đảm bảo useEffect chỉ gọi lại khi mount và unmount

    return scrollPosition;
};

export default useScroll;
