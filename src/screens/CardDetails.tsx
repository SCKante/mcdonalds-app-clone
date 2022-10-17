import { Text } from 'react-native'
import React from 'react'
import { Box } from '../components'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../constants'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../themes'

type CardDetailsRouteProp = RouteProp<RootStackParamList, 'CardDetails'>

const CardDetails = () => {
  const { spacing, colors } = useTheme<Theme>()
  const { params } = useRoute<CardDetailsRouteProp>()
  return (
    <Box paddingTop={'xl'} flex={1}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{params.label}</Text>
    </Box>
  )
}

export default CardDetails
