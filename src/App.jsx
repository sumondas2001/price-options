import './App.css'
import LineCharts from './components/LineCharts/LineCharts'
// import DaisyNavbar from './components/DaisyNavbar/DaisyNavbar'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      {/* <h1 className='text-3xl'>Vite + React</h1> */}
      <LineCharts></LineCharts>
    </>
  )
}

export default App
