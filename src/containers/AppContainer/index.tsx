import React from 'react'

interface AppContainerProps {
  children: React.ReactNode
  ref?: React.MutableRefObject<any>
}

const AppContainer: React.FC<AppContainerProps> = ({ children, ref }) => (
  <div className="max-xl:max-w-7xl flex justify-center pt-8" ref={ref}>
    {children}
  </div>
)

export default AppContainer
