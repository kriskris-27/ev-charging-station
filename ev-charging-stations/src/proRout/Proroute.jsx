import Addstation from "../pages/Addstation/Addstation";
import Home from "../pages/Home";

export default function ProRoute({isauth}){
    const state = isauth; //have to pass here
    return state ? (<Addstation />) : (<Home /> )
}