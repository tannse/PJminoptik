import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const TimeOut = setTimeout(() => {
            navigate("/");
        }, 5000);
        return () => clearTimeout(TimeOut);
    }, [navigate]);

    return (
        <div className="font-Exo mt-[100px] h-[50vh] p-[20px] flex flex-col items-center shadow-Shadow bg-[#fff] rounded-md ">
            <h1 className="text-custom-darkgreen   text-[60px]">HOPPSAN!</h1>
            <hr className="h-[2px] w-[50%] mb-[20px] bg-premierColor"></hr>

            <p className="text-[18px] text-black">
                Sidan du söker kunde inte hittas!
            </p>
            <p className="text-[18px] text-black">
                Men det finns många andra sidor du kan besöka på vår hemsida.
            </p>

            <Link
                className=" uppercase font-bold text-custom-darkgreen text-[20px] underline mt-5"
                to={"/"}
            >
                Tillbaka hem
            </Link>
        </div>
    );
};

export default ErrorPage;
