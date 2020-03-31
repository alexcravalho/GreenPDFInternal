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
import Title from '../dist/title.webp';
import Background from '../dist/logo.webp';

interface AppState {
  dateError: boolean,
  textError: boolean,
  thanks: boolean,
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
      dateError: false,
      textError: false,
      thanks: false,
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
    this.appStateHandleCheck = this.appStateHandleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateFormat = this.dateFormat.bind(this);
    this.createFileName = this.createFileName.bind(this);
  }

  appStateChange(event: React.ChangeEvent<HTMLInputElement>, name:string) {
    this.setState({...this.state, [name]: event.target.value });
  };

  appStateHandleCheck(event: React.ChangeEvent<HTMLInputElement>, name:string) {
    this.setState({...this.state, [name]: event.target.checked});
  };

   handleSubmit() {
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
    for (const key in s) {
      if (s.hasOwnProperty(key)) {
        if (typeof s[key] === 'boolean' && key !== 'dateError' && key !== 'textError' && key !== 'thanks') {
          const newKey = '.' + key
          data.checkboxes[newKey] = s[key]
        }
        if (typeof s[key] === 'string') {
          const newKey = '.' + key;
          data.inputs[newKey] = s[key]
        }
      }
    }
    for (const key in data.inputs) {
      if (data.inputs.hasOwnProperty(key)) {
        if (key !== '.notes' && key !== '.truck' && key !== '.driver' && key !== '.helper' && key !== '.product' && key !== '.pre') {
          data.inputs[key] = this.dateFormat(data.inputs[key])
          if (data.inputs[key] === 'Invalid Date') {
            this.setState({...this.state, dateError:true});
            return;
          }
        }
        if (data.inputs['.truck'] === '' || data.inputs['.driver'] === '' || data.inputs['.helper'] === '') {
          this.setState({...this.state, textError:true });
          return;
        }
      }
    }

    this.setState({...this.state, textError:false, dateError:false, thanks:true })

    axios.post('/pdf', data)
      // tslint:disable-next-line
      .then(response => setTimeout(function() {
        window.location.reload(false);
      }, 1000))
      // tslint:disable-next-line
      .catch(err => { console.log(err) })

  };

  createFileName(t: string, dr: string, da: string) {
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

  dateFormat (s: string) {
    const format = /^\d+(-|\/|.)\d+(-|\/|.)\d+$/;
    if (!s.match(format)) {
      return 'Invalid Date';
    } else {
      const d = new Date(s);
      return d.toLocaleDateString();
    }
  }

  render() {
    return (
      <div className="full-form">
        <img className='background' src={Background} alt="logo"></img>
        <div className="header">
          <img src={Title} alt="title"></img>
        </div>
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
              {this.state.dateError && <h1>Error: Please correct date fields then click submit again</h1>}
              {this.state.textError && <h1>Error: Please correct Truck, Driver, and Helper fields then click submit again</h1>}
              {this.state.thanks && <div className="thanks">Thanks! Emailing this form to Ardvark. Please wait a minute...</div>}
            </div>
        </div>
        <div className="submission">
          <div className="submit">
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => { this.handleSubmit() }}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
};