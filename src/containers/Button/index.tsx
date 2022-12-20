import clsx from 'clsx'
import Spinner from 'components/Spinner'
import React from 'react'

type Ref = HTMLButtonElement
type ButtonType = 'submit' | 'button'
interface ButtonProps {
  className?: string
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  type?: ButtonType
  isLoading?: boolean
  startAdornment?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const Button = React.forwardRef<Ref, ButtonProps>(
  (
    {
      className,
      children,
      type = 'button',
      onClick,
      isLoading = false,
      startAdornment,
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={clsx(
        'border-2 p-2 rounded-lg ease-in duration-75',
        'border-black, hover:bg-gray-700 hover:text-gray-100',
        'dark:border-white  dark:hover:bg-gray-100 dark:text-gray-100 dark:hover:text-gray-700',
        className,
      )}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {!!startAdornment && startAdornment}
          {children}
        </>
      )}
    </button>
  ),
)

export default Button
