import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      
      <h1 className='text-4xl bg-purple-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
    </>
  )
}

export default App
