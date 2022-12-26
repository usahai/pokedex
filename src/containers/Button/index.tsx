import clsx from 'clsx'
import Spinner from 'components/Spinner'
import { ButtonProps, ButtonRef } from 'definitions/button'
import React from 'react'

const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      id,
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
      id={id}
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
