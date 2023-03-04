import { Link } from "react-router-dom";

const AsideMenu = () => {

    const menuLinks = [
        { url: "/misc", label: "Misc" },
        { url: "/buttons", label: "Buttons" },
        { url: "/checkboxes", label: "Checkboxes" },
        { url: "/radioButtons", label: "RadioButtons" },
        { url: "/selects", label: "Selects" },
        { url: "/continuousSlider", label: "ContinuousSlider" },
        { url: "/inputs", label: "Inputs" },
        { url: "/tooltips", label: "Tooltips" },
        { url: "/modals", label: "Modals" },
        { url: "/accordions", label: "Accordions" },
        { url: "/drawers", label: "Drawers" },
        { url: "/paginations", label: "Paginations" },
        { url: "/steppers", label: "Steppers" },
    ];

    return (
        <aside style={{
            background: "#c1c1c1",
            padding: "0 40px 10px 0",
            minHeight: "100vh"
        }}>
            <ul style={{
                listStyle: "none",
                padding: "10px"
            }}>

                {
                    menuLinks.map((item, index) => (
                        <li key={"menuLinks-" + index}>
                            <Link to={item.url}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </aside>
    )
};

export default AsideMenu;