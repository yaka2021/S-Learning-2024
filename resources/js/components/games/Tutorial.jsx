import { Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "../../../scss/Tutorial.scss";
import Fuwarin from "../../../img/FuwaPop.png"
import pdf from "../../../pdf/demo.pdf"

export const Tutorial = () => {
    return (
        <>
        <Header />
        <main>
            <img src={Fuwarin} alt="Fuwarin" width="85" height="85" className="main-img_1-1"/> {/* クラス名使いまわし*/}
            <p className="main-p_2-1">ああああああ</p>

            

            <div className="main-div_2-2">
                <iframe className="div-iframe_1-1" src={pdf} width="640" height="425"></iframe>
                <Link target="_blank" to={pdf}><button className="link-btn_1-1">スライドを別タブで開く</button></Link>
            </div>

            <button className="">スライドの内容を理解しました</button>
            <button className="">ホーム画面に戻る</button>
        </main>
        <Footer />
        </>
    );
}
