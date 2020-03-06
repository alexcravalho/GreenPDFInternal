import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { BeforeStartup } from './BeforeStartup';
import { InsideFromDrivers } from './InsideFromDrivers';
import { UnderSeat } from './UnderSeat';
import { OutsideDriver } from './OutsideDriver';
import { TruckDriver } from './TruckDriver';
import { Back } from './Back';
import { InTruckBox } from './InTruckBox';
import { PassengerSide } from './PassengerSide';
import { SubmitButton } from './SubmitButton';

interface AppState {
  driver: string,
  truck: string,
  date: string
}

export class Form extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      driver: '',
      truck: '',
      date: ''
    }
  }

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const printForm = document.getElementById('app');
    html2canvas(printForm)
      .then(canvas => {
        const formImage = canvas.toDataURL('image/png');
        axios.post('/pdf', {
          image: formImage,
          // name:
        })
        .then((response) => { console.log(response) })
        .catch((err) => { console.log(err) })
      });
  };

  render() {
    return (
      <div className="full-form">
        <div className="column-container">
            <div className="form-left-column">
              <BeforeStartup />
              <InsideFromDrivers />
              <UnderSeat />
              <OutsideDriver />
            </div>
            <div className="form-right-column">
              <TruckDriver handleChange={this.handleChange}/>
              <Back />
              <InTruckBox />
              <PassengerSide />
            </div>
        </div>
        <div className="submission">
          {/* <SubmitButton handleSubmit={this.handleSubmit}/> */}
        </div>
      </div>
    )
  }
};
