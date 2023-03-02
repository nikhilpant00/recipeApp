import React from 'react'
import NavBar from './NavBar'

function Layout({children}) {
  return (
    <div className=''>
        <header>
            <NavBar />
        </header>
        <main>
            {children}
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Layout