import { styled, Box } from '@mui/material'

export const AppBar = styled(Box)(({ theme }) => ({
  zIndex: theme.zIndex.appBar,
  width: '100%',
  position: 'sticky',
  transition: 'top 0.7s ease-in-out',
}))
