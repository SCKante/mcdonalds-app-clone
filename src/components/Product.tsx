import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'
import Box from './Box'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../themes'
import images from '../../assets'

interface ProductProps {
  label: String
  description?: String
  imgUrl: ImageSourcePropType
  price: number
  width: number | string
  marginRight: number
  calories: number
}

const Product = ({
  imgUrl,
  label,
  price,
  width,
  marginRight,
  calories
}: ProductProps) => {
  const { spacing, colors } = useTheme<Theme>()
  return (
    <TouchableOpacity
      style={{
        width,
        padding: spacing.m,
        borderWidth: 1,
        borderColor: colors.grey,
        marginRight,
        borderRadius: spacing.l
      }}
    >
      <Box flex={1} height={50}>
        <Image
          source={imgUrl}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </Box>
      <Box flex={1} paddingTop={'m'}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.black,
            marginBottom: 4
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: colors.grey,
            marginBottom: spacing.s
          }}
        >
          {calories} kcal
        </Text>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text
            style={{ fontSize: 16, fontWeight: '600', color: colors.black }}
          >
            ${price}
          </Text>
          <TouchableOpacity>
            <Box
              width={30}
              height={30}
              borderRadius={'s'}
              justifyContent={'center'}
              alignItems={'center'}
              bg={'primary'}
            >
              <Image
                source={images.plus}
                style={{ width: 18, height: 18, resizeMode: 'contain' }}
              />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default Product
