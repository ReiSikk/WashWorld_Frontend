import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from "native-base";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import LocationsScreen from './LocationsScreen';
import RewardsScreen from './RewardsScreen';
import AccountScreen from './AccountScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import HomeSubscriptionsScreen from './subscriptionFlow/HomeSubscriptionsScreen';
import PlanOverview from './subscriptionFlow/PlanOverview';
import EnterLicensePlate from './subscriptionFlow/EnterLicensePlate';
import OrderSummary from './subscriptionFlow/OrderSummary';
import SelectPaymentMethod from './subscriptionFlow/SelectPaymentMethod';

//define route params types
export type RootStackParamList = {
    // specifying undefined means that the route doesn't have params
    SignupScreen: undefined;
    LoginScreen: undefined;
    HomeScreen: { memberID: number };
    AccountScreen: { memberID: number };
    LocationsScreen: undefined;
    RewardsScreen: { memberID: number };
    WelcomeScreen: undefined;
    HomeSubscriptionsScreen: undefined;
    PlanOverview: undefined;
    EnterLicensePlate: undefined;
    OrderSummary: undefined;
    SelectPaymentMethod: undefined;
    
  };
  
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="HomeSubscriptionsScreen" component={HomeSubscriptionsScreen} />
          <Stack.Screen name="PlanOverview" component={PlanOverview} />
          <Stack.Screen name="EnterLicensePlate" component={EnterLicensePlate} />
          <Stack.Screen name="OrderSummary" component={OrderSummary} />
          <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethod} />
        </Stack.Navigator>
    )
  }


const MainNavigation = () => {
    //TODO: implement redux
    //const dispatch = useDispatch<AppDispatch>();
    const dispatch = () => {};
    //TODO: get user state from redux
    //const isSignedIn = useSelector((state: RootState) => state.user.token);
    const isSignedIn = true;
  
      return (
          <NavigationContainer>
          { isSignedIn ? (
              <>
                  <Tab.Navigator
                   screenOptions={({ navigation }) => ({
                    tabBarActiveTintColor: '#1A1A1A',
                    tabBarInactiveTintColor: '#666666',
                      headerRight: () => (
                       /*  <IconButton colorScheme="indigo" style={{marginRight: 10}} key={"outline"} 
                          onPress={() => dispatch(logout())} variant={"outline"} _icon={{
                            as: AntDesign,
                            name: "logout"
                          }} /> */
                          
                          <IconButton colorScheme="indigo" style={{marginRight: 10}} key={"outline"} 
                           variant={"outline"} _icon={{
                            as: AntDesign,
                            name: "logout"
                          }} />
                      )})}>
                      <Tab.Screen
                       name="Home"
                       component={HomeStackNavigator}  
                       options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="home-outline" size={24} color="#666666" />
                        ),
                        }}  />
                      <Tab.Screen
                       name="Locations" 
                       component={LocationsScreen}
                       options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="location-outline" size={24} color="#666666" />
                        ),
                        }} 
                        />
                      <Tab.Screen 
                      name="Rewards" 
                      component={RewardsScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="trophy-outline" size={24} color="#666666" />
                        ),
                        }} 
                       />
                      <Tab.Screen 
                      name="Account" 
                      component={AccountScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="body-outline" size={24} color="#666666" />
                        ),
                        }} 
                       />
                  </Tab.Navigator>
              </>
            ) : (
              <>
                <Stack.Navigator>
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                </Stack.Navigator>
              </>
            )
          }
        </NavigationContainer>
      );
  };

export default MainNavigation