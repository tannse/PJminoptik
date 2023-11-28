import Carousel from "../../../Card UI/Carousel";
import SunGlass1 from "../../../assets/SunglassSlide1.jpg";
import SunGlass2 from "../../../assets/SunglassSlide2.jpg";
import SunGlass3 from "../../../assets/SunglassSlide3.jpg";
import SunGlass4 from "../../../assets/SunglassSlide4.jpg";
import DOlogo from "../../../assets/DOlogo.png";
import RBlogo from "../../../assets/RBlogo.png";
import OAlogo from "../../../assets/OAlogo.png";

const SunGlassPost4 = (props) => {
    const images = [SunGlass1, SunGlass2, SunGlass3, SunGlass4];

    const { title } = props;
    return (
        <>
            <div className="  h-[100vh] dt:h-[120vh] flex items-center flex-col font-Exo  bg-[#f6faf6]">
                <div className="max-w-full dt:max-w-4xl">
                    <h3 className=" self-center text-[27px] dt:text-[3rem] dt:text-center py-[20px] text-custom-darkgreen font-extrabold">
                        {title}
                    </h3>
                    <Carousel>
                        {images.map((image, index) => (
                            <img key={index} src={image} />
                        ))}
                    </Carousel>
                </div>

                <div className="flex mt-[2rem] justify-evenly">
                    <div className="  w-[18%]">
                        <img
                            className=" place-content-stretch h-full    "
                            src={DOlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className=" w-[15%]">
                        <img
                            className=" h-full rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className=" w-[15%]">
                        <img
                            className=" h-full rounded-[10px] p-[10px] "
                            src={OAlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className="m w-[15%]">
                        <img
                            className=" h-full rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className="w-[15%]">
                        <img
                            className="  h-full rounded-[10px] p-[10px]  "
                            src={OAlogo}
                            alt="Rayban"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default SunGlassPost4;
