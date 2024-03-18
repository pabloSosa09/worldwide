import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import  style  from "./NavBar.module.css";
import logo from '/public/logo.png'

const NavBar = () => {
  return (
    <div className={style.container}>
   
      <header className={style.headercontainer}>
          <div className={style.logo}>
              <img src={logo} alt="logo"/>
          </div>
              <NavLink  className={style.button} to={"/form"}>Create Activity</NavLink>
              <NavLink  className={style.button} to={"/"}>Go Landing</NavLink>
              <SearchBar className={style.btn}/>
      </header>
    
    </div>
  );
};

export default NavBar;
