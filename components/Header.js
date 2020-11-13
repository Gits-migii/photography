import React, { useState } from 'react';
import style from './Header.module.scss';
import Link from 'next/link';



const Header = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className={style.header_cnt}>
      <header>
        <h1 className={style.logo}><Link href="/"><a>Atsushi Ito</a></Link></h1>

        {/* <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'isShow btn' : 'btn'}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        {/* {isOpen &&

          <nav className={style.nav_list}>
            <ul>
              <li>
                <Link href="/profile"><a>PROFILE</a></Link>
              </li>
              <li>
                <Link href="/portrait"><a>PORTRAIT</a></Link>
              </li>
              <li>
                <Link href="/music"><a>MUSIC</a></Link>
              </li>
              <li>
                <Link href="/other"><a>OTHER</a></Link>
              </li>
              <li>
                <Link href="/contact"><a>CONTACT</a></Link>
              </li>
            </ul>
          </nav>
        } */}
        <nav className={style.nav_list}>
          <ul>
            <li>
              <Link href="/profile"><a>PROFILE</a></Link>
            </li>
            <li>
              <Link href="/portrait"><a>PORTRAIT</a></Link>
            </li>
            <li>
              <Link href="/music"><a>MUSIC</a></Link>
            </li>
            <li>
              <Link href="/other"><a>OTHER</a></Link>
            </li>
            <li>
              <Link href="/contact"><a>CONTACT</a></Link>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  )
}

export default Header