import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedItemData, getFeeds, likeFeed } from '../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

type StackParamList = {
  Login: undefined;
  NewsFeed: undefined;
  Likes: { feedId: number };
};

type NewsFeedScreenNavigationProp = StackNavigationProp<StackParamList, 'NewsFeed'>;

interface NewsFeedScreenProps {
  navigation: NewsFeedScreenNavigationProp;
}

const NewsFeedScreen: React.FC<NewsFeedScreenProps> = ({ navigation }) => {
  const [feeds, setFeeds] = useState<FeedItemData[]>([]);
  const [loading, setLoading] = useState(false);
  const [likedFeeds, setLikedFeeds] = useState<Set<number>>(new Set());

  useEffect(() => {
    checkUserSession();
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const newFeeds: FeedItemData[] = await getFeeds();
      setFeeds([...feeds, ...newFeeds]);
    } catch (error) {
      console.error('Error fetching feeds', error);
    } finally {
      setLoading(false);
    }
  };

  const checkUserSession = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (!userToken) {
        navigation.replace('Login');
      }
    } catch (error) {
      console.error('Error checking user session:', error);
    }
  };

  const handleLike = async (feedId: number) => {
    try {
      const success = await likeFeed(feedId, !likedFeeds.has(feedId));

      if (success) {
        const updatedLikedFeeds = new Set(likedFeeds);

        if (likedFeeds.has(feedId)) {
          updatedLikedFeeds.delete(feedId); 
        } else {
          updatedLikedFeeds.add(feedId);
        }
        setLikedFeeds(updatedLikedFeeds);
      } else {
        console.error('Failed to like/unlike feed');
      }
    } catch (error) {
      console.error('Error liking/unliking feed', error);
    }
  };

  const handleLikesPress = (feedId: number) => {
    navigation.navigate('Likes', { feedId });
  };

  const renderFeedItem = ({ item }: { item: FeedItemData }) => (
    <View style={styles.feedItem}>
      <Text style={styles.author}>{item.author}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
        <Text>{likedFeeds.has(item.id) ? '🖤' : '❤️'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLikesPress(item.id)}>
        <View style={styles.likesContainer}>
          <Text style={styles.likesText}>Likes:</Text>
          <Text style={styles.likesText}>{item.likes}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./profilee.jpg')} style={styles.userAvatar} />
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              navigation.replace('Login');
            } catch (error) {
              console.error('Error clearing user session:', error);
            }
          }}
        >
          <Image source={require('./logout.png')} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={feeds}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchFeeds}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default NewsFeedScreen;
