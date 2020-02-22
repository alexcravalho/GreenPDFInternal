import React, { Component, ReactNode } from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

interface StartupCheckboxState {
  checked: boolean
}

interface StartupCheckboxProps {
  label: string
}

const BlueCheckbox = withStyles({
  root: {
    // color: blue[400],
    '&$checked': {
      color: blue[500],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export class StartupCheckboxItem extends Component<StartupCheckboxProps, StartupCheckboxState> {
  constructor(props: StartupCheckboxProps) {
    super(props);

    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    return (
      <div className="startup-checkbox-items">
          <FormControlLabel
          control={
            <BlueCheckbox checked={this.state.checked} onChange={this.handleChange('checked')} value="checked" />
          }
          label={this.props.label}
        />
      </div>
    )
  }
};
