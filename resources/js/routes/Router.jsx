import { Route, Routes} from "react-router-dom";
import { Home } from "../components/Home";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import { Account } from "../components/Account";
import { Tutorial } from "../components/games/Tutorial";
import { Level1 } from "../components/Level1";
import { Level2 } from "../components/Level2";
import { Level3 } from "../components/Level3";
import { NotFound } from "../components/NotFound";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/level1" element={<Level1 />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/level3" element={<Level3 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
  };