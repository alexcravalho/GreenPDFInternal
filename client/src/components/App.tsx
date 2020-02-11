import React, { Component } from 'react';

export interface AppProps { compiler: string; framework: string; }

type AppState = {

}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
  }

  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
  }

}
