import React, { Component } from 'react';
import { LabledCheckbox } from './LabledCheckbox';

interface UnderSeatProps {
  appStateHandleCheck: any
}

interface UnderSeatState {
  labels: string[]
}

export class UnderSeat extends Component<UnderSeatProps, UnderSeatState> {
  constructor(props: UnderSeatProps) {
    super(props);

    this.state = {
      labels: [
        "Test light / Ear muffs x 2 / Duct tape x 2",
        "Hard hats with safety vest inside x 3",
        "Antifreeze jug Green/Orange",
        "Oil pads minimum 10",
        "First aid kit / fire extinguisher",
        "Stop / Slow sign behind seat",
        "Honk Horn exit"
      ]
    }
  }

  render() {
    return (
      <div className="under-seat">
        <h3>Under seat</h3>
        {this.state.labels.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={this.props.appStateHandleCheck}/>
        ))}
      </div>
    )
  }
};
