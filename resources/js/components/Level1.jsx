import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../scss/Level1.scss";


export const Level1 = () => {
    return (
        <>
        <Header />
        <div className="level1">
            <p>LEVEL1</p>
        </div>

        <div className="resource">
            <p>演習一覧</p>
        </div>

        <button className="return-home-button" onClick={() => navigate("/")}>ホームに戻る</button>
        <Footer />
        </>
    );
}
