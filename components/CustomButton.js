import React from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native'

import { COLORS } from '../constants'

const CustomButton = ({ isPrimaryButton, isSecondaryButton, label, containerStyle, labelStyle, onPress }) => {

  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
        borderColor: isSecondaryButton ? COLORS.primary : COLORS.transparent,
        borderWidth: isSecondaryButton ? 1 : 0,
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Text style={{
        color: isPrimaryButton ? COLORS.white : COLORS.primary,
        ...labelStyle
      }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton