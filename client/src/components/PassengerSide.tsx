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
        "Tarp clamp",
        "Shovel",
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
          <FormLabel className="label" style={{color: 'black', lineHeight: '4'}}>Lube system purge/fill date: </FormLabel>
          <TextField className="lube" label="MM/DD/YYYY" value={this.props.lube} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'lube')}} />
        </FormGroup>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2'}}>Product setting: </FormLabel>
          <TextField className="product" value={this.props.product} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'product')}} />
          <FormLabel className="default-two" style={{color: 'black', lineHeight: '2'}}>(default to 2)</FormLabel>
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5'}}>Truck tarp: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} idx={idx} label={option} text="Truck tarp" appStateHandleCheck={this.props.appStateHandleCheck}/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
