import React from 'react';
import FormContainer from '../components/FormContainer'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export default function AddNewScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <FormContainer/>
      </ScrollView>
    </View>
  );
}
AddNewScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#282c34',
  },
});
