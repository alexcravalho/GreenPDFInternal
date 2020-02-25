import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface InsideFromDriversState {
  labels1: string[],
  labels2: string[]
}

export class InsideFromDrivers extends Component<{}, InsideFromDriversState> {
  constructor(props: {}) {
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
          <LabledCheckbox key={idx} label={label}/>
        ))}
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Last Service Date: </FormLabel>
          <TextField label="MM/DD/YYYY" />
        </FormGroup>
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Insurance / Registration Expires: </FormLabel>
          <TextField label="MM/DD/YYYY" />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} label={label}/>
        ))}
      </div>
    )
  }
};
