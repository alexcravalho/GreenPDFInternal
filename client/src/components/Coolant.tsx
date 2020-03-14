import React, { Component } from 'react';
import { FormLabel, FormGroup } from '@material-ui/core';
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
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5'}}>Coolant: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} label={option} text="Coolant"/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
