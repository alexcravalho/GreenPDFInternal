import React, { Component } from 'react';
import { LabledCheckbox } from './LabledCheckbox';

interface InTruckBoxState {
  labels: string[]
}

export class InTruckBox extends Component<{}, InTruckBoxState> {
  constructor(props: {}) {
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
          <LabledCheckbox key={idx} label={label}/>
        ))}
      </div>
    )
  }
};
