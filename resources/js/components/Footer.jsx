import { Link } from "react-router-dom";
import "../../scss/Footer.scss";

export const Footer = () => {    
    return (
        <footer>
            <p className="footer-p_1-1">
		        情報科学専門学校<br />
                <span className="p-span_1-1">S-Learning</span>プロジェクトチーム
	        </p>
            <nav>
                <Link target="_blank" to="https://isc.iwasaki.ac.jp/"><button className="nav-btn_2-1">修了後アンケートはこちら</button></Link>
            </nav>
        </footer>
    );
}
