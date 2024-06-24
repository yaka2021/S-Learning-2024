import { useNavigate } from "react-router-dom"; //ページ遷移を実装するために必要
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../scss/Home.scss";
import Fuwarin from "../../img/FuwaPop.png"


export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        <Header />
        <main>

            <img src={Fuwarin} alt="Fuwarin" width="85" height="85" className="main-img_1-1"/>
            <p className="main-p_1-1">私のサイトに来てくれてどうもありがとう！<br></br>サイバーセキュリティマイスターのふわりんです！<br></br>このサイトでの学習を通してセキュリティに興味を持ってくれたらうれしいです！<br></br>まずは「チュートリアル」のボタンをクリックしてみましょう！</p>
            <button className="main-btn_1-1" onClick={() => navigate("/tutorial")}>チュートリアル</button>

            <div className="main-div_1-1">
                <span className="div-span_1-1">難易度選択</span>
            </div>

            <div className="main-div_1-2">
                <button className="div-btn_1-1" onClick={() => navigate("/level1")}>LEVEL1</button>
                <button className="div-btn_1-2" onClick={() => navigate("/level2")}>LEVEL2</button>
                <button className="div-btn_1-3" onClick={() => navigate("/level3")}>LEVEL3</button>
            </div>
        </main>
        <Footer />
        </>
    );
}


