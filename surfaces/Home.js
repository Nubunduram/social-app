import "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed } from './Feed';
import { Profile } from './Profile';
import { Favorites } from './Favorites';
import { AddPost } from './AddPost';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { colors } from "../styles/colors";
// import { ConversationsBase } from "./ConversationsBase";

const Tab = createBottomTabNavigator();

const ConversationsBase = () => <View style={{ flex: 1 }} />

const icons = {
    Feed: ["home", "home-outline"],
    Conversations: ["chatbox", "chatbox-outline"],
    Favorites: ["heart", "heart-outline"],
    Profile: ["person-circle", "person-circle-outline"],
};


export const Home = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const [activeIcon, inactiveIcon] = icons[route.name] || [];
                    return (
                        <Ionicons
                            name={focused ? activeIcon : inactiveIcon}
                            size={size}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: "#25A080",
                tabBarInactiveTintColor: "#000000",
                headerTransparent: true,
                headerTitleAlign: 'right',
                headerTitleStyle: {
                    paddingTop: 140,
                    paddingBottom: 40,
                    textAlign: 'left',
                    fontWeight: 'bold'
                }
            })
            }
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen
                name='ConversationsMain'
                component={ConversationsBase}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Ionicons name='checkbox-outline' color='#000' size={size} />
                    )
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('ConversationsNav')
                    }
                })}
            />
            <Tab.Screen
                name='AddPost'
                component={AddPost}
                options={{
                    tabBarIcon: ({ size }) => (
                        <View
                            style={{ marginTop: -30 }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: "#000",
                                    padding: 30,
                                    bottom: -10,
                                    left: -13,
                                    borderRadius: 23,
                                    transform: [{ rotate: "-45deg" }],
                                    shadowColor: '#00',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 4,
                                }}
                            />
                            <Ionicons name='add-circle-outline' color='#fff' size={36} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Favorites' component={Favorites} />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }} />
        </Tab.Navigator >
    )
}
