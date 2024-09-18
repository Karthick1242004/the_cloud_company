import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className='flex flex-row justify-between px-8 py-3 bg-slate-50'>
        <div>
            <img className='w-[40%]' src="https://tcc.quest/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftcc-logo.10d4643c.png&w=384&q=75" alt="TCC LOGO" />
        </div>
        <div className='mt-2'>
        <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>
    </div>
  )
}

export default Header
