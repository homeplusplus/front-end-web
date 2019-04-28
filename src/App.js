import React, { Component } from 'react';
import RouteHandler from './RouteHandler';
import Header from './common/Header';
import Footer from './common/Footer';
import {config} from "../src/constants/config";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import * as firebase from "firebase/app";
import "firebase/database";

class App extends Component {
  render() {
    return (
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <div>
          <Header/>
          <RouteHandler/>
          <Footer/>
        </div>
      </FirebaseDatabaseProvider>
    );
  }
}

export default App;