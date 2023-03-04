
import { Dialog } from '@mui/material';
import { useState } from 'react';


const Dialogs = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <a href='#' onClick={() => setOpen(true)}>
                Modalı Aç
            </a>
            <Dialog
                onClose={() => setOpen(false)}
                open={open}
            // fullScreen={false}
            //</>disableEscapeKeyDown={true}
            >
                <div>
                    modal content
                </div>
            </Dialog>

        </>
    );
}

export default Dialogs;