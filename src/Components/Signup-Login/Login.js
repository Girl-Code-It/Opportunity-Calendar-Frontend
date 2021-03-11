import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button';
import { FormControlLabel, TextField, Button, Typography, Box } from '@material-ui/core';

/**
 * This is the login component.
 * 
 * @author sushi22
 */

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
        padding: 30,
        width: 380,
        alignItems: "center",
    },
    label: {
        padding: 10,
        width: "100%",
    }
}));

const Login = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                height="100vh">

                <form className={classes.form} noValidate>
                    <Typography variant="h5" >Login</Typography>
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

                    <Typography color="primary" variant="body2" style={{ paddingBottom: 10 }}>Forgot Password?</Typography>

                    <Button variant="contained" color="primary" style={{ borderRadius: 20,outline:"none",border:"none"}}>
                        Login
                    </Button>

                    <Typography color="textSecondary" variant="body2" style={{ padding: 10 }}>OR</Typography>

                    <GoogleButton
                        type="light"
                        style={{outline:"none",border:"none"}}
                        label="Login with Google"
                        onClick={() => { console.log('Google button clicked') }}
                    />

                    <Typography variant="body1" color="textSecondary" style={{ paddingTop: 20 }}>
                        Don't have an account?<a href="/signup" style={{ color: "#008dc8" }}> SignUp</a>
                    </Typography>
                </form>
            </Box>
        </ThemeProvider>
    )
}

export default Login;