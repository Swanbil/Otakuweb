import React from 'react';
import './Login.css';
//import {Link} from "react-router-dom";

export default class Register extends React.Component {
  state = {
    username: '',
    pswd: '',
    reponse:'',
  }

  async regist() {
    const user = {
      username: this.state.username,
      pswd: this.state.pswd
    }
    //console.log(user)
    const res = await fetch('/register', {
      headers: { "Content-type": "application/json;charset=UTF-8" },
      method: 'POST',
      body: JSON.stringify(user)
    })
    const data = await res.json()
    this.setState({reponse:data.message+' '+this.state.username})
    console.log(data)
  }

  render() {
    return (
      <div className="login">
        <div className="title">
          <h2>RegisterPage</h2>
        </div>

        <div className="input">
          <input name="username" className="username" placeholder="Username" onChange={(text) => this.setState({ username: text.target.value })}></input>
          <input name="pswd" type="password" className="pswd" placeholder="Passeword" onChange={(text) => this.setState({ pswd: text.target.value })}></input>
          <button className="btnLog" onClick={this.regist.bind(this)}>S'inscrire</button>
        </div>
        <p className="welc_mess">{this.state.reponse}</p>
      </div>
    );
  }
}