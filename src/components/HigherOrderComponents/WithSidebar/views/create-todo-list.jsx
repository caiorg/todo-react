import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const CreateTodoList = ({fields, handlers, ui}) => {
  return (
    <Dialog
      open={ui.createTodoList}
      onClose={handlers.toggleTodoListCreation}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handlers.createTodoList} noValidate autoComplete="off">
        <DialogContent>
          <TextField
            fullWidth
            name="listName"
            label="Inserir o título da lista"
            value={fields.listName}
            onChange={handlers.changeTextField}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handlers.toggleTodoListCreation}>
            Cancelar
          </Button>
          <Button color="primary" type="submit" disabled={!fields.listName}>
            Criar lista
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

CreateTodoList.propTypes = {
  ui: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
};

export default CreateTodoList;
