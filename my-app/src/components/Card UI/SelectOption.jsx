import { useState } from "react";
const SelectOption = (props) => {
    const { PraTitPost2, PraDes1Post2 } = props;
    const conditions = [
        {
            belopp: "2000",
            time: "12 month",
            pay: "167",
            ar: "0%",
            apm: "29",
            avg: "245",
        },
        {
            belopp: "5000",
            time: "12 month",
            pay: "417",
            ar: "0%",
            apm: "29",
            avg: "245",
        },
        {
            belopp: "8000",
            time: "12 month",
            pay: "667",
            ar: "0%",
            apm: "29",
            avg: "245",
        },
        {
            belopp: "10000",
            time: "12 month",
            pay: "834",
            ar: "0%",
            apm: "29",
            avg: "245",
        },
        {
            belopp: "15000",
            time: "12 month",
            pay: "1250",
            ar: "0%",
            apm: "29",
            avg: "245",
        },
        {
            belopp: "2000",
            time: "6 month",
            pay: "334",
            ar: "0%",
            apm: "0",
            avg: "0",
        },
        {
            belopp: "5000",
            time: "6 month",
            pay: "834",
            ar: "0%",
            apm: "0",
            avg: "0",
        },
        {
            belopp: "8000",
            time: "6 month",
            pay: "1334",
            ar: "0%",
            apm: "0",
            avg: "0",
        },
        {
            belopp: "10000",
            time: "6 month",
            pay: "1667",
            ar: "0%",
            apm: "0",
            avg: "0",
        },
        {
            belopp: "15000",
            time: "6 month",
            pay: "2500",
            ar: "0%",
            apm: "0",
            avg: "0",
        },
    ];

    const [belopp, setBeloop] = useState("");
    const [month, setMonth] = useState("");
    const handleBeloppChange = (event) => {
        setBeloop(event.target.value);
    };
    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };
    const matchingCondition = conditions.find(
        (condition) => condition.belopp === belopp && condition.time === month
    );
    const CalculatorBelopp = () => {
        if (matchingCondition) {
            return (
                parseInt(matchingCondition.pay) +
                parseInt(matchingCondition.apm) +
                parseInt(matchingCondition.avg)
            );
        }
        return 0;
    };

    return (
        <>
            <select
                name=""
                value={belopp}
                onChange={handleBeloppChange}
                className="focus:outline-none StyleButtonNav py-5 my-5"
            >
                <option className="text-center" disabled selected value="">
                    Skriva Köppa Belopp?
                </option>
                <option value="2000" className="text-center">
                    2000
                </option>
                <option value="5000" className="text-center">
                    5000
                </option>
                <option className="text-center" value="8000">
                    8000
                </option>
                <option className="text-center" value="10000">
                    10000
                </option>
                <option className="text-center" value="15000">
                    15000
                </option>
            </select>
            <select
                name=""
                value={month}
                onChange={handleMonthChange}
                className="focus:outline-none StyleButtonNav py-5 my-5 "
            >
                <option className="text-center" disabled selected value="">
                    Hur Längre vill du betalt?
                </option>
                <option className="text-center" value="6 month">
                    6 month
                </option>
                <option className="text-center" value="12 month">
                    12 month
                </option>
            </select>
            <h3 className=" dt:hidden h3CustomPC text-custom-darkgreen">
                {PraTitPost2}
            </h3>
            <p className=" dt:hidden DescCustomPC my-[1rem] text-custom-darkgreen">
                {PraDes1Post2}
            </p>
            <table className="  dt:hidden min-w-full table-auto border-collapse border border-gray-400 h-[30vh]">
                <thead>
                    <tr>
                        <th className="TabbelCustomPC">Kostnad</th>

                        <th className="TabbelCustomPC">Pris</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="TabbelCustomPC TabbelHover">
                            One month
                        </td>
                        {matchingCondition && (
                            <td className="TabbelCustomPC TabbelHover">
                                {matchingCondition.pay}
                            </td>
                        )}
                    </tr>
                    <tr>
                        <td className="TabbelCustomPC TabbelHover">Årsränta</td>
                        {matchingCondition && (
                            <td className="TabbelCustomPC TabbelHover">
                                {matchingCondition.ar}
                            </td>
                        )}
                    </tr>
                    <tr>
                        <td className="TabbelCustomPC TabbelHover">
                            Adm.avg./mån
                        </td>
                        {matchingCondition && (
                            <td className="TabbelCustomPC TabbelHover">
                                {matchingCondition.apm}
                            </td>
                        )}
                    </tr>
                    <tr>
                        <td className="TabbelCustomPC TabbelHover">
                            Uppläggn. avg
                        </td>
                        {matchingCondition && (
                            <td className="TabbelCustomPC TabbelHover">
                                {matchingCondition.avg}
                            </td>
                        )}
                    </tr>
                </tbody>
                <tfoot>
                    {" "}
                    <td className="TabbelCustomPC font-bold text-black TabbelHover">
                        Total Kost
                    </td>
                    {matchingCondition && (
                        <td className="TabbelCustomPC TabbelHover">
                            {CalculatorBelopp()}
                        </td>
                    )}
                </tfoot>
            </table>
        </>
    );
};
export default SelectOption;
