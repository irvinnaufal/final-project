import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const LoginRoute = (props) => {
    if (Cookies.get('token') === undefined) {
        return <Navigate to={'/login'} />
    } else if (Cookies.get('token') !== undefined) {
        return props.children
    }
}

export default LoginRoute;