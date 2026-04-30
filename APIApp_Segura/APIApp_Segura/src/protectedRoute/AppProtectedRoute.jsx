import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import {useAuth} from './useAuth';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Detalles from './Detalles';
import Filtrar from './Filtrar';

export default function AppProtectedRoute() {
    const { user, loading, checkAuth} = useAuth();

    const logout = async() => {
        await fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include"
        });
        checkAuth();
    }

    return(
        <BrowserRouter>
            <Routes>
                {/** Publica */}
                <Route
                    path = "/login"
                    element = {<Login  onLogin={checkAuth}/>}
                />
                {/** Privadas */}
                {/** Dashboard */}
                <Route
                    path = "/dashboard"
                    element = {
                        <ProtectedRoute user = {user} loading = {loading}>
                            <Dashboard user = {user} onLogout = {logout} />
                        </ProtectedRoute>
                    }
                />
                {/* Detalles */}
                <Route
                    path="/detalles/:id"
                    element={
                        <ProtectedRoute user={user} loading={loading}>
                            <Detalles />
                        </ProtectedRoute>
                    }
                />

                {/* Filtrar */}
                <Route
                    path="/filtrar"
                    element={
                        <ProtectedRoute user={user} loading={loading}>
                            <Filtrar />
                        </ProtectedRoute>
                    }
                />
                {/** Default */}
                <Route
                    path = '*'
                    element = {<Login onLogin={checkAuth}/>}
                />
            </Routes>
        </BrowserRouter>
    );
}