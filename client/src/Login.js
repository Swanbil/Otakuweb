import React from 'react';
import './Login.css';
import {
  Redirect,
  Link
} from "react-router-dom";

export default class Login extends React.Component {
  state = {
    username: '',
    pswd: '',
    isLog: false,
    error:''
  }

  handleLogChange(){
    //console.log(this.props)
    this.props.onLog(this.state.isLog)
  }

  async log() {

    const user = {
      username: this.state.username,
      pswd: this.state.pswd
    }
    const res = await fetch('/login', {
      headers: { "Content-type": "application/json;charset=UTF-8" },
      method: 'POST',
      body: JSON.stringify(user)
    })
    const data = await res.json()
    console.log(data)
    if (data.message) {
      this.setState({error:data.message})
    }
    else{
      this.setState({ isLog: true })
      this.handleLogChange()
      return <Redirect to='/' />
    }
    

  }
  render() {
    let error
    if(this.state.error){
      error = <p className="error">{this.state.error}</p>
    }
    if(this.state.isLog){
      return <Redirect to="/" />
    }
    else {
      return (
        <div className="login">

          <div className="title">
            <h2>LoginPage</h2>
          </div>

          <div className="input">
            <input name="username" className="username" placeholder="Username" onChange={(text) => this.setState({ username: text.target.value })}></input>
            <input name="pswd" type="password" className="pswd" placeholder="Passeword" onChange={(text) => this.setState({ pswd: text.target.value })}></input>
            <button className="btnLog" onClick={this.log.bind(this)}>Se connecter</button>

            <button className="btnReg" >
              <Link className="reg-link" to="/register">S'inscrire</Link>
            </button>

          </div>
          {error}
        </div>
      );
    }

  }
}