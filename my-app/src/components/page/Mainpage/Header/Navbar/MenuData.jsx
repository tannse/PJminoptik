import { BiHomeHeart } from "react-icons/bi";
import { GiMicroscopeLens } from "react-icons/gi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { GiSunglasses } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";
export const MenuDatas = [
    {
        title: "Hem",
        key: "nb1",
        icon: <BiHomeHeart className="mr-4 text-white text-[25px]" />,
        url: "/",
    },
    {
        title: "Synundersökning",
        icon: <GiArchiveResearch className="mr-4 text-white text-[25px]" />,
        key: "nb2",
        url: "",
        subMenu: [
            {
                title: "Synvård",
                url: "/synvard",
            },
            {
                title: " Vad göra en Optiker",
                url: "/Introduction",
            },
        ],
    },
    {
        title: "Linser och Glasögon",
        icon: <GiMicroscopeLens className="mr-4 text-white text-[25px]" />,
        key: "nb3",
        url: "/",
        subMenu: [
            {
                title: "Kontaktlinser",
                url: "/Offer",
            },
            {
                title: "Arbetglasögon",
                url: "/WorkGlasses",
            },
            {
                title: "Glasögon till barn",
                url: "/GlassChild",
            },
            {
                title: "Torra ögon",
                url: "/TorraOgon",
            },
        ],
    },
    {
        title: "Solglasögon",
        icon: <GiSunglasses className="mr-4 text-white text-[25px]" />,
        key: "nb4",
        url: "/SunGlasses",
    },
    {
        title: "Hitta till oss",
        icon: <BiHomeHeart className="mr-4 text-white text-[25px]" />,
        key: "nb5",
        url: "/OptikLocation",
    },
    {
        title: "Boka tid",
        icon: <TbCalendarTime className="mr-4 text-white text-[25px]" />,
        key: "nb6",
        url: "/",
    },
    {
        title: "Följ oss",
        fb: <BiLogoFacebook className="mr-4 text-white text-[25px]" />,

        key: "nb7",
        url: "/",
    },
];
