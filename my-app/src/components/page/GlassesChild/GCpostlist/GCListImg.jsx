import eyekid1 from "../../../assets/eyekid1.jpg";
import eyekid2 from "../../../assets/eyekid2.jpg";
import eyekid3 from "../../../assets/eyekid3.jpg";
import eyekid4 from "../../../assets/eyekid4.jpg";
const GCListimg = () => {
    return (
        <>
            <div className="grid h-[50vh] grid-cols-12 grid-rows-12 gap-x-2  bg-[#fbfbfb]">
                <img
                    src={eyekid1}
                    alt="Eyekids"
                    className="  col-start-1 dt:col-start-2 col-end-7 row-start-1 dt:row-start-2 row-end-6 dt:row-end-7  shadow-Shadow rounded-[30%] w-full h-full object-cover  "
                />
                <img
                    src={eyekid2}
                    alt="Eyekids"
                    className="col-start-7 col-end-13 dt:col-end-12 row-start-1 dt:row-start-2 row-end-6 dt:row-end-7 shadow-Shadow rounded-[30%] w-full h-full  object-cover  "
                />
                <img
                    src={eyekid3}
                    alt="Eyekids"
                    className=" col-start-1 dt:col-start-2  col-end-7 dt:col-end-6 row-start-7 dt:row-start-7 row-end-12 dt:row-end-12 shadow-Shadow rounded-[30%] w-full h-full  object-cover  "
                />
                <img
                    src={eyekid4}
                    alt="Eyekids"
                    className=" col-start-7 dt:col-start-6 col-end-13 dt:col-end-12 row-start-7 dt:row-start-7 row-end-12 dt:row-end-12 shadow-Shadow rounded-[30%] w-full  h-full object-cover  "
                />
            </div>
        </>
    );
};
export default GCListimg;
