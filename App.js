import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Register from './views/Register';
import { useEffect, useState } from 'react';
import Loading from './views/Loading';
import IO from './IO';
import Users from './views/Users';
import Home from './views/Home';
import User from './models/User';
import FileError from './errors/FileError';
import { setEnvironmentPaths } from './config';

const VIEWS = {
  REGISTER: 0,
  HOME: 1,
  USERS: 2,
  LOADING: 3
}

export default function App() {
  const [view, setView] = useState(VIEWS.LOADING);

  useEffect(() => {
    IO
      .getUsers().then(users => {
      if(users.length) {
        User.setUserCollection(users);

        setView(VIEWS.USERS)
      } else {
        setView(VIEWS.REGISTER)
      }
    })
    .catch((e) => e instanceof FileError && setView(VIEWS.REGISTER));

    try {
      setEnvironmentPaths();
    } catch(e) {
      console.error(`Error trying to set environtment paths: ${e.message}`)
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="light" translucent={false} />
        {
          VIEWS.LOADING === view ? 
          <Loading /> : 
          VIEWS.USERS === view ? 
          <Users /> :
          VIEWS.HOME === view ?
          <Home /> :
          <Register />
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#212121'
  },
});
