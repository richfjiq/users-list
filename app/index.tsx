import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { Link } from 'expo-router';

const Home: FC = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href={'/user/1'}>link</Link>
    </View>
  );
};

export default Home;
