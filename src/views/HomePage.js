import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Phone from '@material-ui/icons/Phone';
import List from '@material-ui/icons/ListAlt';
import Person from '@material-ui/icons/PersonPin';
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database';

const path = "user_emails";

class HomePage extends React.Component{
    countProperties = (obj) => {
        var count = 0;

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                ++count;
        }

        return count;
    }

    render(){
        return(
            <div className="body">
                {/* HomePage Here
                <Link to="/callerView">
                <button>
                    callerView
                </button>
                </Link> */}

                <section id="one">
                    <div id="jumbo">
                        <div id="inner-1">
                            <div id="left-jumbo">
                            	<h1>
                            		Text us xd
                            	</h1>
                            	<div>
                            		<p id="info-block" className="html"> 
                            		Enter in info here
                            		</p>
                            	</div>
                            </div>
                        </div>  
                    </div>
                    <div id="info-nav">
                        <button className="info-button">
                        	Shelter
                        </button>
                        <button className="info-button">
                        	Food
                        </button>

                        <form className="landing-form">
                        <input className="landing-input" onChange={this.handleChange} type="text" placeholder="e.g first.last@gmail.com" />
                        <FirebaseDatabaseMutation type="push" path={path}>
                            {({ runMutation }) => {
                                return (
                                    <div>
                                        <button className="landing-button"
                                            data-testid="test-push"
                                            onClick={async () => {
                                                await runMutation({ email: this.state.email });
                                            }}
                                        >
                                            Sign up
                                    </button>
                                    </div>
                                );
                            }}
                        </FirebaseDatabaseMutation>
                    </form>
                    <FirebaseDatabaseNode path={path}>
                        {d => {
                            return d.isLoading === true ? (
                                "Loading"
                            ) : (
                                    <h2 className="landing-h2">
                                    	<span className="counter">
                                    		{this.countProperties(d.value)}
                                    	</span> people have saved $10 by signing up. 
                                    	<span className="join-now">
                                    	Join them now!
                                    	</span>
                                    </h2>
                                );
                        }}
                    </FirebaseDatabaseNode>


                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;