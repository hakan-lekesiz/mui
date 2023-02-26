import { Button } from '@mui/material';



const Buttons = () => {

    return (
        <>
            <div style={{ display: "flex", gap: "12px" }}>
                <Button variant="text" >Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained" color='success'>Contained</Button>
            </div>
            <div style={{margin:"20px"}}>
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </div>
        </>
    );
}

export default Buttons;
