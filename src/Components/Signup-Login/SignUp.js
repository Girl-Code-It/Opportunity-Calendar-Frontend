import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button'

/**
 * This is the SignUp Component.
 * 
 * @author sushi22
 */
import { FormControlLabel, TextField, Button, Checkbox, Typography, Box } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#008dc8",
        },
        secondary: {
            main: "#FFFFFF"
        },
    },
});

const useStyles = makeStyles(() => ({
    
    form: {
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom:10,
        alignItems: "center",
    },
    label: {
        display: "block",
        width: "100%",
        padding: 5,
        
    },
    button:{
        padding:10,
        borderRadius: 20 
        ,outline:"none",
        border:"none",
        width:250
    }
}));

const SignUp = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                height="100vh">

                <form className={classes.form}>
                    <Typography variant="h5" >Sign Up</Typography>
                    <Typography style={{ paddingBottom: 25 }}
                        variant="caption"
                        color="textSecondary"
                    >Please fill this form to create your account.
                    </Typography>
                    <FormControlLabel className={classes.label}
                        control={(<TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="First Name"
                        />)}
                    />
                    <FormControlLabel className={classes.label}
                        control={(<TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="Last Name"
                        />)}
                    />
                    <FormControlLabel className={classes.label}
                        control={(<TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="Email"
                        />)}
                    />
                    <FormControlLabel className={classes.label}
                        control={(<TextField
                            fullWidth
                            required
                            type="password"
                            id="standard-basic"
                            label="Password"
                        />)}
                    />
                    <FormControlLabel className={classes.label}
                        control={(<TextField
                            fullWidth
                            required
                            type="password"
                            id="standard-basic"
                            label="Confirm Password"
                        />)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2" color="textSecondary">
                                I accept the <span style={{ color: "#008dc8" }}>Terms and Conditions </span>& <span style={{ color: "#008dc8" }}>Privacy Policy.</span>
                            </Typography>
                        }
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Sign Up
                    </Button>

                    <Typography color="textSecondary" variant="body2" style={{ padding: 10 }}>OR</Typography>

                    <GoogleButton
                        style={{outline:"none",border:"none"}}
                        type="light"
                        label="Sign Up with Google"
                        onClick={() => { console.log('Google button clicked') }}
                    />

                    <Typography variant="body2" color="textSecondary" style={{ paddingTop: 5,paddingBottom:5 }}>
                        Already have an account?<a href="/login" style={{ color: "#008dc8"}}> Login</a>
                    </Typography>
                </form>
            </Box>
        </ThemeProvider>
    )
}

export default SignUp;