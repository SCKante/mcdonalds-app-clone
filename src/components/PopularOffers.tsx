import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import images from '../../assets'
import Product from './Product'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../themes'
import { useNavigation } from '@react-navigation/native'
import { HomeNavigationProp } from '../constants'

const DATA = [
  {
    id: 1,
    label: 'Homestyle Crispy Chicken Honey Mustard',
    description:
      'The genuine temptation. Sweet and spicy honey-mustard sauce meets homemade chicken. Juicy and crispy chicken breast topped with crispy lettuce and juicy onions.',
    imgUrl: images.beefBurger,
    price: 6.99,
    calories: 728
  },
  {
    id: 2,
    label: 'McFlurry® Oreo®',
    description:
      'McFlurry® Oreo®. L’authentique American McFlurry®: quand une glace onctueuse rencontre le légendaire biscuit Oreo®. Disponible en deux tailles: Regular et Maxi',
    imgUrl: images.milkShake,
    price: 2.39,
    calories: 630
  },
  {
    id: 3,
    label: 'The Grilled Chicken \nCaesar Salad',
    description:
      'Our grilled chicken classic revisited. Tender pieces of chicken placed on a bed of salad, tomato rings and delicious shavings of cheese, all served with our new salad dressing. Let yourself be tempted by its lightness.',
    imgUrl: images.caesarSalad,
    price: 10.99,
    calories: 550
  },
  {
    id: 4,
    label: 'Egg & Cheese McMuffin®',
    description:
      'Maximum taste for small appetites. The snack for the munchies: a perfectly prepared egg, placed on strong melted cheese in a delicious muffin. Here we go again!',
    imgUrl: images.eggBurger,
    price: 10.99,
    calories: 1199
  }
]

const { width } = Dimensions.get('screen')

const PopularOffers = () => {
  const navigation = useNavigation<HomeNavigationProp>()
  const { spacing } = useTheme<Theme>()
  const ProductWidth = width / 2 - spacing.l * 1.2
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={ProductWidth}
    >
      {DATA.map((offer, index) => {
        return (
          <Product
            key={index}
            imgUrl={offer.imgUrl}
            label={offer.label}
            price={offer.price}
            description={offer.description}
            width={ProductWidth}
            marginRight={index == DATA.length - 1 ? spacing.null : spacing.s}
            calories={offer.calories}
            onPress={() => {
              navigation.navigate('CardDetails', {
                label: offer.label,
                imgUrl: offer.imgUrl,
                description: offer.description,
                price: offer.price,
                calories: offer.calories
              })
            }}
          />
        )
      })}
    </ScrollView>
  )
}

export default PopularOffers
