import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Alert,Button} from 'react-native';
import { Card } from 'react-native-paper';
const Home = (props,{navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.43.42:4000')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <View>
                <Card
                 onPress={()=>props.navigation.navigate('Profile',{item})}>
              <Text>{item.title}</Text>
             
              </Card>
          
               </View>
          )}
        />
      )}
          <Button
        title="Add New Book"
        color="#f194ff"
        onPress={()=>props.navigation.navigate('Create')}></Button>
    </View>
  );
};
export default Home