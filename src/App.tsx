import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./portfolio/features/counter/Counter";
import "./App.css";
import Portfolio from "./portfolio/Portfolio";
import strings from "./lib/strings";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            setLoading(true);
            return false;
        };
    }, []);

    return (
        <div className="App">
            <Portfolio></Portfolio>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header> */}
        </div>
    );
}

export default App;
