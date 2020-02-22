import React, { Component } from 'react';
import { FormLabel } from '@material-ui/core';
import { LabledCheckbox } from './LabledCheckbox';

interface OilAddedState {
  options: string[]
}

export class OilAdded extends Component<{}, OilAddedState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: ['Yes', 'No']
    }
  }

  render() {
    return (
      <div className="oil-added">
        <FormLabel style={{color: 'black'}}>Oil Added: </FormLabel>
        {this.state.options.map((option, idx) => (
          <LabledCheckbox key={idx} label={option}/>
        ))}
      </div>
    )
  }
};






// render() {
//   return (
//     <div className="oil-added">
//       <FormLabel style={{color: 'black'}}>Oil Added: </FormLabel><FormControlLabel
//         control={
//           <BlueCheckbox checked={this.state.oilAddedY} onChange={this.handleChange('oilAddedY')} value="checked" />
//         }
//         label="Yes"
//       />
//       <FormControlLabel
//         control={
//           <BlueCheckbox checked={this.state.oilAddedN} onChange={this.handleChange('oilAddedN')} value="checked" />
//         }
//         label="No"
//       />
//     </div>
//   )
// }