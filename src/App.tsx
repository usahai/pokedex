import './App.css'
import Header from 'containers/Header'
import AppRoutes from 'Routes'
import Footer from 'containers/Footer'

function App() {
  return (
    <div id="box" className="flex flex-col h-full">
      <Header />
      <div
        id="body-container"
        className="bg-[#e6ecf8] dark:bg-gray-500 flex-auto"
      >
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
