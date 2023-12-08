import Resurslogo from "../../../assets/Resurslogo.png";
const PartialPayPost2 = (props) => {
    const start = 25;
    const end = 38;
    const belopp = [2000, 5000, 8000, 10000, 15000];
    const belopp6month = [334, 834, 1334, 1667, 250];
    const belopp12month = [167, 417, 667, 834, 1250];
    const {
        PraTitPost2,
        PraTit2Post2,
        PraDes1Post2,
        PraDes2Post2,
        PraDes3Post2,
        kopbelopp,
        sixmonth,
        twelvemonths,
        Kostnader,
        Annualinterest,
        Admavg,
        Uppläggn,
    } = props;
    return (
        <div className="h-[100vh] flex justify-center items-center w-full">
            <div className="w-[80%] h-[80vh]  ">
                <div className="flex flex-col ">
                    <h3 className="h3CustomPC text-custom-darkgreen">
                        {PraTitPost2}
                    </h3>
                    <p className="DescCustomPC my-[1rem] text-custom-darkgreen">
                        {PraDes1Post2}
                    </p>
                </div>
                <div className="flex w-full gap-x-[2rem]">
                    {/* Tabbell */}
                    <div className="overflow-x-auto w-3/5 ">
                        <table className="min-w-full table-auto border-collapse border border-gray-400">
                            <thead className="bg-gray-100">
                                <tr className="bg-bgButton text-white">
                                    <th className="TabbelCustomPC">
                                        {kopbelopp}
                                    </th>
                                    <th className="TabbelCustomPC">
                                        {sixmonth}
                                    </th>
                                    <th className="TabbelCustomPC">
                                        {twelvemonths}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {belopp.map((amount, index) => (
                                    <tr key={index}>
                                        <td className="TabbelCustomPC TabbelHover">{`${amount}:-`}</td>
                                        <td className="TabbelCustomPC TabbelHover ">{`${belopp6month[index]}:-`}</td>
                                        <td className="TabbelCustomPC TabbelHover group">{`${belopp12month[index]}:-`}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead className="bg-gray-100 bg-bgButton text-white">
                                <tr>
                                    <th className="TabbelCustomPC">
                                        {Kostnader}
                                    </th>
                                    <th className="TabbelCustomPC">
                                        {sixmonth}
                                    </th>
                                    <th className="TabbelCustomPC">
                                        {twelvemonths}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="TabbelCustomPC ">
                                        {Annualinterest}
                                    </td>
                                    <td className="TabbelCustomPC">0%</td>
                                    <td className="TabbelCustomPC">0%</td>
                                </tr>
                                <tr>
                                    <td className="TabbelCustomPC">{Admavg}</td>
                                    <td className="TabbelCustomPC">0:-</td>
                                    <td className="TabbelCustomPC">29:-</td>
                                </tr>
                                <tr>
                                    <td className="TabbelCustomPC">
                                        {Uppläggn}
                                    </td>
                                    <td className="TabbelCustomPC">0:-</td>
                                    <td className="TabbelCustomPC">245:-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Resurs Bank */}
                    <div className=" flex flex-col gap-y-6 w-2/5">
                        {" "}
                        <h3 className="h3CustomPC text-custom-darkgreen">
                            {PraTit2Post2}
                        </h3>
                        <img src={Resurslogo} className="object-cover" />
                        <p className="DescCustomPC">
                            {PraDes2Post2.slice(0, start)}
                            <a
                                className="text-[1.2rem] font-semibold text-custom-darkgreen"
                                href="https://www.resursbank.se/"
                                alt="resursbank.se"
                            >
                                {PraDes2Post2.slice(start, end)}
                            </a>
                            {PraDes2Post2.slice(end)}
                        </p>
                        <p className="DescCustomPC">{PraDes3Post2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PartialPayPost2;
