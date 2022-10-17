import { ThemeProvider, useTheme } from '@shopify/restyle'
import theme, { Theme } from './src/themes'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CardDetails, Home, Map, Menu, Profile } from './src/screens'
import {
  BottomTabBarProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { RootStackParamList, TabParamList } from './src/constants'
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native'
import images from './assets'
import { Box } from './src/components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  btnStyle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 25, 0.3)'
  },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F0F2F3',
    paddingTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  }
})
const RootStack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name={'Home'}
        component={Home}
      />
      <RootStack.Screen
        name={'CardDetails'}
        component={CardDetails}
        options={{
          header: ({ navigation, options }) => {
            return (
              <View style={options.headerStyle}>
                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={navigation.goBack}
                >
                  <Image
                    source={images.arrowLeft}
                    style={{ width: 18, height: 18, resizeMode: 'contain' }}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>Details</Text>
                <TouchableOpacity style={styles.btnStyle}>
                  <Image
                    source={images.heart}
                    style={{ width: 18, height: 18, resizeMode: 'contain' }}
                  />
                </TouchableOpacity>
              </View>
            )
          },
          headerStyle: styles.header
        }}
      />
    </RootStack.Navigator>
  )
}

const BottomTabBar = (props: BottomTabBarProps) => {
  return <Box flex={1} backgroundColor={'accent1'}></Box>
}

function TabNavigator() {
  const { colors, spacing } = useTheme<Theme>()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon
          let imgSize = 20

          if (route.name === 'Main') {
            icon = images.home
          } else if (route.name === 'Menu') {
            icon = images.chef
            imgSize = 18
          } else if (route.name === 'Map') {
            icon = images.map
            imgSize = 16
          } else if (route.name === 'Profile') {
            icon = images.user
            imgSize = 22
          }

          return (
            <Image
              source={icon}
              style={{
                width: imgSize,
                height: imgSize,
                resizeMode: 'contain',
                opacity: focused ? 1 : 0.4
              }}
            />
          )
        },
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
        tabBarStyle: {
          height: 65
        },
        tabBarLabelStyle: { marginBottom: spacing.s }
      })}
    >
      <Tab.Screen
        name="Main"
        options={{ tabBarLabel: 'Home' }}
        component={RootStackNavigator}
      />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </ThemeProvider>
)

export default App
