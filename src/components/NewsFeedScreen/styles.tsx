import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    backgroundColor: ''
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  logoutButton: {
    //keeping it for future changes.
  },
  feedItem: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#e5eaf5'
  },
  author: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    fontSize: 14,
    marginVertical: 8,
    color: 'black'
  },
  likeButton: {
    backgroundColor: 'white', 
    borderRadius: 15, 
    paddingVertical: 6, 
    paddingHorizontal: 5, 
    marginVertical: 10,
    width: 40,
    alignItems: 'center'
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 4,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default styles;
