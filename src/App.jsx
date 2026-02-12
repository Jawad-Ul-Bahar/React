import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import Phones from './pages/Phones'
import Accessories from './pages/Accessories'
import Support from './pages/Support'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="phones" element={<Phones />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
