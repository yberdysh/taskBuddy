import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Fab } from 'native-base';
import COLORS from '../constants/Colors';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const AddTaskButton = ({ onPress }) => (
  <Fab
    direction="up"
    containerStyle={{}}
    style={{ backgroundColor: COLORS.primary }}
    position="bottomRight"
    onPress={onPress}
  >
    <Icon name="add" />
  </Fab>
);

AddTaskButton.propTypes = propTypes;

export default AddTaskButton;