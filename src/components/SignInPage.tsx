import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

import { useAppState } from '../state';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    margin: '2em 0 0.1em',
  },
  submit: {
    color: 'black',
    background: 'white',
    margin: '2em 0 0.7em',
    textTransform: 'none',
  },
});

export default function SignInPage() {
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

  if (loading) return <div>Signing In</div>;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" direction="column">
        <Typography variant="h5" align="center" className={classes.title}>
          Sign In
        </Typography>
        <TextField label="email" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField label="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button
          variant="contained"
          className={classes.submit}
          type="submit"
          disabled={!password.length || !email.length}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
}
