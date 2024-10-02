import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

const RootLayout = () => {

    

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">RootLayout</Text>
      <Link href="/profile">Goto Profile</Link>
    </View>
  );
};

export default RootLayout;

