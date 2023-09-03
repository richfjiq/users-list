import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: 'Users' }} />
      <Stack.Screen name="user/[userId]" options={{ headerTitle: 'User' }} />
    </Stack>
  );
};

export default StackLayout;
