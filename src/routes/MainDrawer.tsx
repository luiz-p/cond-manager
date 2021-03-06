import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColorScheme} from 'react-native';

import themes from '../themes';
import CustomDrawer from '../components/CustomDrawer';

import WallScreen from '../screens/WallScreen';
import DocumentScreen from '../screens/DocumentScreen';
import BilletScreen from '../screens/BilletScreen';
import WarningScreen from '../screens/WarningScreen';
import WarningAddScreen from '../screens/WarningAddScreen';
import ReservationScreen from '../screens/ReservationScreen';
import ReservationAddScreen from '../screens/ReservationAddScreen';
import MyReservationsScreen from '../screens/MyReservationsScreen';
import FoundAndLostScreen from '../screens/FoundAndLostScreen';
import FoundAndLostAddScreen from '../screens/FoundAndLostAddScreen';

const Drawer = createDrawerNavigator();

const MainDrawer: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.text,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="WallScreen"
        component={WallScreen}
        options={{title: 'Mural de Avisos'}}
      />

      <Drawer.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{title: 'Documentos do Condomínio'}}
      />

      <Drawer.Screen
        name="BilletScreen"
        component={BilletScreen}
        options={{title: 'Boletos'}}
      />

      <Drawer.Screen
        name="WarningScreen"
        component={WarningScreen}
        options={{title: 'Livro de Ocorrências'}}
      />

      <Drawer.Screen
        name="WarningAddScreen"
        component={WarningAddScreen}
        options={{title: 'Adicionar uma Ocorrência'}}
      />

      <Drawer.Screen
        name="ReservationScreen"
        component={ReservationScreen}
        options={{title: 'Reservas Disponíveis'}}
      />

      <Drawer.Screen
        name="ReservationAddScreen"
        component={ReservationAddScreen}
        options={{title: 'Reservar'}}
      />

      <Drawer.Screen
        name="MyReservationsScreen"
        component={MyReservationsScreen}
        options={{title: 'Minhas Reservas'}}
      />

      <Drawer.Screen
        name="FoundAndLostScreen"
        component={FoundAndLostScreen}
        options={{title: 'Achados e Perdidos'}}
      />

      <Drawer.Screen
        name="FoundAndLostAddScreen"
        component={FoundAndLostAddScreen}
        options={{title: 'Adicionar item Perdido'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
