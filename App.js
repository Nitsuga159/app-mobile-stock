import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext, useEffect } from 'react';
import IO from './IO';
import User from './models/User';
import { setEnvironmentPaths } from './config';
import { VIEWS } from './env';
import GlobalContextProvider, { GlobalContext } from './context/global';
import logger from './logger';
import Test from './components/Test/Test';
import allViews from './views';
import MenuProvider from './context/Menu';

export default function App() {

  return (
    <GlobalContextProvider>
      <Start />
      <Test />
    </GlobalContextProvider>
  );
}

export function Start() {
  const { globalState: { view }, setGlobalState } = useContext(GlobalContext);

  useEffect(() => {
    try {
      setEnvironmentPaths();
    } catch(e) {
      console.error(`Error trying to set environtment paths: ${e.message}`)
    }

    IO
    .getUsers()
    .then(users => {
      logger.info(App, "Get users", users)

      if(!users.length) {
        return setGlobalState({view: VIEWS.REGISTER})
      }

      setGlobalState({view: VIEWS.USERS, users: users.map(user => new User(user))})
    })
    .catch(() => setGlobalState({view: VIEWS.REGISTER}))
  }, []);

  return (
    <MenuProvider>
      <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="light" translucent={false} />
            {allViews[view]}
      </ScrollView>
    </MenuProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#212121'
  },
});
