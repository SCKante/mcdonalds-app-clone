import {
  Text,
  Dimensions,
  ImageSourcePropType,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import Box from './Box'
import { Theme } from '../themes'
import { useTheme } from '@shopify/restyle'
import images from '../../assets'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

const DATA = [
  {
    id: 1,
    label: 'Everything you \nwant from a burger',
    description: 'Checkout all the available Maestro Burger Variants',
    imgUrl: images.eggBurger
  },
  {
    id: 2,
    label: 'Everything you \nwant from a dessert',
    description: 'Checkout all the available Maestro Burger Variants',
    imgUrl: images.strawberryHit
  },
  {
    id: 3,
    label: 'Everything you \nwant from a chicken',
    description: 'Checkout all the available Maestro Burger Variants',
    imgUrl: images.boxChicken
  }
]
const { width: WIDTH } = Dimensions.get('screen')

interface CardProps {
  width?: number
  last?: boolean
  label: String
  description: String
  imgUrl: ImageSourcePropType
}
interface PaginationProps {
  scrollX: Animated.SharedValue<number>
  CARD_WIDTH: number
}

const Card = ({ width, last, label, description, imgUrl }: CardProps) => {
  const { spacing, colors } = useTheme<Theme>()
  return (
    <TouchableOpacity>
      <Box
        {...{ width }}
        height={125}
        borderWidth={1}
        borderColor={'grey'}
        borderRadius="l"
        marginRight={!last ? 's' : 'null'}
        flexDirection="row"
        overflow={'hidden'}
      >
        <Box
          flex={2}
          justifyContent="center"
          alignItems={'flex-start'}
          paddingLeft="l"
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
            <Text style={{ color: colors.primary }}>#</Text>
            {label}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 18,
              marginBottom: spacing.s,
              color: colors.grey
            }}
          >
            {description}
          </Text>
        </Box>
        <Box flex={1} justifyContent="center" alignItems={'center'}>
          <Image
            source={imgUrl}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

const Pagination = ({ scrollX, CARD_WIDTH }: PaginationProps) => {
  const { spacing, colors } = useTheme<Theme>()
  return (
    <Box
      flex={1}
      height={50}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'row'}
    >
      {DATA.map((_, index) => {
        const rStyle = useAnimatedStyle(() => {
          const inputRange = [
            (index - 1) * CARD_WIDTH,
            CARD_WIDTH * index,
            (index + 1) * CARD_WIDTH
          ]
          const extrapolate = {
            extrapolateLeft: Extrapolate.CLAMP,
            extrapolateRight: Extrapolate.CLAMP
          }
          const width = interpolate(
            scrollX.value,
            inputRange,
            [8, 16, 8],
            extrapolate
          )
          const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.2, 1, 0.2],
            extrapolate
          )
          return {
            width,
            opacity
          }
        })
        return (
          <Animated.View
            key={index}
            style={[
              {
                marginLeft: spacing.s,
                backgroundColor: colors.primary,
                height: 8,
                borderRadius: 8
              },
              rStyle
            ]}
          />
        )
      })}
    </Box>
  )
}

const CarouselCards = () => {
  const { spacing } = useTheme<Theme>()
  const CARD_WIDTH = WIDTH - spacing.xl
  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollX.value = e.contentOffset.x
  })
  return (
    <Box flex={1}>
      <Animated.ScrollView
        style={{ flex: 1 }}
        horizontal
        snapToInterval={CARD_WIDTH + spacing.s}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        bounces={false}
        onScroll={scrollHandler}
      >
        {DATA.map((item, index) => {
          return (
            <Card
              key={item.id}
              label={item.label}
              description={item.description}
              imgUrl={item.imgUrl}
              width={CARD_WIDTH}
              last={index == DATA.length - 1}
            />
          )
        })}
      </Animated.ScrollView>
      <Pagination {...{ scrollX, CARD_WIDTH }} />
    </Box>
  )
}

export default CarouselCards
