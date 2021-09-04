import {
  Link
} from "react-router-dom";
import './NavBar.css';
import React from 'react';
import Cookies from 'js-cookie';

export default class Navbar extends React.Component {
  state={
    goLog:false
  }

  async logOut(){
    await fetch('/logout')
    this.props.onLog(false)
  }
  
  render() {
    let txtBtn;
    let btn;
    if(this.props.isLog){
      txtBtn="Deconnexion"
      btn = (<button className="btn-log" onClick={this.logOut.bind(this)}>
            {txtBtn}</button> )
      
    }
    else{
      txtBtn="Connexion"
      btn = (<button className="btn-log" >
            <Link className ="link" to="/login">{txtBtn}</Link> 
            </button> )
      
    }
    return (
     
        <div className="navbar">
          <nav>
            <ul>
              <li >
                <Link className="signa" to="/">OtakuWeb</Link>
              </li>

              <li>
                <Link className ="link" to="/">Home</Link>
              </li>
              <li>
                <Link className ="link" to="/manga">Manga</Link>
              </li>
              <li>
                <Link className ="link" to="/library">Ma bibliothèque</Link>
              </li>
              {btn}
              
              
              
              
            </ul>
          </nav>
  
          

        </div>
        

    );
  }
}