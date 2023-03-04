


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Switch, TextField } from '@mui/material';


const steps = ['Step01', 'Step02', 'Step03'];

const Steppers = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [name, setName] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [hasChild, setHasChild] = React.useState(false);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep === steps.length ? (
                <>
                    <div>
                        All steps completed
                    </div>
                </>
            ) : (
                <>
                    <form>

                        {
                            activeStep === 0 &&
                            <>
                                <div style={{ marginBottom: "16px" }}>
                                    <TextField value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        label="Adınız" variant="outlined" />
                                </div>
                                <div>
                                    <TextField value={lastname}
                                        onChange={(e) => {
                                            setLastname(e.target.value);
                                        }}
                                        label="Soyadınız" variant="outlined" />
                                </div>



                            </>
                        }


                        {
                            activeStep === 1 &&
                            <>
                                Merhaba {name}, Çocuğun varmı ?

                                <div style={{ marginBottom: "16px" }}>
                                    <Switch color="secondary"
                                        value={hasChild}
                                        onChange={(e) => {
                                            debugger
                                            setHasChild(e.target.checked)
                                        }} />
                                </div>

                                {

                                    hasChild &&
                                    <p>
                                        {"'"+name + " " + lastname+"'"} Çocuğu vardır
                                    </p>
                                }



                            </>
                        }

                    </form>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>

                        <Button onClick={handleNext}
                            disabled={name && lastname ? false : true}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>

                </>
            )}
        </div>
    );
}

export default Steppers;

