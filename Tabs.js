import * as React from 'react';
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
function Tabs({screenName}) {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title={`Go to ${screenName}`}
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}
export default Tabs;