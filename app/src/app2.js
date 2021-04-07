import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Chips from './components/chip/chip';
import Menu from './components/menu/menu';
import Form from './components/form/form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const fakeInputs = [
  {
      id: 1,
      type: 'text',
      defaultValue: '',
      placeHolder: '',
      label: 'Name'
  },
  {
      id: 2,
      type: 'text',
      defaultValue: '',
      placeHolder: '',
      label: 'Surname'
  },
  {
    id: 3,
    type: 'text',
    defaultValue: '',
    placeHolder: '',
    label: 'Email'
}
]
 
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Chips label='falso chip' type='danger'/>
      <Chips label='falso chip' />
      <Form inputs={fakeInputs}/>
      <Menu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
