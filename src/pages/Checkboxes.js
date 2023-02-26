import { FormControlLabel, Checkbox, Switch, Alert, Collapse } from '@mui/material';
import { useState } from 'react';


const Checkboxes = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
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


            <Collapse in={isChecked}>
                <Alert severity="success">Kullanıcı sözleşmeyi kabul etti</Alert>
            </Collapse>

            <div>
                <Switch {...label} defaultChecked />
                <Switch {...label} color="secondary" />
            </div>

        </>
    );
}

export default Checkboxes;
