import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUP from '../screens/signUp';
import myApp from '../screens/myApp';
import optionScreen from '../screens/optionScreen';
import signIn from '../screens/signIn';
import FeedbackScreen from '../screens/FeedbackScreen';

const Navigator = createStackNavigator({
    myApp: {
        screen: myApp
    },
    SignUp: {
        screen: SignUP
    },
    SignIn: {
        screen: signIn
    },
    optionScreen: {
        screen: optionScreen
    },
    FeedbackScreen: {
        screen: FeedbackScreen
    }
}, {
    initialRouteName: 'myApp'
});

const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;