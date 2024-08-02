import 'src/styles/global.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomePage from 'src/components/pages/home.page';

export default function App() {
  return (
    <>
      <HomePage/>
      <StatusBar style="light" />
    </>
  );
}
