import { Navigate } from "react-router-dom";

export const NotFound = () =>{
    if (localStorage.getItem('user') === null) {
        return <Navigate to='/AmmaChethiMudha' />;
      }
      return <Navigate to='/notfound' />
}