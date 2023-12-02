const OptikLocationPost3 = (props) => {
    const {
        FirstTitle,
        SecondTitle,
        FirstDesc,
        SecondDesc,
        ThirdDesc,
        TitleItem2,
        DescItem2,
        TitleItem3,
        DescItem3,
    } = props;
    return (
        <>
            <div className="flex flex-col  items-center ">
                <div className="w-[90%] ">
                    {/* FirstItem Post3 */}
                    <div className="h-[60vh] flex justify-center items-center bg-[#F6FCF6]">
                        <div className="flex-col items-center w-[80%]">
                            <h3 className="h3CustomPC text-custom-darkgreen text-center">
                                {FirstTitle}
                            </h3>
                            <p className="DescCustomPC  font-semibold text-custom-darkgreen text-center">
                                {SecondTitle}
                            </p>
                            <p className="DescCustomPC py-5 text-center">
                                {FirstDesc}
                            </p>
                            <p className="DescCustomPC py-5 text-center">
                                {SecondDesc}
                            </p>
                            <p className="DescCustomPC py-5 text-center">
                                {ThirdDesc}
                            </p>
                        </div>
                    </div>
                    {/* Second Post3 */}
                    <div className="h-[50vh] mt-[35px]  flex justify-center items-center bg-[#F6FCF6]">
                        <div className="flex-col items-center w-[80%]">
                            <h3 className="h3CustomPC text-custom-darkgreen text-center">
                                {TitleItem2}
                            </h3>

                            <p className="DescCustomPC py-5 leading-10  text-center">
                                {DescItem2}
                            </p>
                        </div>
                    </div>
                    {/* Third Post3 */}
                    <div className="h-[50vh] mt-[35px]  flex justify-center items-center bg-[#F6FCF6]">
                        <div className="flex-col items-center w-[80%]">
                            <h3 className="h3CustomPC text-custom-darkgreen text-center">
                                {TitleItem3}
                            </h3>

                            <p className="DescCustomPC leading-10 py-5 text-center">
                                {DescItem3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OptikLocationPost3;
