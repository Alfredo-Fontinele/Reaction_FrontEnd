import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard'
import { NotFound } from '../pages/not-found'
import { Register } from '../pages/register'
import { Login } from '../pages/login'
import { Home } from '../pages/home'

export const RoutesGlobal = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}
