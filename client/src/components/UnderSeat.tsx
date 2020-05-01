import React from 'react';
import { LabledCheckbox } from './LabledCheckbox';

interface UnderSeatProps {
  appStateHandleCheck: any
}

const labels = [
  "Test Light / Ear Protection x 2 / Duct Tape x 2",
  "Hard Hats with Safety Vest Inside x 3",
  "Antifreeze Jug Green/Orange",
  "Oil Pads Minimum 10",
  "First Aid Kit / Fire Extinguisher",
  "Stop / Slow Sign Behind Seat",
  "Honk Horn Exit"
]

export const UnderSeat = (props: UnderSeatProps) => (
      <div className="under-seat">
        <h3>Interior Under Seat Check</h3>
        {labels.map((label, idx) => (
          <LabledCheckbox key={idx} idx={idx} label={label} text="" appStateHandleCheck={props.appStateHandleCheck}/>
        ))}
      </div>
    );
