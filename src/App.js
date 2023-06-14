
import './App.css';
import { useEffect, useState } from 'react';
import { getAllNotes, onDecrement, onIncrement } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import HomeScreen from './containers/HomeScreen';
import AboutScreen from './containers/AboutScreen';
import HomeScreen from './containers/HomeScreen';
import SideBar from './components/SideBar';
import Chat from './containers/Chat';
import Calendar from './containers/Calendar';
import Settings from './containers/Settings/Settings';




function App() {
  // const [value,setValue] =  useState(0);
  // useDispatch ysed for cslling an action
  const dispatch = useDispatch()
   // useDispatch ysed for cslling an reducer
   const {data} = useSelector(state => state?.increDecreReducer);

   const [response,setResponse] = useState(null);

 const onIncrementfn =() => {
  // setValue(value + 1)
  dispatch(onIncrement(data + 1 ))
 }

 const onDecrementfn =() => {
  // setValue(value -1)
  dispatch(onDecrement(data - 1 ))
 }
//  useEffect(() => {
//    dispatch(getAllNotes()).then(res => {
//     setResponse(res)

//    })
//  }, [])


  return (
    <div className='md:flex h-screen '>
       <SideBar />
       <Routes>
       <Route path="/" element={<HomeScreen />} />
       <Route path="/about" element={<AboutScreen />} />
       <Route path="/chat" element={<Chat />} />
       <Route path="/calendar" element={<Calendar />} />
       <Route path="/settings" element={<Settings />} />
       </Routes>
    </div>
    
  );
}

export default App;
