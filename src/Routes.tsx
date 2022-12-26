import Home from 'pages/Home'
import ProductDetailPage from 'pages/ProductDetailPage'
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:pokemon" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default AppRoutes
