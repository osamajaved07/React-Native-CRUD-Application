import {Pressable, StyleSheet, Text, View} from 'react-native';
import AllItem from './AllItem';
import {useState} from 'react';
import CreateScreen from './CreateScreen';

const HomeScreen = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    {id: 1, name: 'Wheat', stock: 5, unit: 'kg'},
    {id: 2, name: 'Rice', stock: 15, unit: 'kg'},
    {id: 3, name: 'Corn', stock: 25, unit: 'kg'},
    {id: 4, name: 'Pulse', stock: 35, unit: 'kg'},
    {id: 5, name: 'Flour', stock: 22, unit: 'kg'},
    {id: 6, name: 'Sugar', stock: 8, unit: 'kg'},
  ]);
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(1)}>
          <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 2 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(2)}>
          <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItem data={data} />}
      {view === 1 && <AllItem data={data.filter(item => item.stock < 20)} />}
      {view === 2 && <CreateScreen data={data} setdata={setdata} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
    paddingTop: '10%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: '5%',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: '4%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#72C37A',
  },
  btnText: {
    color: 'green',
    fontSize: 16,
  },
});
