import React, { Component } from 'react';
import { FormLabel, FormGroup, TextField } from '@material-ui/core';
import { TruckDriverTextField } from './TruckDriverTextField';

interface TruckDriverState {
  labels1: string[],
  labels2: string[]
}

interface TruckDriverProps {
  handleChange: Function
}

export class TruckDriver extends Component<TruckDriverProps, TruckDriverState> {
  constructor(props: TruckDriverProps) {
    super(props);

    this.state = {
      labels1: ['Truck: ', 'Driver: '],
      labels2: ['Helper: ', 'Date: ']
    }
  }

  render() {
    return (
      <div className="truck-driver">
        <FormGroup row>
          {this.state.labels1.map((label, idx) => (
            <div key={idx}>
              <FormLabel style={{ color: 'black', fontSize: 24, fontWeight: 500 }}>{ label }</FormLabel>
              <TruckDriverTextField handleChange={this.props.handleChange}/>
            </div>
          ))}
        </FormGroup>
        <FormGroup row>
          {this.state.labels2.map((label, idx) => (
            <div key={idx}>
              <FormLabel style={{ color: 'black', fontSize: 24, fontWeight: 500 }}>{ label }</FormLabel>
              <TextField />
            </div>
          ))}
        </FormGroup>
      </div>
    )
  }
};