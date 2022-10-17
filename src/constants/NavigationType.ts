import { StackNavigationProp } from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp, NavigatorScreenParams
} from '@react-navigation/native'
import { ImageSourcePropType } from 'react-native'

export type RootStackParamList = {
  Home: undefined
  CardDetails: {
    label: String
    imgUrl: ImageSourcePropType
    price: number
    calories: number
    description: String
  }
}

export type TabParamList = {
  Main: NavigatorScreenParams<RootStackParamList>
  Menu: undefined
  Map: undefined
  Profile: undefined
}

export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Main'>,
  StackNavigationProp<RootStackParamList>
>

