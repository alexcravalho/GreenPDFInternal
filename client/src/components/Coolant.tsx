import React, { Component } from 'react';
import { FormLabel } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface CoolantState {
  options: string[]
}

export class Coolant extends Component<{}, CoolantState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: ['Green', 'Orange']
    }
  }

  render() {
    return (
      <div className="coolant">
        <FormLabel style={{color: 'black'}}>Coolant: </FormLabel>
        {this.state.options.map((option, idx) => (
          <LabledCheckbox key={idx} label={option}/>
        ))}
      </div>
    )
  }
};
