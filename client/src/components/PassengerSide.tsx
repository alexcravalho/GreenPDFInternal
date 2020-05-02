import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface PassengerSideProps {
  appStateChange: any,
  appStateHandleCheck: any,
  lube: string,
  product: string
}

interface PassengerSideState {
  labels1: string[],
  labels2: string[],
  options: string[]
}

export class PassengerSide extends Component<PassengerSideProps, PassengerSideState> {
  constructor(props: PassengerSideProps) {
    super(props);

    this.state = {
      labels1: [
        "5x4 Drop Out Reducer",
        "Dust Valve Open",
        "Side Light",
        "Computer Lights On",
        "Interface-F1 for Radio & Activate Dust",
        "Switch Panel-Radio Check"
      ],
      labels2: [
        "Mud Flap & Box Spring",
        "Drop Tire Kick Check for Cuts, Flat Spots & Caps",
        "Tarp Clamp",
        "Shovel",
        "Drive Tire Kick Check for Cuts & Caps",
        "Side Light Box Spring Mud Flap",
        "Battery Cover Latched",
        "Triangles",
        "Drive Tire Kick Check for Cuts & Caps",
        "Antenna Visible & Cable Secure",
        "Work Light On",
        "Reverse Lights & Backup Beeper"
      ],
      options: ["Good", "Needs Repair"]
    }
  }

  render() {
    return (
      <div className="passenger-side">
        <h3>Interior Passenger Side Check by Driver or Certified Helper</h3>
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4', fontWeight:500}}>Lube System Purge/Fill Date: </FormLabel>
          <TextField className="lube" label="MM/DD/YYYY" value={this.props.lube} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'lube')}} />
        </FormGroup>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2', fontWeight:500}}>Product Setting: </FormLabel>
          <TextField className="product" value={this.props.product} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'product')}} />
          <FormLabel className="default-two" style={{color: 'black', lineHeight: '2', fontWeight:500}}>(default to 2)</FormLabel>
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5', fontWeight:500}}>Truck Tarp: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} idx={idx} label={option} text="Truck tarp" appStateHandleCheck={this.props.appStateHandleCheck}/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
