
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.jsx";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import AuthorsPage from "./ui/pages/AuthorsPage/AuthorsPage.jsx";
import BooksPage from "./ui/pages/BooksPage/BooksPage.jsx";

function App() {
 return (
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout/>}>
                 <Route index element={<HomePage/>}/>
                 <Route path="books" element={<BooksPage/>} />
                 <Route path="authors" element={<AuthorsPage/>} />
                 <Route path="countries" element={ <CountriesPage/> } />


             </Route>
         </Routes>
     </BrowserRouter>
 )
}

export default App
