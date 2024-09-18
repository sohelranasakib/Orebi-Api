import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import FurnitureP from "./pages/FurnitureP"
import ClothesP from "./pages/ClothesP"
import BagP from "./pages/BagP"
import ElectronicsP from "./pages/ElectronicsP"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import CheckOut from "./pages/CheckOut"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/furniture" element={<FurnitureP/>}></Route>
    <Route path="/clothes" element={<ClothesP/>}></Route>
    <Route path="/bag" element={<BagP/>}></Route>
    <Route path="/electronics" element={<ElectronicsP/>}></Route>
    <Route path="/contact" element={<Contacts/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    
  </Route>
))

function App() {
  

  return (
    <>
   <RouterProvider router={router}/>
    
    </>
  )
}

export default App
