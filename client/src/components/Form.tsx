import React, { Component } from 'react';
import { BeforeStartup } from './BeforeStartup';

// interface AppState {
// }

export class Form extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.state = {},
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <div className="form-left-column">
          <BeforeStartup />
        </div>
        <div className="form-right-column">

        </div>
      </div>
    )
  }
};
