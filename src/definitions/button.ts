export type ButtonRef = HTMLButtonElement
export type ButtonType = 'submit' | 'button'

export interface ButtonProps {
  id?: string
  className?: string
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  type?: ButtonType
  isLoading?: boolean
  startAdornment?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
