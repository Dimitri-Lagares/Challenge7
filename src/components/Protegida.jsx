import { Navigate, Outlet} from "react-router-dom";

export const Protegida = ({
    permitir,
    redirectTo = '/sesion',
    children
}) => {
    if (!permitir) {
        console.log('establesca en true la variable permitir para ver portafolio')
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet />
}