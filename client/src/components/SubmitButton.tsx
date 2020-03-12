import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

interface SubmitButtonProps {
  handleSubmit: any
}

export const SubmitButton = (props: SubmitButtonProps) => (
      <div className="submit">
        <Button variant="contained" color="primary" size="large" onClick={(event: React.MouseEvent<HTMLButtonElement>) => { props.handleSubmit() }}>Submit</Button>
      </div>
);