import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import ClickMe from "./components/ClickMe";
import { store } from "./app/store";
import { Provider } from "react-redux";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/fetch-data" component={FetchData} />
          <Route path="/estoyaqui" component={ClickMe} />
        </Layout>
      </Provider>
    );
  }
}
