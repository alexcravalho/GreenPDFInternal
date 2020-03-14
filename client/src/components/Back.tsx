import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface BackState {
  labels1: string[],
  labels2: string[],
  options: string[]
}

export class Back extends Component<{}, BackState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      labels1: [
        "Brake-Tail-Center-Plate lights",
        "Beacons flashers"
      ],
      labels2: [
        "hoses and couplers",
        "hose adaptor",
        "clean out bar",
        "bumper clean",
        "Climb ladder:"
      ],
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div className="back">
        <h3>Back</h3>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>license plate tabs expire: </FormLabel>
          <TextField label="MM/DD/YYYY" />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Empty or preloaded with: </FormLabel>
          <TextField />
        </FormGroup>
        <FormGroup row>
          <FormLabel style={{color: 'black'}}>Box bars straight: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} label={option} text="Box bars straight"/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
