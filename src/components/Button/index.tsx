import { ReactNode } from 'react';
import { DefaultButton } from './styles'

interface DefaultButtonProps {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
}

export const Button = ({ children, onClick, disabled }: DefaultButtonProps) => {

  return (
    <DefaultButton onClick={onClick} disabled={disabled}>
      {children}
    </DefaultButton>
  )

}