import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';
import { OilAdded } from './OilAdded';
import { Coolant } from './Coolant';
import { PowerSteering } from './PowerSteering';

interface StartupProps {
  appStateChange: any,
  appStateHandleCheck: any,
  notes: string
}

interface StartupState {
  labels: string[]
}

export class BeforeStartup extends Component<StartupProps, StartupState> {
  constructor(props: StartupProps) {
    super(props);

    this.state = {
      labels: [
        "Air Filter / Panty Hoe Check",
        "Check Belt / Hoses",
        "Check Oil"
      ]
    }
  }

  render() {
    return (
      <div className="before-startup">
        <h3>Before Start up Driver or Certified Helper</h3>
        {this.state.labels.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text='' appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <OilAdded appStateHandleCheck={this.props.appStateHandleCheck}/>
        <Coolant appStateHandleCheck={this.props.appStateHandleCheck}/>
        <PowerSteering appStateHandleCheck={this.props.appStateHandleCheck}/>
        <FormGroup className="notes-group" row>
          <FormLabel className="label" style={{ color: 'black', marginBottom: '5px', fontWeight: 500 }}>Notes: </FormLabel>
          <TextField className="notes" multiline rows="5" variant="outlined" fullWidth={true} value={this.props.notes} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'notes')}} />
        </FormGroup>
      </div>
    )
  }
};
