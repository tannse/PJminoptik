import eyekid1 from "../../../assets/eyekid1.jpg";
import eyekid2 from "../../../assets/eyekid2.jpg";
import eyekid3 from "../../../assets/eyekid3.jpg";
import eyekid4 from "../../../assets/eyekid4.jpg";
const GCListimg = () => {
    return (
        <>
            <div className="grid h-[100vh] grid-cols-12 grid-rows-12 gap-5  bg-[#fbfbfb]">
                <img
                    src={eyekid1}
                    alt="Eyekids"
                    className=" col-start-2 col-end-8 row-start-2 row-end-7  shadow-Shadow rounded-xl w-full h-full object-cover  "
                />
                <img
                    src={eyekid2}
                    alt="Eyekids"
                    className=" col-start-8 col-end-12 row-start-2 row-end-7 shadow-Shadow rounded-xl w-full  h-full object-cover  "
                />
                <img
                    src={eyekid3}
                    alt="Eyekids"
                    className=" col-start-2 col-end-6 row-start-7 row-end-12 shadow-Shadow rounded-xl w-full  h-full object-cover  "
                />
                <img
                    src={eyekid4}
                    alt="Eyekids"
                    className=" col-start-6 col-end-12 row-start-7 row-end-12 shadow-Shadow rounded-xl w-full  h-full object-cover  "
                />
            </div>
        </>
    );
};
export default GCListimg;
