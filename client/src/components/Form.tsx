import React, { Component } from 'react';
import { BeforeStartup } from './BeforeStartup';
import { InsideFromDrivers } from './InsideFromDrivers';
import { UnderSeat } from './UnderSeat';
import { OutsideDriver } from './OutsideDriver';
import { TruckDriver } from './TruckDriver';
import { Back } from './Back';
import { InTruckBox } from './InTruckBox';
import { PassengerSide } from './PassengerSide';
import { SubmitButton } from './SubmitButton';

export class Form extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.state = {}
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div className="full-form">
        <div className="column-container">
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
              <PassengerSide />
            </div>
        </div>
        <div className="submission">
          <SubmitButton handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
};
