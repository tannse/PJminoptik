import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const MenuItem = ({ item, handleOpenSubMenu, closeNav, openSubMenu }) => {
    return (
        <li>
            {item.subMenu ? (
                <>
                    <button
                        className="ItemMenuPC flex-row items-center"
                        onClick={() => handleOpenSubMenu(item.index)}
                    >
                        {item.icon}
                        {item.title}
                        <MdKeyboardDoubleArrowDown className="ml-[10px] group-focus:rotate-180 duration-300 transition-all ease-linear text-white animate-pulse" />
                    </button>

                    {openSubMenu === item.index && (
                        <ul>
                            {item.subMenu.map((submenuitem, index) => (
                                <li
                                    onClick={closeNav}
                                    className="DescCustom text-start list-disc ml-[5rem] py-2"
                                    key={index}
                                >
                                    <Link to={submenuitem.url}>
                                        {submenuitem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : item.title === "Följ oss" ? (
                <a
                    href="https://www.facebook.com/MinOptik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ItemMenuPC flex-row items-center"
                    onClick={closeNav}
                >
                    {item.fb}
                    {item.icon}
                    {item.title}
                </a>
            ) : (
                <Link
                    to={item.url}
                    className="ItemMenuPC flex-row items-center"
                    onClick={closeNav}
                >
                    {item.fb}
                    {item.icon}
                    {item.title}
                </Link>
            )}
        </li>
    );
};
export default MenuItem;
