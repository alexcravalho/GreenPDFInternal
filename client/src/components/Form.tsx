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
  'Truck: ': string,
  'Driver: ': string,
  'Helper: ': string,
  'Date: ': string
}

export class Form extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      'Truck: ': '',
      'Driver: ': '',
      'Helper: ': '',
      'Date: ': ''
    }
    this.appStateChange = this.appStateChange.bind(this)
  }

  appStateChange = (name:string, value:string) => {
    this.setState({...this.state, [name]: value });
  };

  handleSubmit = () => {
    const printForm = document.getElementById('app');
    html2canvas(printForm)
      .then(canvas => {
        const formImage = canvas.toDataURL('image/png');
        axios.post('/pdf', {
          image: formImage,
          truck: this.state['Truck: '],
          driver: this.state['Driver: '],
          date: this.state['Date: ']
          // fileName: this.state['Truck: '] + this.state['Driver: '] + this.state['Date: ']
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
              <TruckDriver appStateChange={this.appStateChange}/>
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
