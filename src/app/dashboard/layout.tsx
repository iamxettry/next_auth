import React from 'react'

const DashboarLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <nav>dashboard Navbar</nav>
        {children}
        
    </div>
  )
}

export default DashboarLayout