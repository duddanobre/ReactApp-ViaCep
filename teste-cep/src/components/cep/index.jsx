import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Lista from '../lista';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

export default function BuscarCep(){
    const classes = useStyles();
    const [cep, setCep] = useState('');
    const [enderecos, setEnderecos] = useState({
      cep: '',
      bairro: '',
      logradouro: '',
      uf: ''
    }); 

      function handleBusca(e){
       e.preventDefault();
       
         axios.get('https://viacep.com.br/ws/' + cep + '/json')
        .then(response => {
          setEnderecos(response.data)
        },
        (error) => {
          if(cep !== (/^[0-9]{8}$/)){
            alert('digite apenas 8 digitos no cep');
          }else{
            alert('cep não encontrado')
          }

          console.log('erro: ' + error);
        });
        
     }
    
        return(

            <Container maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>   
                    <form className={classes.form} onSubmit={handleBusca}>
                        <TextField id="filled-basic" label="cep" 
                        variant="filled"
                        value={cep} 
                        onChange={ e => setCep(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                        />

                        <Button type="submit" fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                            Buscar Endereço
                        </Button>
                    </form>
               </div>    
            <Lista>
            <ul>
                
                <li data={enderecos} style={{listStyle: 'none'}}>
                <p>{enderecos['cep']}</p>
                <p>{enderecos['bairro']}</p>
                <p>{enderecos['logradouro']}</p>
                </li>

              </ul>
            
            </Lista>
            </Container>
           
        );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.grey
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));