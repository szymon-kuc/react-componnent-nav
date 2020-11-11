import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


export const Nav = () => {
    const [active, setActive] = useState(["0","1","2","3","4"]);
    let handleClick = (e: any) =>{
        let active = parseInt(e.target.className);
        let tab = [];
        if(!isNaN(active)){
            for(let i=0;i<=4;i++){
                if(i==active){
                    tab[i]="active";
                } else{
                    tab[i] = i.toString();
                }
            }
            setActive(tab);
        }

    }
    return(
        <header>
            <nav className="nav-mobile">
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <Link to="/"><li>Strona główna</li></Link>
                        <div className="dropdown-menu-mobille">
                            <input id="check01" type="checkbox" name="menu" />
                            <label htmlFor="check01">Porfolio <i className="fa fa-angle-down"></i> <i class="fa fa-angle-up"></i></label>
                            <ul className="submenu">
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                            </ul>
                        </div>
                        <Link to="/o-mnie"><li>O mnie</li></Link>
                        <div className="dropdown-menu-mobille">
                            <input id="check02" type="checkbox" name="menu" />
                            <label htmlFor="check02">Oferta <i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i>
                            </label>
                           
                            <ul className="submenu">
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                            </ul>
                        </div>
                        <Link to="/kontakt"><li>Kontakt</li></Link>
                    </ul>
                </div>
                <div className="nav-logo"><Link to="/"><img src={logo} /></Link></div>
            </nav>
            <nav className="nav-desktop">
                    <ul className="menu">
                    <Link to="/" onClick={(e: any) => handleClick(e)}><li className="nav-logo"><img className={active[0]} src={logo} /></li></Link>
                        <div className="dropdown-menu">
                            <a href="#" onClick={(e: any) => handleClick(e)}><li className={active[1]}>Portfolio</li></a>
                            <ul>
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                            </ul>
                        </div>
                        <Link to="/o-mnie" onClick={(e: any) => handleClick(e)}><li className={active[2]}>O mnie</li></Link>
                        <div className="dropdown-menu">
                             <Link to="/oferta" onClick={(e: any) =>  handleClick(e)}><li className={active[3]}>Oferta</li></Link>
                            <ul>
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                                <a href="#"><li>lorem ipsum</li></a>
                            </ul>

                        </div>
                        <Link to="/kontakt" onClick={(e: any) =>  handleClick(e)}><li className={active[4]}>Kontakt</li></Link>
                    </ul>
            </nav>
        </header>
	)
}
