import { FC } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { useUsers } from '../src/hooks';

const Home: FC = () => {
  useUsers();
  return (
    <View>
      <Text>Home Page</Text>
      <Link href={'/user/1'}>link</Link>
    </View>
  );
};

export default Home;
