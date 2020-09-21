// Imports
import React from 'react'
import { Link, useLocation, withRouter } from "react-router-dom"
import SearchBar from './SearchBar'
import changeDegreeType from '../../Store/actions/DegreeAction'
import { useDispatch } from 'react-redux'
import { MenuStyle, LogoStyle, SearchStyle, TempTypeButtom, LinkStyle } from '../Style/MenuBarStyle'


// Component
const MenuBar = () => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()


    // Actions
    const handleToggle = () => dispatch(changeDegreeType())


    // Rendering
    return (
        <MenuStyle>
            <LogoStyle>
                <img src={require("../../Pictures/appLogo.png")} width="100px" height="100px" />
            </LogoStyle>
            {pathname !== '/favorites' && <SearchStyle><SearchBar /></SearchStyle>}
            <TempTypeButtom>
                <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" onChange={handleToggle} />
                    <label className="onoffswitch-label" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
            </TempTypeButtom>
            <LinkStyle>
                {pathname === '/favorites' ?
                    <Link style={{ color: '#ffffff', textDecoration: "none" }} to="/">Home</Link>
                    : <Link style={{ color: '#ffffff', textDecoration: "none" }} to="/favorites">Favorites</Link>}
            </LinkStyle>
        </MenuStyle>
    )
}

export default withRouter(MenuBar)

