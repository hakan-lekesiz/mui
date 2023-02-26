
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';


const RadioButtons = () => {

    const [gender, setGender] = useState("");

    return (
        <>
           


            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={gender}
                    name="radio-buttons-group"
                    className='radio-group-01'
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                >
                    <FormControlLabel
                        className='radio-button-01'
                        value="female" control={<Radio />} label="Female" />
                    <FormControlLabel className='radio-button-01' value="male"
                        control={<Radio />} label="Male" />
                    <FormControlLabel className='radio-button-01' value="other"
                        control={<Radio />} label="Belirtmek İstemiyorum" />
                </RadioGroup>
            </FormControl>

            <div>
                {
                    gender === "female" &&
                    <p>Kullanıcı cinsiyeti kadındır.</p>
                }
                {
                    gender === "male" &&
                    <p>Kullanıcı cinsiyeti erkektir.</p>
                }
                {
                    gender === "other" &&
                    <p>Kullanıcı cinsiyetini belirtmek istemiyor.</p>
                }

            </div>

        </>
    );
}

export default RadioButtons;
