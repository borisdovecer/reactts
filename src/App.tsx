import {FC} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header, Welcome, CurrencyDetails} from './components'

const App:FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-800">
            <Header />
            <div className="mx-16 mt-8">
                <Router>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path='/currency/:id' element={<CurrencyDetails />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default App
