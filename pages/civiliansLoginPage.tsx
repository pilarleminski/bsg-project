import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import React, { FormEvent, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Login() {
    
    const router = useRouter();

    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        //pára tudo!!!
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setEmail(data.get('email'));
        setPassword(data.get('password'));
    
    }

    useEffect(()=>{

        if(password && password.length < 6){
            setError(true);
            setErrorMessage('A senha deve ter no mínimo 6 caracteres');
        }else if(password){
            setError(false);
            setErrorMessage('');
            setOpen(true);  
        }
    },[password]);
    
  return (
    <>
        <div>
        <nav className={styles.nav}>
        <NavBar />
      </nav>
        </div>
        <Box sx={{mt:8,
            display:'flex',
            flexDirection: 'column',
            alignItems:'center'
            }}>
        
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
            <TextField margin="normal" type="text" required id="email" name="email" fullWidth label="Digite o login"  autoComplete="email" />
            <TextField margin="normal" required fullWidth id="password" name="password" type="password" label="Digite a senha" autoComplete="current-password"/>
            <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Lembrar-me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                Login
            </Button>
            <Typography component='h3'>
                <Link href='/civiliansRegisterPage'>Cadastrar</Link>
            </Typography>

            {error && <Typography color="error">{errorMessage}</Typography>}


            </Box>
        </Box>
    </>
  )
}