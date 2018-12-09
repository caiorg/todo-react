import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTodo = ({
  text,
  onChange,
  onSubmit
}) => {
  return <form onSubmit={onSubmit} noValidate autoComplete="off">
    <TextField
      fullWidth
      label="Descrição"
      name="text"
      value={text}
      onChange={onChange}
    />
    <Button variant="contained" type="submit" disabled={!text}>OK</Button>
  </form>;
};

AddTodo.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
