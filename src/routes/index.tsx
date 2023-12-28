import { BrowserRouter} from 'react-router-dom'
import { AuthRoutes } from './auth.routes'
import { IValue, useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'

export function Routes() {
    const { user } = useAuth() as IValue

    return(
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}