
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips({label, type}) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    window.open('https://github.com/mui-org/material-ui/tree/master/examples/create-react-app');
  };

  return (
    <div className={classes.root}>
        <Chip
        label={label}
        onClick={handleClick}
        onDelete={handleDelete}
        color={type === 'danger' ? 'secondary' : 'primary'}
        deleteIcon={<DoneIcon />}
      />
    </div>
  );
}
