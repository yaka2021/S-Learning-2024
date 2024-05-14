import "../../scss/Header.scss";
import icon from "../../img/icon2.png"

export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1>
                    <img src={icon} alt="icon" width="48" height="48" />
                    S-Learning 2024
                    <button className="logout-button">ログアウト</button>
                    <button className="profile-edit-button">登録情報編集</button>
                </h1>
            </div>
        </header>
    );
}
