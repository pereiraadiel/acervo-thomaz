import React from 'react';
import { Text, View } from "react-native"

const HomePage = () => {
	return (
		<View className='flex-1 items-center bg-gray-700 pt-8 px-4'>
			<Text className='text-white font-bold'>Adiel Pereira</Text>
			<Text className='text-gray-400'>@adiel.dev</Text>
		</View>
	)
}

export default HomePage;