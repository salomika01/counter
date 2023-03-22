import { NavLink } from "react-router-dom";
import Button from "./Button";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import DropDownMenu from "./menu/DropDownMenu";


const nav = [
    {
      value: "Home",
      id: 1,
      link: ""
    },
    {
      value: "Button section",
      id: 2,
      link: "button-section"
    },
    {
      value: "Counter",
      id: 3,
      link: "counter"
    },
    {
      value: "Form",
      id: 4,
      link: "form"
    },
    {
      value: "Product",
      id: 5,
      link: "products"
    },
    {
      value: "Gallery",
      id: 6,
      link: 'gallery'
    }

  ];




  const Header = (params) => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState("en");
  
    useEffect(() => {
      changeLanguage(language);
    }, [language]);
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    
  return (
    <header className="App-header">
    <nav>
      <ul className="navLink">
        {nav
          // .filter((item) => item.value === "Home")
          .map((li, index) => {
            return(
               <li className="navList_li" key={li.id}>
                <NavLink to={`${li.link}`} 
                 className={({ isActive }) =>
                 isActive ? 'activeNav' : undefined} >
                 {t(li.value)}
                 
                 </NavLink>

               
               
            
             
              </li>);
              
          })}

          
      </ul>
      <DropDownMenu /> 
    </nav>
    <div className="lngDiv">
        <Button text={"English"} onClick={() => changeLanguage("en")} />
        <Button text={"ქართული"} onClick={() => changeLanguage("ka")} />
        <Button
          text={t("lngSwitch")}
          onClick={() =>
            language === "en" ? setLanguage("ka") : setLanguage("en")
          }
        />
      </div>
  </header>
  )
}

export default Header
