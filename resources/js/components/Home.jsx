import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../scss/Home.scss";


export const Home = () => {
    return (
        <>
        <Header />

        <button className="select-tutorial-button">チュートリアル</button>

        <div className="difficulty">
            <p>難易度選択</p>
        </div>

        <button className="select-level1-button">LEVEL1</button>
        <button className="select-level2-button">LEVEL2</button>
        <button className="select-level3-button">LEVEL3</button>

        <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Home />);
