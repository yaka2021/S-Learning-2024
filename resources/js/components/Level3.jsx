import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../scss/Level3.scss";


export const Level3 = () => {
    return (
        <>
        <Header />
        <div className="level3">
            <p>LEVEL3</p>
        </div>

        <div className="resource">
            <p>演習一覧</p>
        </div>
        <Footer />
        </>
    );
}
