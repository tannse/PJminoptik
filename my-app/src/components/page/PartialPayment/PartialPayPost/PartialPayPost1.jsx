import { Button } from "@material-tailwind/react";
import DelbetalImg1 from "../../../assets/DelbetalImg1.png";
const PartialPayPost1 = (props) => {
    const {
        PraTitPost1,
        PraTit2Post1,
        PraTit3Post1,
        PraDes1Post1,
        PraDes2Post1,
        PraDesclistPost1,
    } = props;
    return (
        <div className="dt:h-[100vh] mb:h-[1200px] w-[100%] mb:text-center dt:text-left relative flex justify-center  dt:items-center">
            <img className=" object-cover w-full h-full " src={DelbetalImg1} />
            <div className="absolute h-[80vh] flex justify-center items-center w-[90%]  ">
                <div className="h-[70vh] w-[85%] ">
                    <div className="">
                        <div>
                            <h3 className="font-bold text-[2.5rem] text-[#96EEA4]">
                                {PraTitPost1}
                            </h3>
                            <span className="font-bold text-[2.5rem] text-[#fff]">
                                {PraTit2Post1}
                            </span>
                            <p className="text-[#fff] DescCustomPC">
                                {PraDes1Post1}
                            </p>
                            <hr className="my-[20px] dt:ml-0 mb:block m-auto mb:w-[70%] dt:w-[50%]" />
                        </div>
                        <ul className="flex flex-col">
                            <h4 className="text-[1.5rem] font-bold text-[#fff]">
                                {PraTit3Post1}
                            </h4>
                            {Object.values(PraDesclistPost1).map(
                                (item, index) => (
                                    <li
                                        className="DescCustomPC mt-[20px] text-[#fff] "
                                        key={index}
                                    >
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                        <div>
                            <p className="DescCustomPC mt-[20px] text-[#fff] ">
                                {PraDes2Post1}
                            </p>
                        </div>
                        <Button className="mt-[20px] dt:inline-block mb:block mb:mx-auto StyleButtonNav">
                            SE LEDIGA TIDER
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PartialPayPost1;
