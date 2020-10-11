import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import Application from '../screens/Application';

const Navigator = createSwitchNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        Application: {
            screen: Application
        }
    },
    {
        initialRouteName: 'Splash'
    }
);

const SwitchNavigator = createAppContainer(Navigator);

export default SwitchNavigator;
