import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface OutsideDriverProps {
  appStateChange: any,
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
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4'}}>Blower Filter clean date: </FormLabel>
          <TextField className="filter" label="MM/DD/YYYY" value={this.props.filter} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'filter')}} />
        </FormGroup>
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4'}}>Blower coupler lube date: </FormLabel>
          <TextField className="coupler" label="MM/DD/YYYY" value={this.props.coupler} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'coupler')}} />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
      </div>
    )
  }
};
