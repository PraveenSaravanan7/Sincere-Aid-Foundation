import React from 'react'
import "./Header.css"
import logo from "../assets/logo/logo.svg"
import logo3 from "../assets/logo/logo3.svg"
import logo2 from "../assets/logo/logo2.svg"
import trademark from "../assets/logo/trademark.svg"
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom'
export const Header = (props) => {
    return (
        <div className="p-0 pt-4" >
           
            <img src={logo} height={"45 px"} />
           
            {props.home &&
            <>             
            <Link to="/aboutus" >
       <a className="float-right font-weight-bold mt-2 boder-bot ml-3" >  About us</a>
       </Link>
       <Link to="/gallery" >
            <a className="float-right font-weight-bold mt-2 boder-bot" >Gallery</a>
        </Link>
       </>
            }
        </div>
    )
}
