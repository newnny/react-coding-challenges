import React from 'react';
import Header from "./Header"

import { list } from './utils';
import View from './View';

const Main = () => {
  return (
    <>
      <Header />
      <View list={list} />
    </>

  )

}

export default Main;