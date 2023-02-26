
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


const ContinuousSlider = () => {
    const [value, setValue] = useState(150);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider 
                aria-label="Volume" 
                step={10}
                marks
                min={100}
                max={200}

                value={value} onChange={handleChange} />
                <VolumeUp />
            </Stack>
            <div>
                Volume = {value}
            </div>
        </Box>
    );
}

export default ContinuousSlider;