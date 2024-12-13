import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isdark , setIsdark] = useState(()=>{
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true';
  })
  useEffect(()=>{
           const savedMode = localStorage.getItem('isDarkMode') ==='true';
            document.body.classList.toggle("dark" , savedMode ); 

  }, [])
    
    const  totooglefunc = function() {
      document.body.classList.toggle("dark"); 

      const newMode = !isdark
      setIsdark(newMode)
      localStorage.setItem('isDarkMode', newMode.toString() );
    }
  return (
    <div className="header-container">
        <header>
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-change" onClick={ totooglefunc } 
            >
            <i className={`fa-regular fa-${isdark ? 'sun' : 'moon' }`} /> 
            &nbsp; {isdark? 'Light' : 'Dark'}  mode
          </p>
        </header>
      </div>
  )
}
