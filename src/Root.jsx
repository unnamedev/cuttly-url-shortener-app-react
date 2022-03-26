import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Footer, Header, Home} from "./components";

const Root = () =>
    <div className="page">
        <Router>
            {/* Header */}
            <Header/>

            {/* Main */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                </Routes>
            </main>

            {/* Footer */}
            <Footer/>
        </Router>
    </div>

export default Root
