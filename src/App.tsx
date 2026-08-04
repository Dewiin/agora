import { Routes, Route } from 'react-router'
import './App.css'

// components
import { AppLayout } from '@/components/screens/AppLayout/AppLayout'
import { HomeScreen } from '@/components/screens/HomeScreen/HomeScreen'
import { LoginScreen } from '@/components/screens/AuthScreen/LoginScreen'
import { SignupScreen } from '@/components/screens/AuthScreen/SignupScreen'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/*' element={<HomeScreen />} />
      </Route>
      
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/signup' element={<SignupScreen />} />
    </Routes>
  )
}

export default App
