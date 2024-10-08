import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (title, handlePress, containerStyles, textStyles, isLoading) => {
    return (

        <TouchableOpacity
            onPress={handlePress}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
            ${isLoading ? opacity-50: ''}
            `}>
            <Text className="text-primary font-psemibold text-lg">CustomButton</Text>
        </TouchableOpacity>


    )
}

export default CustomButton