import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";



const Selects = () => {
    const [age, setAge] = useState("");

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <>
            <div style={{ width: "200px" }}>


                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <p>
                 
                {
                    age &&
                    (
                        age > 10 ?
                            "Kullanıcı 10 yaşından büyüktür."
                            :
                            "Kullanıcı 10 yaşındadır."
                    )
                }
            </p>
        </>
    );
}

export default Selects;
