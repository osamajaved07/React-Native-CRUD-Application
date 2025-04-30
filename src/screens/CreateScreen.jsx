import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const CreateScreen = () => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setStockAmt] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name...."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setitemName(item)}
      />

      <TextInput
        placeholder="Enter stock amount...."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add item in stock</Text>
      </Pressable>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});
