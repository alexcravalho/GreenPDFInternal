import React, { Component } from 'react';
import Pdf from "react-to-pdf";
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

const ref = React.createRef<HTMLDivElement>();

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
    this.appStateChange = this.appStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // printForm = document.getElementById('app');
  }

  appStateChange = (name:string, value:string) => {
    this.setState({...this.state, [name]: value });
  };

  handleSubmit = () => {
    const createdName = this.createFileName(this.state['Truck: '], this.state['Driver: '], this.state['Date: ']);

    // html2canvas(printForm)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     console.log(imgData)
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'PNG', 0, 0);
    //     pdf.save(createdName);
    //     console.log('pdf created')

    //     axios.post('/pdf', {
    //       image: formImage,
    //       fileName: createdName
    //     })
    //     .then((response) => { console.log(response) })
    //     .catch((err) => { console.log(err) })
    //   });
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
    const path = `/home/acrav/ArdvarkBarkInternal/${this.handleSubmit()}`;
    return (
      <div className="full-form">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }:any) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        <div ref={ref} className="column-container">
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
          <SubmitButton handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
};