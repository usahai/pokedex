import React from 'react'
import clsx from 'clsx'

interface AppContainerProps {
  children: React.ReactNode
  className?: string
  ref?: React.MutableRefObject<any>
}

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  className,
  ref,
}) => (
  <div
    id="app-container"
    className={clsx(
      'flex max-w-screen-2xl mx-auto p-8 min-h-[calc(100vh-5rem)]',
      className,
    )}
    ref={ref}
  >
    {children}
  </div>
)

export default AppContainer
