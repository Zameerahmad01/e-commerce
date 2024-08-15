import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";

import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {

  const {cartCount} = useContext(Context)

  const navigate = useNavigate()

  const [IsScrolled, setIsScrolled] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <header className={`header ${IsScrolled ? "sticky_header" : ""}`}>
        <nav className="navbar">
          <ul className="nav_left">
            <li className="nav_item">
              <Link to={"/"} className="nav_link">Home</Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link">About</Link>
            </li>
            <li className="nav_item">
              <Link  className="nav_link">Category</Link>
            </li>
          </ul>
          <div className="nav_logo">
            <span onClick={()=> navigate("/")}>ZameerStore.</span>
          </div>
          <div className="nav_right">
            <TbSearch  onClick={()=>{setShowSearch(true)}} />
            <AiOutlineHeart />
            <span 
            onClick={()=>{setShowCart(true)}}
            className="cart_icon">
              <CgShoppingCart />
             {!!cartCount &&  <span className="">{cartCount}</span>}
            </span>
          </div>
        </nav>
      </header>
      {ShowCart && <Cart setShowCart={setShowCart} />}
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
      </>
  );
};

export default Header;
