import Addstation from "../pages/Addstation/Addstation";
import Home from "../pages/Home";

export default function ProRoute(){
    const state = false; //have to pass here
    return state ? (<Addstation />) : (<Home /> )
}