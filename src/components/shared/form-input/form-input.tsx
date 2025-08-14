import React, { FunctionComponent } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export const FormInput: FunctionComponent<TextFieldProps> = ({ ...props }) => {
  return (
    <TextField
      sx={{
        '& .MuiOutlinedInput-root': {
          input: {
            zIndex: 11,
            color: 'rgba(255, 255, 255, 0.5)',
            '&:focus': {
              color: 'black',
            },
          },
          '& fieldset': {
            zIndex: 10,
            borderRadius: '100px',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            boxShadow: '14px 14px 50px -7px rgba(6, 18, 55, 0.08)',
            height: 60,
            mb: 0,
            mr: '10px',
            pb: '10px',
            pl: '24px',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#3898ec',
            backgroundColor: 'white',
            boxShadow: 'none',
            outlined: 0,
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
        },
      }}
      {...props}
    />
  )
}

FormInput.displayName = 'FormInput'
