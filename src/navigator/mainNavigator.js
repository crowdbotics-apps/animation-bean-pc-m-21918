import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps185342Navigator from '../features/Maps185342/navigator';
import Additem185341Navigator from '../features/Additem185341/navigator';
import Maps185337Navigator from '../features/Maps185337/navigator';
import UserProfile185333Navigator from '../features/UserProfile185333/navigator';
import BlankScreen13160230Navigator from '../features/BlankScreen13160230/navigator';
import Settings160124Navigator from '../features/Settings160124/navigator';
import UserProfile160117Navigator from '../features/UserProfile160117/navigator';
import Settings160116Navigator from '../features/Settings160116/navigator';
import Settings160114Navigator from '../features/Settings160114/navigator';
import SignIn2160112Navigator from '../features/SignIn2160112/navigator';
import BlankScreen0160109Navigator from '../features/BlankScreen0160109/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps185342: { screen: Maps185342Navigator },
Additem185341: { screen: Additem185341Navigator },
Maps185337: { screen: Maps185337Navigator },
UserProfile185333: { screen: UserProfile185333Navigator },
BlankScreen13160230: { screen: BlankScreen13160230Navigator },
Settings160124: { screen: Settings160124Navigator },
UserProfile160117: { screen: UserProfile160117Navigator },
Settings160116: { screen: Settings160116Navigator },
Settings160114: { screen: Settings160114Navigator },
SignIn2160112: { screen: SignIn2160112Navigator },
BlankScreen0160109: { screen: BlankScreen0160109Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
