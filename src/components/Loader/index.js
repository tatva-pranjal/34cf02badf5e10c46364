import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
//import styles and define constants
import styles from './styles';
import COLORS from '../../constants/colors';

const Loader = (props) => {
  const {isVisible} = useSelector((state) => state.pageLoader);
  return (
    <Modal
      transparent
      animationType="none"
      visible={isVisible}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <ActivityIndicator
          animating={isVisible}
          color={COLORS.YELLOW}
          size={'large'}
        />
      </View>
    </Modal>
  );
};

export default Loader;
