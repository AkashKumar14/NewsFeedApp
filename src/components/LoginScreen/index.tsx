import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StackParamList = {
  Login: undefined;
  NewsFeed: undefined;
  Likes: { feedId: number };
};

type LoginScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

const LoginScreen = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === 'u' && password === 'p') {
      try {
        await AsyncStorage.setItem('userToken', 'user-auth-token');
        navigation.replace('NewsFeed');
      } catch (error) {
        console.error('Error saving user session:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FeedsRead</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
