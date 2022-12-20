import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Header from 'containers/Header'

function App() {
  return (
    <>
      <Header />
      <div className="bg-[#e6ecf8] dark:bg-gray-500">
        <div className="max-xl:max-w-7xl flex justify-center pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
