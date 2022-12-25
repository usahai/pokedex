import './App.css'
import Header from 'containers/Header'
import AppRoutes from 'Routes'
import Footer from 'containers/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="bg-[#e6ecf8] dark:bg-gray-500">
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
