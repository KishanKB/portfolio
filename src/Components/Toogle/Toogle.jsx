import React, { useContext } from 'react'
import "./Toogle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import  themeContext  from "../../Context";


const Toogle = () => {
    const theme = useContext(themeContext);
    const handleClick = () => {
      // debugger
      theme.dispatch({ type: "toggle" });
    };
  return (
    <div className="toggle" onClick={handleClick}>
    <Moon />
    <Sun />
    {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                        krna hy pehly */}
    <div
      className="t-button"
    ></div>
  </div>
  )
}

export default Toogle
