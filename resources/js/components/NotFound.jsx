import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../scss/NotFound.scss";


export const NotFound = () => {
    return (
      <>
      <Header />
      <main>
        <h1 className="main-h1_1-1">そのページは存在しません。</h1>
      </main>
      <Footer />
      </>
    );
  };