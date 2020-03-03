import React, { Component } from 'react';
import { BeforeStartup } from './BeforeStartup';
import { InsideFromDrivers } from './InsideFromDrivers';
import { UnderSeat } from './UnderSeat';
import { OutsideDriver } from './OutsideDriver';
import { TruckDriver } from './TruckDriver';
import { Back } from './Back';
import { InTruckBox } from './InTruckBox';

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
          <InsideFromDrivers />
          <UnderSeat />
          <OutsideDriver />
        </div>
        <div className="form-right-column">
          <TruckDriver />
          <Back />
          <InTruckBox />
        </div>
      </div>
    )
  }
};
