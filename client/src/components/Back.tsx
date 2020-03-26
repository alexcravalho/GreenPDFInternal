import React, { Component } from 'react';
import { TextField, FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface BackProps {
  appStateChange: any,
  appStateHandleCheck: any,
  tabs: string,
  pre: string
}

interface BackState {
  labels1: string[],
  labels2: string[],
  options: string[]
}

export class Back extends Component<BackProps, BackState> {
  constructor(props: BackProps) {
    super(props);

    this.state = {
      labels1: [
        "Brake-Tail-Center-Plate lights",
        "Beacons flashers"
      ],
      labels2: [
        "hoses and couplers",
        "hose adaptor",
        "clean out bar",
        "bumper clean",
        "Climb ladder:"
      ],
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div className="back">
        <h3>Back</h3>
        {this.state.labels1.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '4', fontWeight:500}}>License plate tabs expire: </FormLabel>
          <TextField className="tabs" label="MM/DD/YYYY" value={this.props.tabs} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'tabs')}} />
        </FormGroup>
        {this.state.labels2.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2', fontWeight:500}}>Empty or preloaded with: </FormLabel>
          <TextField className="pre" value={this.props.pre} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {this.props.appStateChange(event, 'pre')}} />
        </FormGroup>
        <FormGroup row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5', fontWeight:500}}>Box bars straight: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} idx={idx} label={option} text="Box bars straight" appStateHandleCheck={this.props.appStateHandleCheck}/>
          ))}
        </FormGroup>
      </div>
    )
  }
};
