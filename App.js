import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import LabelBottomNavigation from './components/LabelBottomNavigation'
import TodoApp from './components/TodoApp'
import DetailsScreen from './screens/DetailsScreen'
// import MarketList from './screens/MarketList'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />

      <Button
        title="Go to Todo-App"
        onPress={() => navigation.navigate("TodoApp")}
      />
      {/* <Button
        title="Go to MarketList"
        onPress={() => navigation.navigate("MarketList")}
      /> */}
      </View>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <Stack.Screen name="LabelBottomNavigation" component={LabelBottomNavigation} /> */}
        <Stack.Screen name="TodoApp" component={TodoApp} />
        {/* <Stack.Screen name="MarketList" component={MarketList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
    }
});

export default App;
