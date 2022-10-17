import { Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Box from './Box'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../themes'
import images from '../../assets'

interface SwitchProps {
  toggled?: boolean
  onPress: () => void
}

const Switch = ({ toggled, onPress }: SwitchProps) => {
  const { spacing, colors } = useTheme<Theme>()
  return (
    <TouchableOpacity
      style={{
        width: spacing.l * 2,
        height: spacing.l,
        borderRadius: spacing.l,
        borderWidth: 1,
        borderColor: toggled ? colors.primary : colors.grey
      }}
      {...{ onPress }}
    >
      <Box
        position={'absolute'}
        width={spacing.l - 6}
        height={spacing.l - 6}
        borderRadius="l"
        bg={toggled ? 'primary' : 'white'}
        left={toggled ? spacing.l * 2 - spacing.l : 2}
        top={2}
        bottom={2}
      />
    </TouchableOpacity>
  )
}

const Location = () => {
  const { spacing, colors } = useTheme<Theme>()
  const [toggled, setToggled] = useState(false)

  return (
    <Box
      width={'100%'}
      height={100}
      backgroundColor="black"
      mb={'l'}
      borderRadius="xl"
      paddingHorizontal={'m'}
      flexDirection="row"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box
        width={spacing.xl}
        height={spacing.xl}
        borderRadius={'xl'}
        bg={'accent1'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image source={images.pin} style={{ width: 18, height: 18 }} />
      </Box>
      <Box>
        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white }}>
          Share your location
        </Text>
        <Text style={{ fontSize: 12, fontWeight: '400', color: colors.grey }}>
          Your local Mcdonald's may have{'\n'} something special
        </Text>
      </Box>
      <Switch onPress={() => setToggled(!toggled)} {...{ toggled }} />
    </Box>
  )
}

export default Location
