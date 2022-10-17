import {
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native'
import React from 'react'
import {
  Box,
  CarouselCards,
  CouponList,
  Location,
  PopularOffers
} from '../components'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../themes'
import images from '../../assets'
import { useNavigation } from '@react-navigation/native'

//Header bar
function Header() {
  return (
    <Box
      flex={1}
      paddingVertical={'m'}
      flexDirection="row"
      justifyContent={'space-between'}
      alignItems="center"
    >
      <Box flex={1} />
      <Box flex={1} justifyContent="center" alignItems={'center'}>
        <Image
          source={images.logo}
          style={{
            width: 54,
            height: 54,
            resizeMode: 'contain'
          }}
        />
      </Box>
      <Box flex={1} justifyContent="center" alignItems={'flex-end'}>
        <TouchableOpacity
          style={{
            width: 26,
            height: 26,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={images.basket}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </Box>
    </Box>
  )
}

const Home = () => {
  const { spacing, colors } = useTheme<Theme>()
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: spacing.m }}>
      <StatusBar style="dark" />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: spacing.m,
          paddingBottom: 100
        }}
      >
        <Header />
        <Location />
        <CarouselCards />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: colors.black,
            marginBottom: spacing.m
          }}
        >
          Coupons
        </Text>
        <CouponList />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: colors.black,
            marginVertical: spacing.m
          }}
        >
          Popular Offers
        </Text>
        <PopularOffers />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
