import React, { Component } from 'react';
import { LabledCheckbox } from './LabledCheckbox';
import { OilAdded } from './OilAdded';
import { Coolant } from './Coolant';
import { PowerSteering } from './PowerSteering';

interface StartupState {
  labels: string[]
}

export class BeforeStartup extends Component<{}, StartupState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      labels: [
        "Air Filter / Panty Hoe Check",
        "Check Belt / Hoses",
        "Check Oil"
      ]
    }
  }

  render() {
    return (
      <div className="before-startup">
        <h3>Before Start up Driver or Certified Helper</h3>
        {this.state.labels.map((label, idx) => (
          <LabledCheckbox key={idx} label={label}/>
        ))}
        <OilAdded />
        <Coolant />
        <PowerSteering />
      </div>
    )
  }
};
