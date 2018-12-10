import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL COMPONENTS
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
// MATERIAL UI ICONS
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({
  onClick,
  onDelete,
  completed,
  text,
  id
}) => {
  const itemIcon = completed ? <AssignmentTurnedInIcon /> : <AssignmentIcon />;
  return <ListItem
    button
    component="a"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <ListItemIcon>{itemIcon}</ListItemIcon>
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>;
};

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default TodoItem;
