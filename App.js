import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image } from 'react-native';
import {useState, useEffect} from 'react'
export default function App() {

  const [img, setImg] = useState(img)
  const getCat = () => {
    fetch('https://aws.random.cat/meow')
      .then((res) => {
        return res.json()
      }).then((data) => {
        setImg(data.file)
        console.log(img);
      })
  }

  useEffect(() => {
    getCat()
  },[])
  return (
    <View style={styles.container}>
      <Image
        source={{uri: img}}
        style={styles.img}
       />
      <Button
        onPress={getCat}
        title="Nouveau Chat"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '50%',
    marginBottom: '5%',
  }
});
