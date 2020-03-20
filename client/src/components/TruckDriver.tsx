import React from 'react';
import { FormLabel, FormGroup, TextField } from '@material-ui/core';

interface TruckDriverProps {
  appStateChange: any,
  truck: string,
  driver: string,
  date: string
}

export const TruckDriver = (props: TruckDriverProps) => (
      <div className="truck-driver">
        <FormGroup row>
            <div className="truck-label">
              <FormLabel style={{ color: 'black', fontSize: 24, fontWeight: 500, lineHeight: '1.2' }}>Truck: </FormLabel>
              <TextField className="truck" value={props.truck} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {props.appStateChange(event, 'truck')}} />
            </div>
            <div className="truck-label">
              <FormLabel style={{ color: 'black', fontSize: 24, fontWeight: 500, lineHeight: '1.2' }}>Driver: </FormLabel>
              <TextField className="driver" value={props.driver} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {props.appStateChange(event, 'driver')}} />
            </div>
        </FormGroup>
        <FormGroup row>
            <div className="truck-label">
              <FormLabel style={{ color: 'black', fontSize: 24, fontWeight: 500, lineHeight: '1.2' }}>Helper: </FormLabel>
              <TextField className="helper" onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {props.appStateChange(event, 'helper')}}/>
            </div>
            <div>
              <FormLabel style={{ color: 'black', fontSize: 24, fontWeight: 500, lineHeight: '2.5' }}>Date: </FormLabel>
              <TextField className="date"label="MM/DD/YYYY" onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {props.appStateChange(event, 'date')}} />
            </div>
        </FormGroup>
      </div>
    );