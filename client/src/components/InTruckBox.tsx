import React, { Component } from 'react';
import { LabledCheckbox } from './LabledCheckbox';

interface InTruckBoxProps {
  appStateHandleCheck: any
}

interface InTruckBoxState {
  labels: string[]
}

export class InTruckBox extends Component<InTruckBoxProps, InTruckBoxState> {
  constructor(props: InTruckBoxProps) {
    super(props);

    this.state = {
      labels: [
        "Garden Hose with Nozzle",
        "Tarps x 2",
        "Blower Packs with Full Tanks",
        "Gas Can 3/4 Full",
        "Fire Extinguisher",
        "No Garbage"
      ]
    }
  }

  render() {
    return (
      <div className="in-truck-box">
        <h3>Truck Storage Check by Driver or Certified Helper</h3>
        {this.state.labels.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
      </div>
    )
  }
};
