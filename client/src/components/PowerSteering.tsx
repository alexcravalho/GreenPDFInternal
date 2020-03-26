import React, { Component } from 'react';
import { FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface PowerSteeringProps {
  appStateHandleCheck: any
}

interface PowerSteeringState {
  options: string[]
}

export class PowerSteering extends Component<PowerSteeringProps, PowerSteeringState> {
  constructor(props: PowerSteeringProps) {
    super(props);

    this.state = {
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div className="power-steering">
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5', fontWeight: 500}}>Power Steering Added: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} idx={idx} label={option} text="Power Steering" appStateHandleCheck={this.props.appStateHandleCheck}/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
