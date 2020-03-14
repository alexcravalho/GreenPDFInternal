import React, { Component } from 'react';
import { FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface OilAddedState {
  options: string[]
}

export class OilAdded extends Component<{}, OilAddedState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div >
        <FormGroup className="oil-added" row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5'}}>Oil Added: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} label={option} text="Oil Added"/>
          ))}
        </FormGroup>
      </div>
    )
  }
};