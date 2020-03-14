import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface PassengerSideState {
  labels1: string[],
  labels2: string[],
  options: string[]
}

export class PassengerSide extends Component<{}, PassengerSideState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      labels1: [
        "5x4 Drop out reducer",
        "Dust valve open",
        "Side light",
        "Computer lights on",
        "Interface-F1 for radio and activate dust",
        "Switch Panel-Radio floor auto dust on auge"
      ],
      labels2: [
        "Mud flap & Box spring",
        "Drop tire kich check for cuts flat spots & caps",
        "Shovel",
        "Tarp clamp",
        "Drive tire kick check for cuts & caps",
        "Side light Box spring Mud flap",
        "Battery cover latched",
        "Triangles",
        "Drive tire kick check for custs & caps",
        "Antenna visible and cable secure",
        "Work Light ON",
        "Reverse lights and back up beeper"
      ],
      options: ["good", "needs repair"]
    }
  }

  render() {
    return (
      <div className="passenger-side">
        <h3>Passenger Side</h3>
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Lube system purge/fill date: </FormLabel>
          <TextField label="MM/DD/YYYY" />
        </FormGroup>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
        <FormGroup row>
          <FormLabel style={{ color: 'black' }}>Product setting: </FormLabel>
          <TextField/>
          <FormLabel style={{ color: 'black' }}>(default to 2)</FormLabel>
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} label={label} text=""/>
        ))}
        <FormGroup row>
          <FormLabel style={{color: 'black'}}>Truck tarp: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} label={option} text="Truck tarp"/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
