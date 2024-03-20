import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <nav>
            auth nav
        </nav>
        {children}</div>
  )
}

export default layout