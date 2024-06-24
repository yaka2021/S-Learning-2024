import { Link,useNavigate } from "react-router-dom"; //ページ遷移を実装するために必要
import "../../scss/Header.scss";
import icon from "../../img/icon.png"

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <h1 className="header-h1_1-1">
                <Link to={`/`} className="h1-link_1-1">
                    <img src={icon} alt="icon" width="75" height="75" className="h1-img_1-1" />
                    S-Learning 2024
                </Link>

                {/*ダミーデータ（本来はDBから該当データを取り出す）*/}
                <ul className="h1-ul_1-1">
                    <li>ユーザー名：example　　</li>
                    <li>初回ログイン：2024-01-01 00:00:00</li>{/*学習中は学習中の教材名を取り出す */}
                </ul>
                {/*////////////////////////////////////////////*/}

            </h1>
            <nav className = "header-nav_1-1">
                <button className="nav-button_1-1">サインアウト</button>
                <button className="nav-button_1-1" onClick={() => navigate("/account")}>アカウント情報</button>
            </nav>
        </header>
    );
}
