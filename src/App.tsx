import { Button } from '@mui/material';

import { demoApi } from './redux/service';
import { useAppDispatch, useAppSelector } from './helper/hooks';

function App() {
  const dispatch = useAppDispatch();
  const { demo } = useAppSelector((state) => {
    return {
      demo: state.demo.loginRes.data,
    };
  });
  const handleCheckDispatch = async (data: number) => {
    try {
      await dispatch(demoApi((demo as number) + data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="outlined" onClick={() => handleCheckDispatch(-1)}>
        Decrease
      </Button>
      {demo}
      <Button variant="contained" onClick={() => handleCheckDispatch(1)}>
        Increse
      </Button>
    </>
  );
}

export default App;
