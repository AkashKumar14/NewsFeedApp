import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { likeFeed, FeedItemData } from '../../utils/api';

type StackParamList = {
  Login: undefined;
  NewsFeed: undefined;
  Likes: { feedId: number };
};

type LikesScreenRouteProp = RouteProp<StackParamList, 'Likes'>;
type LikesScreenNavigationProp = StackNavigationProp<StackParamList, 'Likes'>;

interface LikesScreenProps {
  route: LikesScreenRouteProp;
  navigation: LikesScreenNavigationProp;
}

const LikesScreen: React.FC<LikesScreenProps> = ({ route }) => {
  const { feedId } = route.params;
  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  useEffect(() => {
    fetchLikedUsers();
  }, []);

  const generateRandomUsernames = (count: number) => {
    const usernames: string[] = [];
    for (let i = 1; i <= count; i++) {
      const randomName = `User ${Math.floor(Math.random() * 100)}`;
      usernames.push(randomName);
    }
    return usernames;
  };

  const fetchLikedUsers = async () => {
    try {
      const randomUserCount = Math.floor(Math.random() * 20) + 1; 
      const randomUsers = generateRandomUsernames(randomUserCount);
      setLikedUsers(randomUsers);
    } catch (error) {
      console.error('Error fetching liked users', error);
    }
  };

  const renderLikedUser = ({ item }: { item: string }) => (
    <View style={styles.likedUserContainer}>
      <Image source={require('./profilee.jpg')} style={styles.userAvatar} />
      <Text style={styles.userName}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Likes</Text>
      <FlatList
        data={likedUsers}
        renderItem={renderLikedUser}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white'
  },
  likedUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white'
  },
});

export default LikesScreen;
