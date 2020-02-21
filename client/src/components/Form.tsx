import React, { Component } from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

interface AppState {
  checkedA: boolean,
  checkedB: boolean,
  checkedC: boolean,
  checkedD: boolean
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

export class Form extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <div className="form-left-column">
          <FormControlLabel
            control={
              <BlueCheckbox checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" />
            }
            label="Blue Custom Color"
          />
        </div>
        <div className="form-right-column">

        </div>
      </div>
    )
  }
};
