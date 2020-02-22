import React, { Component } from 'react';
import { FormLabel } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface PowerSteeringState {
  options: string[]
}

export class PowerSteering extends Component<{}, PowerSteeringState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div className="power-steering">
        <FormLabel style={{color: 'black'}}>Power Steering Added: </FormLabel>
        {this.state.options.map((option, idx) => (
          <LabledCheckbox key={idx} label={option}/>
        ))}
      </div>
    )
  }
};
