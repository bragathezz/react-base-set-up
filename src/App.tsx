import './App.css'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from './helper/hooks'
import { demoApi } from './redux/service'

function App() {
  const dispatch = useAppDispatch()
  const { demo } = useAppSelector((state) => {
    return {
      demo: state.demo.loginRes.data
    }
  })

  const handleCheckDispatch = async (data: number) => {
    try {
      await dispatch(demoApi((demo as number) + data))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Button variant='outlined' onClick={() => handleCheckDispatch(-1)}>
        Decrease
      </Button>
      {demo}
      <Button variant='contained' onClick={() => handleCheckDispatch(1)}>
        Increse
      </Button>
    </>
  )
}

export default App
