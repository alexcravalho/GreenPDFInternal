import React, { Component } from 'react';
import { FormLabel, FormGroup } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface OilAddedProps {
  appStateHandleCheck: any
}

interface OilAddedState {
  options: string[]
}

export class OilAdded extends Component<OilAddedProps, OilAddedState> {
  constructor(props: OilAddedProps) {
    super(props);

    this.state = {
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div >
        <FormGroup className="oil-added" row>
          <FormLabel className="label" style={{color: 'black', lineHeight: '2.5', fontWeight: 500}}>Oil Added: </FormLabel>
          {this.state.options.map((option, idx) => (
            <LabledCheckbox key={idx} idx={idx} label={option} text="Oil Added" appStateHandleCheck={this.props.appStateHandleCheck}/>
          ))}
        </FormGroup>
      </div>
    )
  }
};