export interface FeedItemData {
    id: number;
    author: string;
    image: string;
    description: string;
    likes: number;
  }
  
  const mockData: FeedItemData[] = [
    {
      id: 1,
      author: 'InstaExplorer21',
      image: 'https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Lost in the beauty of nature 🌿 #Wanderlust',
      likes: 42,
    },
    {
      id: 2,
      author: 'PhotoFanatic34',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBbyyYqXwRauW3AW50Y1iBnM8DBE8IJw1ZQ&usqp=CAU',
      description: 'Capturing moments, one click at a time 📷',
      likes: 23,
    },
    {
      id: 3,
      author: 'NatureLover88',
      image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667',
      description: 'Embracing the serenity of the great outdoors 🌄',
      likes: 10,
    },
    {
      id: 4,
      author: 'TravelAdventurer',
      image: 'https://www.blizzard-tecnica.com/assets/images/story-explore/story-explore-12@2x.jpg',
      description: 'Exploring new horizons and making memories ✈️',
      likes: 15,
    },
    {
      id: 5,
      author: 'FoodieDelight67',
      image: 'https://hips.hearstapps.com/hmg-prod/images/shondaland-foodseries-foodie-1595984368.png?crop=1.00xw:0.502xh;0,0.240xh&resize=1200:*',
      description: 'Savoring every bite, one dish at a time 🍔',
      likes: 30,
    },
    {
      id: 6,
      author: 'FashionistaChic',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KNZ6x0bFpaaNcoOoOiQFb_9cAZ8oPW01Zg&usqp=CAU',
      description: 'Fashion is my passion! 👗✨',
      likes: 7,
    },
    {
      id: 7,
      author: 'FitnessJunkie101',
      image: 'https://tropeaka.com/cdn/shop/articles/main_image_d517c79f-4ec7-4946-bb5e-db7e80623e85_1080x.jpg?v=1571697737',
      description: 'Sweat, smile, repeat! 💪😅',
      likes: 18,
    },
    {
      id: 8,
      author: 'MusicManiac22',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsKW-mhN8cnx8FzGT6j9EsBjM90Ml1-4UNQ&usqp=CAU',
      description: 'Lost in the world of melodies 🎶🎵',
      likes: 22,
    },
    {
      id: 9,
      author: 'ArtisticSoul55',
      image: 'https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg',
      description: 'Expressing creativity through art 🎨✨',
      likes: 3,
    },
    {
      id: 10,
      author: 'GamingGuru77',
      image: 'https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/9%20Ways%20to%20Boost%20Your%20Gaming%20Rig/How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg?width=1200&name=How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg',
      description: 'Leveling up and conquering virtual worlds 🎮',
      likes: 12,
    },
    {
      id: 11,
      author: 'PetLoverForever',
      image: 'https://media.wired.com/photos/5ed06ca9fbf7b2147038a8a9/4:3/w_2132,h_1599,c_limit/Gear-New-Pet-1168772154.jpg',
      description: 'Paws and kisses from my furry friend 🐾❤️',
      likes: 9,
    },
    {
      id: 12,
      author: 'SunsetSeeker44',
      image: 'https://www.ambong-ambong.com/wp-content/uploads/2023/03/istockphoto-1172427455-612x612-1.jpeg',
      description: 'Chasing sunsets, finding inner peace 🌅',
      likes: 5,
    },
    {
      id: 13,
      author: 'BookwormUniverse',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*S81O15rjKfG-BFdnNC6-GQ.jpeg',
      description: 'Getting lost in the pages of a good book 📚📖',
      likes: 17,
    },
    {
      id: 14,
      author: 'TechGeekWizard',
      image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg',
      description: 'Exploring the latest tech innovations 📱💻',
      likes: 20,
    },
    {
      id: 15,
      author: 'BeautyEnthusiast',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL8bIq3MI6AuJky9PSTp4EKdAlqvUFNQDpw&usqp=CAU',
      description: 'All things beauty, inside and out 💄🌟',
      likes: 8,
    },
    {
      id: 16,
      author: 'CoffeeAddict23',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAUSsje1Ad0oCNECbb_2F7HGh_lCf4e3flQ&usqp=CAU',
      description: 'Life begins after coffee ☕️❤️',
      likes: 14,
    },
    {
      id: 17,
      author: 'DIYCraftMaster',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TRaBD7FihkS-8cPc2zVTVemriAVTjdsbbw&usqp=CAU',
      description: 'Crafting my way to creativity 🧵🔨',
      likes: 25,
    },
    {
      id: 18,
      author: 'HomeCookedMeals',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yh7HwbtgO8_d4dW200zY3pap_F8Y8wYox-VS6NrCkCgb6aHvGnasjZCDsIiqVVLoaoI&usqp=CAU',
      description: 'Homemade goodness, one recipe at a time 🍳🍝',
      likes: 11,
    },
    {
      id: 19,
      author: 'VintageCollector',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOJrroDNw9EsZa_MFGCI32oTXAhM2LnrOVg&usqp=CAU',
      description: 'Preserving the past, one treasure at a time 🕰️📻',
      likes: 33,
    },
    {
      id: 20,
      author: 'YogaLifestyle101',
      image: 'https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2020/11/Commiting-to-a-yoga-lifestyle.jpeg',
      description: 'Finding balance and peace on the mat 🧘‍♀️🕉️',
      likes: 16,
    },
  ];
  
  
  
  export const getFeeds = async (): Promise<FeedItemData[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockData;
  };
  
  export const likeFeed = async (feedId: number, isLiked: boolean): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    const feedIndex = mockData.findIndex((item) => item.id === feedId);
    if (feedIndex !== -1) {
      mockData[feedIndex].likes -= isLiked ? -1 : 1;
      return true;
    }
    return false;
  };
  
  export const getLikedUsers = async (feedId: number): Promise<string[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const feed = mockData.find((item) => item.id === feedId);
    return feed ? generateRandomUsernames(feed.likes) : [];
  };
  
  const generateRandomUsernames = (count: number): string[] => {
    const usernames: string[] = [];
    for (let i = 1; i <= count; i++) {
      usernames.push(`User ${i}`);
    }
    return usernames;
  };