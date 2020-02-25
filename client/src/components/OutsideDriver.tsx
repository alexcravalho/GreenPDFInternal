import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface OutsideDriverState {
  labels1: string[],
  labels2: string[]
}

export class OutsideDriver extends Component<{}, OutsideDriverState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      labels1: [
        "Close hood & latch",
        "Check lights / beacons / flashers in front",
        "Steer tire kick check for cuts & caps",
        "Box spring",
        "Hydraulic fluid level"
      ],
      labels2: [
        "Side light Box spring Mud flap",
        "Drive Tires kick check for cuts & Lug nut caps",
        "Drop Tire kick check for cuts, flat spots & caps",
        "Tarp clamp",
        "Side light & Box spring"
      ]
    }
  }

  render() {
    return (
      <div className="outisde-driver">
        <h3>Outside Driver only</h3>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} label={label}/>
        ))}
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Blower Filter clean date: </FormLabel>
          <TextField label="MM/DD/YYYY" />
        </FormGroup>
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Blower coupler lube date: </FormLabel>
          <TextField label="MM/DD/YYYY" />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} label={label}/>
        ))}
      </div>
    )
  }
};
