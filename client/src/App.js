import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cookies from 'js-cookie';
import NavBar from './components/NavBar';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Library from './Library';
import Manga from './Manga';



export default class App extends React.Component {
  state = {
    isLog: false
  }

  componentDidMount(){
    const cookieLog =Cookies.get('connect.sid')
    if(cookieLog !==''){
      this.setState({isLog:true})
    }
  }
  isLogin(logValue) {
    this.setState({ isLog: logValue })
  }

  render() {

    return (
      <Router>
        <NavBar isLog={this.state.isLog} onLog={this.isLogin.bind(this)}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/manga" render={(props) =>(
            <Manga {...props} isLog={this.state.isLog}/>
          )} />
          <Route path="/library" render={(props) =>(
            <Library {...props} isLog={this.state.isLog}
          />)}/>
          <Route path="/login" render={(props) => (
            <Login {...props} onLog={this.isLogin.bind(this)} />
          )}/>
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }

}


