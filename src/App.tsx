import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import { useAppDispatch } from './redux/store'
import { demoApi } from './redux/service'
import { useSelector } from 'react-redux'

function App() {
  const dispatch = useAppDispatch()
  const { demo } = useSelector((state) => {
    return {
      demo: (state as any).demo.loginRes.data
    }
  })
  const handleCheckDispatch = () => {
    dispatch(demoApi())
  }
  return (
    <>
      {demo}
      <Button variant='contained' onClick={handleCheckDispatch}>
        Increse
      </Button>
    </>
  )
}

export default App
