import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';

import { useAppState } from '../state';

const useStyles = makeStyles({
  button: {
    color: 'black',
    background: 'white',
    margin: '0.8em 0 0.7em',
    textTransform: 'none',
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const { login, loading } = useAppState();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password });
    history.push('/');
  };

  if (loading) return <div>Logging In</div>;

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" direction="column">
          <TextField label="email" value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            disabled={!password.length || !email.length}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}
