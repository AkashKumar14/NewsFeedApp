import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import NewsFeedScreen from './src/components/NewsFeedScreen';
import LikesScreen from './src/components/LikesScreen';

// Define the Stack Navigator
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log in' }}/>
        <Stack.Screen name="NewsFeed" component={NewsFeedScreen} options={{ title: 'Feeds' }} />
        <Stack.Screen name="Likes" component={LikesScreen} options={{ title: 'Likes' }} />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
