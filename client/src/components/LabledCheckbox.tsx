import React, { Component } from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

interface LabledCheckboxState {
  checked: boolean
}

interface LabledCheckboxProps {
  label: string,
  text: string
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

export class LabledCheckbox extends Component<LabledCheckboxProps, LabledCheckboxState> {
  constructor(props: LabledCheckboxProps) {
    super(props);

    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
    // this.classParser = this.classParser.bind(this);
  }

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  classParser = (s: string) => {
    s = s.toLowerCase();
    if (this.props.text !== "") {
      s = s + '-' + this.props.text.toLowerCase();
    }
    if (s.includes(' ')) {
      s = s.split(' ').join('');
    }
    if (s.includes('/')) {
      s = s.split('/').join('-')
    }
    return s;
  }

  render() {
    return (
      <div className="checkbox-row">
          <FormControlLabel
          control={
            <BlueCheckbox
              className={this.classParser(this.props.label)}
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked" />
          }
          label={this.props.label}
        />
      </div>
    )
  }
};
