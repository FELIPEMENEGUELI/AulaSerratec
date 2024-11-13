import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from './src/screens/Login';
import { HomeV6 } from './src/screens/HomeV6';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <HomeV6 />
    </>
  );
}
