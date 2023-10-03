import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

const FeedItem = ({ item, navigation }:any) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleLikesPress = () => {
    navigation.navigate('Likes', { feedId: item.id });
  };

  return (
    <View>
      <Text>{item.author}</Text>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Text>{item.description}</Text>
      <Button
        title={liked ? 'Unlike' : 'Like'}
        onPress={handleLike}
      />
      <Button title={`Likes: ${item.likes}`} onPress={handleLikesPress} />
    </View>
  );
};

export default FeedItem;
