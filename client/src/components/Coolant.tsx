import React, { Component } from 'react';
import { FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface CoolantProps {
  appStateHandleCheck: any
}

interface CoolantState {
  options: string[]
}

export class Coolant extends Component<CoolantProps, CoolantState> {
  constructor(props: CoolantProps) {
    super(props);

    this.state = {
      options: ['Green', 'Orange']
    }
  }

  render() {
    return (
      <div className="coolant">
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5', fontWeight: 500}}>Coolant: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} idx={idx} label={option} text="Coolant" appStateHandleCheck={this.props.appStateHandleCheck}/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
