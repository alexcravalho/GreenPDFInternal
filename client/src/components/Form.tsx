import React, { Component } from 'react';
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
import '../dist/styles.css';

interface AppState {
  truck: string,
  driver: string,
  helper: string,
  date: string,
  notes: string,
  lsd: string,
  ins: string,
  filter: string,
  coupler: string,
  tabs: string,
  pre: string,
  lube: string,
  product: string
}

export class Form extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      truck: '',
      driver: '',
      helper: '',
      date: '',
      notes: '',
      lsd: '',
      ins: '',
      filter: '',
      coupler: '',
      tabs: '',
      pre: '',
      lube: '',
      product: ''
    }
    this.appStateChange = this.appStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  appStateChange = (event: React.ChangeEvent<HTMLInputElement>, name:string) => {
    this.setState({...this.state, [name]: event.target.value });
  };

  appStateHandleCheck = (event: React.ChangeEvent<HTMLInputElement>, name:string) => {
    this.setState({...this.state, [name]: event.target.checked});
  };

  handleSubmit = () => {
    const createdName = this.createFileName(this.state.truck, this.state.driver, this.state.date);
    type Options = {
      [key: string]: any
    }
    const s: Options = this.state;
    const data: Options = {
      createdName,
      inputs: {},
      checkboxes: {}
    };
    for (let key in s) {
      if (typeof s[key] === 'boolean') {
        const newKey = '.' + key
        data.checkboxes[newKey] = s[key]
      }
      if (typeof s[key] === 'string') {
        const newKey = '.' + key
        data.inputs[newKey] = s[key]
      }
    }
    axios.post('/pdf', data)
      // .then(res => { console.log(res) })
      // .catch(err => { console.log(err) })
  };

  createFileName = (t: string, dr: string, da: string) => {
    if (t.includes(' ')) {
      t = t.split(' ').join('');
    }
    if (dr.includes(' ')) {
      dr = dr.split(' ').join('');
    }
    if (da.includes(' ')) {
      da = da.split(' ').join('');
    }
    if (da.includes('/')) {
      da = da.split('/').join('-');
    }
    return `${t}-${dr}-${da}.pdf`;
  }

  render() {
    return (
      <div className="full-form">
        <div className="column-container">
            <div className="form-left-column">
              <BeforeStartup notes={this.state.notes} appStateChange={this.appStateChange} appStateHandleCheck={this.appStateHandleCheck}/>
              <InsideFromDrivers lsd={this.state.lsd} ins={this.state.ins} appStateChange={this.appStateChange} appStateHandleCheck={this.appStateHandleCheck}/>
              <UnderSeat appStateHandleCheck={this.appStateHandleCheck}/>
              <OutsideDriver filter={this.state.filter} coupler={this.state.coupler} appStateChange={this.appStateChange} appStateHandleCheck={this.appStateHandleCheck} />
            </div>
            <div className="form-right-column">
              <TruckDriver truck={this.state.truck} driver={this.state.driver} date={this.state.date} appStateChange={this.appStateChange}/>
              <Back tabs={this.state.tabs} pre={this.state.pre} appStateChange={this.appStateChange} appStateHandleCheck={this.appStateHandleCheck}/>
              <InTruckBox appStateHandleCheck={this.appStateHandleCheck}/>
              <PassengerSide lube={this.state.lube} product={this.state.product} appStateChange={this.appStateChange} appStateHandleCheck={this.appStateHandleCheck}/>
            </div>
        </div>
        <div className="submission">
          <SubmitButton handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
};