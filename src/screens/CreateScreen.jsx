import {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CreateScreen = ({data, setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null);
  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmt,
    };
    setdata([...data, newItem]);
    setitemName('');
    setstockAmt('');
    setisEdit(false);
  };

  const deleteItemHandler = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const editItemHandler = item => {
    setisEdit(true);
    setitemName(item.name);
    seteditItemId(item.id);
  };

  const updateItemHandler = () => {
    setdata(
      data.map(item =>
        item.id === editItemId
          ? {...item, name: itemName, stock: stockAmt}
          : item,
      ),
    );
  };
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
        keyboardType="numeric"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
      />

      <Pressable
        style={styles.button}
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}>
        <Text style={styles.buttonText}>
          {isEdit ? 'EDIT ITEM IN STOCK' : 'ADD ITEM IN STOCK'}
        </Text>
      </Pressable>

      <View style={{marginTop: 10}}>
        <Text style={styles.headingText}>All items in stock</Text>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>

              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={styles.itemText}>{item.stock}</Text>

                <Pressable
                  style={styles.editButton}
                  onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>

                <Pressable
                  style={styles.editButton}
                  onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
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
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: '2%',
    borderRadius: 8,
    // marginVertical: '1%',
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },

  editButton: {
    paddingHorizontal: '5%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
  },
});
