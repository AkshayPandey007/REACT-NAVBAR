import React from "react";
import {Logo} from "../navLogo";
import { Button } from "../button";
import { Link } from "../link";


const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="inNav">
                <Logo />
                <Link/>
                <Button/>
        </div>
        </div>
    )
}

export default Navbar