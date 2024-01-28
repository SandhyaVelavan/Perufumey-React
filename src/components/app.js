import Navbar from "./navbar.js"
import Search from "./search"
import Product from "./product"
import About from "./about"
import Footer from "./footer.js"


function App(){
    return(
    <div>
        <Navbar></Navbar>
        <Search></Search>
        <Product></Product>
        <About></About>
        <Footer></Footer>
    </div>    
    )
}

export default App