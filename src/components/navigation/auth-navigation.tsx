import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Đăng nhập
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Đăng ký</StyledButton>
    </Box>
  )
}

export default AuthNavigation
