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
        "Garden hose w/ nozzle",
        "Tarps x 2",
        "Blower packs with FULL tanks",
        "Gas can 3/4 full",
        "Fire extinguisher",
        "NO Garbage"
      ]
    }
  }

  render() {
    return (
      <div className="in-truck-box">
        <h3>In Truck Box</h3>
        {this.state.labels.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
      </div>
    )
  }
};
