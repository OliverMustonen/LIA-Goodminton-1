import { Link, NavLink } from 'react-router-dom'; 
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import home from "../Images/home.png"; //Image use maybe use from api

const Navbar = () => {

  const totalQuantity = useSelector(state => state.cartReducer.totalCartQuantity)

  return (
    <nav className="navbar  bg-nav">
      <div className="container ">
      
        <Link className="" to="/products"><i className="nav-top-btn"> ABOUT US </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> ART MOVEMENTS </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> ARTISTS BIOGRAPHY </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> ART MOCKUP </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> OUR ARTISTS </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> OUR STUDIO </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> THEN & NOW </i></Link>
        <Link className="" to="/"><i className="nav-top-btn"> CONTACT </i></Link>
        
       
      </div>
          
            
        <div className="nav-bot-btn bg-nav " id="">
          <ul className=" ms-auto grid-container">
            
              <NavLink exact className=" nav-bot-btn-0" aria-current="page" to="/"> <img src={home} alt=""></img></NavLink>
            
              <NavLink exact className=" nav-button nav-bot-btn-1 orange-btn" aria-current="page" to="/products">MADE TO ORDER</NavLink>
           
              <NavLink exact className=" nav-button nav-bot-btn-2 green-btn" aria-current="page" to="/products">HOME PORTRAIT</NavLink>
           
              <NavLink exact className=" nav-button nav-bot-btn-3 purple-btn" aria-current="page" to="/products">PEOPLE PORTAIT</NavLink>
           
              <NavLink exact className=" nav-button nav-bot-btn-4 blue-btn" aria-current="page" to="/products">PET PORTRAIT</NavLink>
          
              <NavLink exact className=" nav-button nav-bot-btn-5 red-btn" aria-current="page" to="/products">FAMOUS PAINTINGS</NavLink>
            
              <NavLink exact className=" nav-button nav-bot-btn-6 blue-btn" aria-current="page" to="/products">CART <span
                className="dropdown-toggle hidden-arrow"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart"></i>
                { totalQuantity > 0 && <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>}
              </span> 
              <ul className="dropdown-menu dropdown-menu-lg-end shopping-cart" aria-labelledby="navbarDropdown">
                <ShoppingCart />
              </ul></NavLink>
              </ul>
              <form action="" className='search-bar'>
               <input type="text" placeholder="Artist or painting" name="search"></input>
               <button type="submit"><i class="fa fa-search"></i></button>
              </form>
          

            
              
            

          
        </div>
        
     </nav>
   
    
  )
}

export default Navbar
