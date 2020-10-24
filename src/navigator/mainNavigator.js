import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings160114Navigator from '../features/Settings160114/navigator';
import SignIn2160112Navigator from '../features/SignIn2160112/navigator';
import BlankScreen0160109Navigator from '../features/BlankScreen0160109/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
