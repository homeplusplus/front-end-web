import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Toolbar } from '@material-ui/core';

export default class Header extends React.Component{
    render(){
        return(
            <div className="header-paper">
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none' }}>

                    {/* <Typography variant="h6" style={{flexGrow:1}}>
                        Lemon
                    </Typography> */}
                    {/* <img src={logo} alt="Logo" className="logo-header"/> */}
                    <h3 style={{color:'white'}}>Logo</h3>
                    </Link>

                    <div className="header-titles-container">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button style={{color:'white'}} >Home</Button>
                        </Link>
                        <Link to="/input" style={{ textDecoration: 'none', marginLeft: 5 }}>
                            <Button style={{color:'white'}}>Oganizer</Button>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', marginLeft: 5}}>
                            <Button style={{color:'white'}}>About Us</Button>    
                        </Link>
                    </div>
                </Toolbar>
            </div>
        )
    }
}