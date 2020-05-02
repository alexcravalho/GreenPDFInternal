import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface OutsideDriverProps {
  appStateChange: any,
  appStateHandleCheck: any,
  filter: string,
  coupler: string
}

interface OutsideDriverState {
  labels1: string[],
  labels2: string[]
}

export class OutsideDriver extends Component<OutsideDriverProps, OutsideDriverState> {
  constructor(props: OutsideDriverProps) {
    super(props);

    this.state = {
      labels1: [
        "Close Hood & Latch",
        "Check Lights / Beacons / Flashers in Front",
        "Steer Tire Kick Check for Cuts & Caps",
        "Box Spring",
        "Hydraulic Fluid Level"
      ],
      labels2: [
        "Side Light Box Spring Mud Flap",
        "Drive Tires Kick Check for Cuts & Lug Nut Caps",
        "Drop Tire Kick Check for Cuts, Flat Spots & Caps",
        "Tarp Clamp",
        "Side Light & Box Spring"
      ]
    }
  }

  render() {
    return (
      <div className="outside-driver">
        <h3>Exterior Front Check by Driver</h3>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4', fontWeight:500}}>Blower Filter Clean Date: </FormLabel>
          <TextField className="filter" label="MM/DD/YYYY" value={this.props.filter} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'filter')}} />
        </FormGroup>
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4', fontWeight:500}}>Blower Coupler Lube Date: </FormLabel>
          <TextField className="coupler" label="MM/DD/YYYY" value={this.props.coupler} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'coupler')}} />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
      </div>
    )
  }
};
