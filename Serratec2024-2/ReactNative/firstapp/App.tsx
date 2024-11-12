import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from './src/screens/Login';
import { HomeV5 } from './src/screens/HomeV5';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <HomeV5 />
    </>
  );
}
