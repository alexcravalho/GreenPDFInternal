import React, { Component } from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

interface LabledCheckboxState {
  checked: boolean
}

interface LabledCheckboxProps {
  appStateHandleCheck: any,
  label: string,
  text: string,
  idx: number
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
  }

  handleChange = (name: string, clas: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.checked });
    this.props.appStateHandleCheck(event, clas)
  };

  classParser = (s: string) => {
    s = s.toLowerCase();
    if (this.props.text !== "") {
      s = s + '-' + this.props.text.toLowerCase();
    }
    if (Number.isInteger(Number(s[0]))) {
      s = s.slice(1);
    }
    if (s.includes(' ')) {
      s = s.split(' ').join('');
    }
    if (s.includes('&')) {
      s = s.split('&').join('');
    }
    if (s.includes(',')) {
      s = s.split(',').join('');
    }
    if (s.includes(':')) {
      s = s.split(':').join('');
    }
    if (s.includes('/')) {
      s = s.split('/').join('-')
    }
    return s + this.props.idx;
  }

  render() {
    return (
      <div className="checkbox-row">
          <FormControlLabel
          control={
            <BlueCheckbox
              className={this.classParser(this.props.label)}
              checked={this.state.checked}
              onChange={this.handleChange('checked', this.classParser(this.props.label))}
              value="checked" />
          }
          label={this.props.label}
        />
      </div>
    )
  }
};
