import 'src/styles/global.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomePage from 'src/app/Home';

export default function App() {
  return (
    <>
      <HomePage/>
      <StatusBar style="light" />
    </>
  );
}
