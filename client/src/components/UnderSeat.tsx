import React from 'react';
import { LabledCheckbox } from './LabledCheckbox';

interface UnderSeatProps {
  appStateHandleCheck: any
}

const labels = [
  "Test light / Ear muffs x 2 / Duct tape x 2",
  "Hard hats with safety vest inside x 3",
  "Antifreeze jug Green/Orange",
  "Oil pads minimum 10",
  "First aid kit / fire extinguisher",
  "Stop / Slow sign behind seat",
  "Honk Horn exit"
]

export const UnderSeat = (props: UnderSeatProps) => (
      <div className="under-seat">
        <h3>Under seat</h3>
        {labels.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={props.appStateHandleCheck}/>
        ))}
      </div>
    );
