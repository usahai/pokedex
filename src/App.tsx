import './App.css'
import Header from 'containers/Header'
import AppRoutes from 'Routes'

function App() {
  return (
    <>
      <Header />
      <div className="bg-[#e6ecf8] dark:bg-gray-500">
        <AppRoutes />
      </div>
    </>
  )
}

export default App
