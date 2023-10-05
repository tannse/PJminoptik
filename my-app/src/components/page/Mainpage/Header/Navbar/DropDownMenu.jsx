import { Link } from "react-router-dom";

const DropDownMenu = (props) => {
    const { subMenus } = props;
    return (
        <ul>
            {subMenus?.map((submenuitem, index) => (
                <li
                    className="list-disc text-[20px]   ml-[3.5rem] py-2"
                    key={index}
                >
                    <Link to={submenuitem.url}>{submenuitem.title}</Link>
                </li>
            ))}
        </ul>
    );
};
export default DropDownMenu;
