import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

interface SubmitButtonProps {
  handleSubmit: any
}

const StyledButton = styled(Button)({
  background: '#ee1d23',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export const SubmitButton = (props: SubmitButtonProps) => (
      <div className="submit">
        <StyledButton fullWidth={true} variant="contained" size="large" onClick={(event: React.MouseEvent<HTMLButtonElement>) => { props.handleSubmit() }}>Submit</StyledButton>
      </div>
);
