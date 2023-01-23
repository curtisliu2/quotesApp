import SearchBar from './components/SearchBar'
import React, {useEffect, useState} from "react";
import './App.css'

type resultProps = {
    content: string;
    author: string;
};

function App() {
    return (
        <div className="App" id="root">
            <SearchBar/>
        </div>
    )
}

export default App
