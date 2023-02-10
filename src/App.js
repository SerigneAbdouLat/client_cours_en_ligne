import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import {Grid,Paper, Avatar, TextField, Button, Typography,Link} from '@mui/material'

import LockOutlined from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login=({ onFormSwitch })=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={onFormSwitch}>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

const Register=({ onFormSwitch })=>{

    const paperStyle={padding :40,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                    <h2>Register</h2>
                </Grid>
                <TextField label='Firstname' placeholder='Enter Firstname' fullWidth required/>
                <TextField label='Name' placeholder='Enter name' fullWidth required/>
                <TextField label='Telephone' placeholder='Telephone' fullWidth required/>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField label='ConfirmPassword' placeholder='Confirm password' type='password' fullWidth required/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography > Already have an account? 
                     <Link href="#" onClick={onFormSwitch}>
                        Login 
                </Link>
                </Typography>
                
            </Paper>
        </Grid>
    )
}


/*const App = () => {

    useEffect(()=>
        {
            console.log('the project is started');    
        },[]);
            
    return ( 
        <>
        <h1>Bienvenue sur Unidemia</h1>
        <Register></Register>
        </>  
    )
}*/

function App() {
    const [Grid, setForm] = useState('Login');
   
    
  
    const handleFormSwitch = (event) => {
      event.preventDefault();
      setForm(Grid === 'Login' ? 'Register' : 'Login');
    };
    return (
      
      <div className="App">
        <header >
          
          <div>
        {Grid === 'Login' ? (
          <Login onFormSwitch={handleFormSwitch} />
        ) : (
          <Register onFormSwitch={handleFormSwitch} />
        )}
      </div>
        </header>
      </div>
    );
    
  };

export default App;