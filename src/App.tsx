import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Header from 'containers/Header'

function App() {
  return (
    <>
      <Header />
      <div className="bg-[#e6ecf8] dark:bg-gray-500">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
