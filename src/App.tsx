import { Routes, Route } from 'react-router'
import './App.css'

// components
import { AppLayout } from '@/components/screens/AppLayout/AppLayout'
import { HomeScreen } from '@/components/screens/HomeScreen/HomeScreen'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/*' element={<HomeScreen />} />
      </Route>
    </Routes>
  )
}

export default App
