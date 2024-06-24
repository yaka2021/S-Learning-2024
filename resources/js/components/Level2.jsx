import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../scss/Level2.scss";


export const Level2 = () => {
    return (
        <>
        <Header />
        <div className="level2">
            <p>LEVEL2</p>
        </div>

        <div className="resource">
            <p>演習一覧</p>
        </div>
        <Footer />
        </>
    );
}
