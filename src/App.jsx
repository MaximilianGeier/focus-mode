import { useEffect, useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import { useSelector, useDispatch } from 'react-redux'
import {  setPomodoro, setSounds, changePage  } from './slice/pageSlice'

function App() {
  const currentPage = useSelector((state) => state.currentPage.value);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage])

  return (
    <>
      <Header />
      <Display />
    </>
  )
}

export default App
