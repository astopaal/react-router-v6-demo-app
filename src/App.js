import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
// Language: javascript
// Path: src/App.js

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Layout/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="blog" element={<Blog/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;