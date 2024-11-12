import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <Home />
    </>
  );
}
