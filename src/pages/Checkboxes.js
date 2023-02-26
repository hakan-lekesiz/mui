import { FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';


const Checkboxes = () => {
    const [isChecked, setIschecked] = useState(false);

    return (
        <>
            <FormControlLabel control={
                <Checkbox defaultChecked
                    onChange={(e) => {
                        setIschecked(e.target.checked);
                    }}
                    checked={isChecked} />
            }
                label="Kullanıcı sözleşmesini kabul ediyorum." />
            {
                isChecked &&
                <p>Kullanıcı sözleşmeyi kabul etti</p>
            }

        </>
    );
}

export default Checkboxes;
