import { Text, View, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';



const RootLayout = () => {


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}></ScrollView>
      <View className="w-full  items-center h-full px-4">

        <Image
          className="w-[130px] h-[84px]"
          source={images.logo}
          resizeMode='contain'
        />
        <Image
          className="max-w-[380px] w-full h-[300px]"
          source={images.cards}
          resizeMode='contain'
        />

        <View>
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities with{' '} <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode='contain'
          />
        </View>
        <Text className="text-sm f-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
          embark on a limitlesss exploration with Aora
        </Text>

        <CustomButton
          title="Continue with Email"
          handlePress={() => {}}
          containerStyles={"w-full mt-7"}
        />
      </View>

    </SafeAreaView>
  );
};

export default RootLayout;

