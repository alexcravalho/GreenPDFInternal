import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface InsideFromDriversProps {
  appStateChange: any,
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
        "Low air warning light & buzzer",
        "Hazards and headlights ON",
        "Master Control Switch / Beacon / Side light",
        "Safety glasses x 3"
      ],
      labels2: [
        "Phone Charger",
        "Plyers / crescent wrench / Combo screw driver",
        "Razor Blade / cross wrench / hose nozzle",
        "Pen & Zip Tie x 4",
        "Remote on Hook",
        "Behind driver seat filled simple green bottle",
        "Remove garbage blow floor"
      ]
    }
  }

  render() {
    return (
      <div className="inside-from-drivers">
        <h3>Inside from Drivers seat or Certified Helper</h3>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4'}}>Last Service Date: </FormLabel>
          <TextField className="lsd" label="MM/DD/YYYY" value={this.props.lsd} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'lsd')}} />
        </FormGroup>
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4'}}>Insurance / Registration Expires: </FormLabel>
          <TextField className="ins" label="MM/DD/YYYY" value={this.props.ins} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'ins')}} />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
      </div>
    )
  }
};
