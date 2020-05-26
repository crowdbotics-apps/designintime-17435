import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile52953Navigator from '../features/UserProfile52953/navigator';
import Tutorial52952Navigator from '../features/Tutorial52952/navigator';
import NotificationList52924Navigator from '../features/NotificationList52924/navigator';
import Settings52923Navigator from '../features/Settings52923/navigator';
import Settings52915Navigator from '../features/Settings52915/navigator';
import UserProfile52913Navigator from '../features/UserProfile52913/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile52953: { screen: UserProfile52953Navigator },
Tutorial52952: { screen: Tutorial52952Navigator },
NotificationList52924: { screen: NotificationList52924Navigator },
Settings52923: { screen: Settings52923Navigator },
Settings52915: { screen: Settings52915Navigator },
UserProfile52913: { screen: UserProfile52913Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
