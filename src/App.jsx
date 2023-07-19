import { useEffect, useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import { useSelector, useDispatch } from 'react-redux'
import {  setPomodoro, setSounds, changePage  } from './slice/pageSlice'
import SettingsPanel from './components/SettingsPanel'

function App() {
  const currentPage = useSelector((state) => state.currentPage.value);

  return (
    <>
      <Header />
      <Display />
      <SettingsPanel />
    </>
  )
}

export default App
