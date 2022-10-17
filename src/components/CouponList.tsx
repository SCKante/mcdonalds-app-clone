import {
  Text,
  Dimensions,
  ImageSourcePropType,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import Box from './Box'
import { Theme } from '../themes'
import { useTheme } from '@shopify/restyle'
import images from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { HomeNavigationProp } from '../constants'

const DATA = [
  {
    id: 1,
    label: 'Homestyle Crispy Chicken Honey Mustard',
    description:
      'The genuine temptation. Sweet and spicy honey-mustard sauce meets homemade chicken. Juicy and crispy chicken breast topped with crispy lettuce and juicy onions.',
    releasedDate: '10:30 - 05:00',
    imgUrl: images.beefBurger,
    price: 6.99,
    calories: 728
  },
  {
    id: 2,
    label: 'McFlurry® Oreo®',
    description:
      'McFlurry® Oreo®. L’authentique American McFlurry®: quand une glace onctueuse rencontre le légendaire biscuit Oreo®. Disponible en deux tailles: Regular et Maxi',
    releasedDate: '10:30 - 05:00',
    imgUrl: images.milkShake,
    price: 2.39,
    calories: 550
  },
  {
    id: 3,
    label: 'The Grilled Chicken \nCaesar Salad',
    description:
      'Our grilled chicken classic revisited. Tender pieces of chicken placed on a bed of salad, tomato rings and delicious shavings of cheese, all served with our new salad dressing. Let yourself be tempted by its lightness.',
    releasedDate: '10:30 - 05:00',
    imgUrl: images.caesarSalad,
    price: 10.99,
    calories: 630
  }
]
const { width: WIDTH } = Dimensions.get('screen')

interface CouponProps {
  width?: number
  last?: boolean
  label: String
  description?: String
  imgUrl: ImageSourcePropType
  releasedDate: String
  price: number
  onPress: () => void
}

const Coupon = ({
  width,
  last,
  label,
  imgUrl,
  price,
  releasedDate,
  onPress
}: CouponProps) => {
  const { spacing, colors } = useTheme<Theme>()
  return (
    <TouchableOpacity {...{ onPress }}>
      <Box
        {...{ width }}
        height={125}
        bg={'lightgrey'}
        borderRadius="l"
        style={{ marginHorizontal: 4 }}
        flexDirection="row-reverse"
        overflow={'hidden'}
      >
        <Box
          flex={1}
          justifyContent="center"
          alignItems={'flex-start'}
          paddingVertical="s"
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 24,
              marginBottom: spacing.s,
              color: colors.black
            }}
          >
            {label}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              lineHeight: 26,
              marginBottom: spacing.s,
              color: colors.black
            }}
          >
            ${price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 18,
              marginBottom: spacing.s,
              color: colors.grey
            }}
            numberOfLines={2}
          >
            {releasedDate}
          </Text>
        </Box>
        <Box
          justifyContent="center"
          alignItems={'center'}
          paddingHorizontal="s"
        >
          <Image
            source={imgUrl}
            style={{ width: 80, height: 80, resizeMode: 'contain' }}
          />
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

const CouponList = () => {
  const navigation = useNavigation<HomeNavigationProp>()
  const { spacing } = useTheme<Theme>()
  const COUPON_WIDTH = WIDTH - spacing.xl
  return (
    <Box flex={1}>
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        snapToInterval={COUPON_WIDTH + spacing.s}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        bounces={false}
      >
        {DATA.map((item, index) => {
          return (
            <Coupon
              key={item.id}
              label={item.label}
              description={item.description}
              imgUrl={item.imgUrl}
              width={COUPON_WIDTH}
              last={index == DATA.length - 1}
              releasedDate={item.releasedDate}
              price={item.price}
              onPress={() => {
                navigation.navigate('CardDetails', {
                  label: item.label,
                  imgUrl: item.imgUrl,
                  description: item.description,
                  price: item.price,
                  calories: item.calories
                })
              }}
            />
          )
        })}
      </ScrollView>
    </Box>
  )
}

export default CouponList
