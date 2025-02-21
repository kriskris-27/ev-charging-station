import Addstation from "../pages/Addstation/Addstation";

import { Outlet, Navigate } from "react-router-dom";


export default function ProRoute({isauth}){
    const state = isauth; //have to pass here
    return state ? (<Addstation />) : (<Navigate to="/" /> )
}