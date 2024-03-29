import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-[#29a068] font-display">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
