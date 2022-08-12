import React, { useState } from 'react';
import { Alert, AlertTitle, Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import useStyle from './styles';
import LockIcon from '@mui/icons-material/Lock';
import CustomInput from './CustomInput';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInWithGoogle, registerNewuser, loginUser } from '../../Action/AuthAction';

const Authentication = () => {

    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [navigateReason, setNavigateReason] = useState(location?.state?.from.pathname);

    const switchMood = () => setIsSignUp(!isSignUp);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleGoogleLogin = () => {
        dispatch(signInWithGoogle(location, navigate))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            //sign up action
            if (formData.password !== formData.confirmPassword) {
                alert("Password didn't Match, Please try again");
                return;
            }
            const fullName = formData.firstName + " " + formData.lastName;
            dispatch(registerNewuser(formData.email, formData.password, fullName, location, navigate));
        }
        else { // login action
            dispatch(loginUser(formData.email, formData.password, location, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Container className={classes.container} component='main' maxWidth='xs' sx={{ marginTop: '' }} >

            {
                navigateReason && <Alert onClose={() => { setNavigateReason(null) }} variant="filled" severity="warning" sx={{ marginBottom: '10px' }} >
                    <AlertTitle>Why I am here?🤨🤨</AlertTitle>
                    <p>You have to sign in first to VIEW and ADD movie to your favorite list.</p>
                    <p>Don't worry, after signing in you will be redirected 😄</p>
                </Alert>
            }

            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockIcon  ></LockIcon>
                </Avatar>
                <Typography variant='h5'> {isSignUp ? 'Sign Up' : 'Sign In'} </Typography>

                <form onSubmit={handleSubmit} className={classes.form} >
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <CustomInput name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <CustomInput name='lastName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <CustomInput name='email' label="Email Address" handleChange={handleChange} type='email' />
                        <CustomInput name='password' label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {
                            isSignUp && <CustomInput name='confirmPassword' label=" Re-Type Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} />
                        }
                    </Grid>
                    <Button type='submit' variant='contained' className={classes.submit} fullWidth>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent='center' >
                        <Grid item >
                            <Button onClick={switchMood} className={classes.switchBtn} >
                                {
                                    isSignUp ? <> Already have an account? &#160;<b>Sign In</b> </>
                                        :
                                        <> Don't have an account? &#160; <b> Sign Up </b>  </>
                                }
                            </Button>
                        </Grid>
                    </Grid>
                    <Button onClick={handleGoogleLogin} size='small' variant='contained' className={classes.submit} fullWidth>
                        Sign In With Google
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Authentication;