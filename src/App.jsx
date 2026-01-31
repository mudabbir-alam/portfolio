import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <div id="body" className="w-full min-h-screen font-inter">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
