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

  // onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({...this.state, [name]: event.target.value })
  // }

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const createdName = this.createFileName(this.state.truck, this.state.driver, this.state.date);
    let s = this.state;
    let data = {
      createdName: createdName,
      inputs: {
        '.truck': s.truck,
        '.driver': s.driver,
        '.helper': s.helper,
        '.date': s.date,
        '.notes': s.notes,
        '.lsd': s.lsd,
        '.ins': s.ins,
        '.filter': s.filter,
        '.coupler': s.coupler,
        '.tabs': s.tabs,
        '.pre': s.pre,
        '.lube': s.lube,
        '.product': s.product
      }
    };
    axios.post('/pdf', data)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
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
              <BeforeStartup notes={this.state.notes} appStateChange={this.appStateChange}/>
              <InsideFromDrivers lsd={this.state.lsd} ins={this.state.ins} appStateChange={this.appStateChange} />
              <UnderSeat />
              <OutsideDriver filter={this.state.filter} coupler={this.state.coupler} appStateChange={this.appStateChange} />
            </div>
            <div className="form-right-column">
              <TruckDriver truck={this.state.truck} driver={this.state.driver} date={this.state.date} appStateChange={this.appStateChange}/>
              <Back tabs={this.state.tabs} pre={this.state.pre} appStateChange={this.appStateChange}/>
              <InTruckBox />
              <PassengerSide lube={this.state.lube} product={this.state.product} appStateChange={this.appStateChange}/>
            </div>
        </div>
        <div className="submission">
          <SubmitButton handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
};