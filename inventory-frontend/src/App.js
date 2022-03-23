import {Products} from "./components/Products";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ProductsCreate} from "./components/ProductsCreate";
import {Orders} from "./components/Orders";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/create" element={<ProductsCreate/>}/>
            <Route path="/orders" element={<Orders/>}/>
        </Routes>
    </BrowserRouter>;
}

export default App;
