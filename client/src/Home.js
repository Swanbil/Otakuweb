import React from 'react';
import './Home.css';
import logo from './bg_home.jfif';

export default class Home extends React.Component {
    
    render() {
        return (
            <div>
                <h2>
                    HomePage
                </h2>
                <hr className="separator"></hr>
                <div className="body">
                    <div className="img">
                        <img src={logo} width="20%"/>
                    </div>
                    <h3>Welcome back</h3>
                    <p>
                        Here you can visualize and discover new mangas<br/>
                        You can add mangas to your library if you want to read them or other<br/>
                        This website use the KitsuAPi<br/>
                        Enjoy !  ⛩️<br/>
                    </p>
                </div>
            </div>



        );
    }
}