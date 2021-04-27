import React from 'react';
import { Modal } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { useDispatch } from 'react-redux';
import { userClean } from '../../store/UserReducer';

const component = () => {
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch( userClean("") );
  }

	return (
    <Modal
      animationType="slide"
      transparent={true}
      style={{backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center', width:'100%', height:'100%', justifyContent:'center'}}
    >
      <Card>
        <Card.Title style={{fontSize:25}}>Данные успешно отправлены!</Card.Title>
        <Button
					title="Submit"
					onPress={submitHandler}
					containerStyle={{
						marginVertical: 40,
					}} />
      </Card>
    </Modal>
	)
}

export default component

