import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL COMPONENTS
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// MATERIAL UI ICONS
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIcon from '@material-ui/icons/Assignment';

const TodoItem = ({
  onClick,
  completed,
  text
}) => {
  const itemIcon = completed ? <AssignmentTurnedInIcon /> : <AssignmentIcon />;
  return <ListItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <ListItemIcon>{itemIcon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>;
};

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;
