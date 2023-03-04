import { Drawer } from "@mui/material";
import { useState } from "react";
import AsideMenu from "../components/AsideMenu";

const Drawers = () => {

    const [openRight, setOpenRight] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>

            <a href='#' onClick={() => setOpen(true)}>
                open left drawer
            </a>

            <Drawer
                open={open}
                onClose={() => setOpen(false)}
            >
                <AsideMenu />
            </Drawer>
            <div>
                <a href='#' onClick={() => setOpenRight(true)}>
                    open right drawer
                </a>
            </div>

            <Drawer
                anchor={"right"}
                open={openRight}
                onClose={() => setOpenRight(false)}
            >
                <AsideMenu />
            </Drawer>


        </>
    );
}

export default Drawers;
