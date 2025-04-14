import './App.css'
import Header from "./header";
import Main from "./mian/index.jsx";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-color', '#1AC4FF');
    })

    return (
        <>
            <Header/>
            <Main/>
        </>
    )
}

export default App
