import { Image, Text } from 'react-native'
import React from 'react'
import { Box } from '../components'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../constants'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../themes'
import images from '../../assets'
import { StatusBar } from 'expo-status-bar'

type CardDetailsRouteProp = RouteProp<RootStackParamList, 'CardDetails'>

const CardDetails = () => {
  const { spacing, colors } = useTheme<Theme>()
  const { params } = useRoute<CardDetailsRouteProp>()
  return (
    <>
      <StatusBar style="dark" />
      <Box paddingTop={'xl'} bg={'mainBackground'} flex={1}>
        <Box height={200} justifyContent={'center'} alignItems={'center'}>
          <Image
            source={params.imgUrl}
            style={{ width: 200, height: 200, resizeMode: 'contain' }}
          />
        </Box>
        <Box
          paddingHorizontal={'m'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box>
            <Text
              style={{ fontSize: 18, fontWeight: '600', color: colors.black }}
            >
              {params.label}
            </Text>
          </Box>
          <Box
            paddingHorizontal={'m'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <Image
              source={images.star}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <Text style={{ color: colors.grey }}>{'  4.8'}</Text>
          </Box>
        </Box>
        <Box padding={'m'}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: colors.black,
              marginBottom: spacing.m
            }}
          >
            About
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              color: colors.grey,
              marginBottom: spacing.l,
              textAlign: 'justify'
            }}
          >
            {params.description}
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default CardDetails
