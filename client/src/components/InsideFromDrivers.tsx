import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface InsideFromDriversProps {
  appStateChange: any,
  appStateHandleCheck: any,
  lsd: string,
  ins: string
}

interface InsideFromDriversState {
  labels1: string[],
  labels2: string[]
}

export class InsideFromDrivers extends Component<InsideFromDriversProps, InsideFromDriversState> {
  constructor(props: InsideFromDriversProps) {
    super(props);

    this.state = {
      labels1: [
        "Oil Pressure / 14 Volts / Fuel",
        "Cruise Set 1100 rpm",
        "Low Air Warning Light & Buzzer",
        "Hazards & Headlights On",
        "Master Control Switch / Beacon / Side Light",
        "Safety Glasses x 3"
      ],
      labels2: [
        "Phone Charger",
        "Plyers / Crescent Wrench / Combo Screw Driver",
        "Razor Blade / Cross Wrench / Hose Nozzle",
        "Pen & Zip Tie x 4",
        "Remote on Hook",
        "Behind Driver Seat Filled Simple Green Bottle",
        "Remove Garbage & Clean Floor"
      ]
    }
  }

  render() {
    return (
      <div className="inside-from-drivers">
        <h3>Interior Driver Side Check by Driver or Certified Helper</h3>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4', fontWeight:500}}>Last Service Date: </FormLabel>
          <TextField className="lsd" label="MM/DD/YYYY" value={this.props.lsd} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'lsd')}} />
        </FormGroup>
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4', fontWeight:500}}>Insurance / Registration Expires: </FormLabel>
          <TextField className="ins" label="MM/DD/YYYY" value={this.props.ins} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'ins')}} />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
      </div>
    )
  }
};
