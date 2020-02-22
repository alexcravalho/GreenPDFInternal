import React, { Component, ReactNode } from 'react';
import { StartupCheckboxItem } from './StartupCheckboxItem'
import { Checkbox, CheckboxProps } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

interface StartupState {
  labels: string[]
}

export class BeforeStartup extends Component<{}, StartupState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      labels: [
        "Air Filter / Panty Hoe Check",
        "Check Belt / Hoses",
        "Check Oil - Added: "
      ]
    }
  }

  render() {
    return (
      <div className="before-startup">
        <h3>Before Start up Driver or Certified Helper</h3>
        {this.state.labels.map((label, idx) => (
          <StartupCheckboxItem key={idx} label={label}/>
        ))}
      </div>
    )
  }
};
