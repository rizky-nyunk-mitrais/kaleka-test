import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import useScreenSize from '../../helpers/UseScreenSize';
import Images from '../../assets/images';

function Header() {
  const navigate = useNavigate()

  const {width} = useScreenSize()

  const headerMenu = [
    {
      label: 'BERANDA',
      link: '/'
    },
    {
      label: 'TENTANG KAMI',
      link: '/about'
    }
  ]
  

  return (
    <div className='relative w-screen flex p-4 bg-black justify-center h-24'>
      <img className='absolute top-4 left-6 cursor-pointer' onClick={() => navigate('/')} src={Images.Logo} alt="Logo" />
      {
        width >= 1280 &&
        <ul className='text-kalekaYellow flex grid-rows-2 gap-11 text-center items-center'>
        {
          headerMenu.map((menus, id) => (
            <li 
              key={id}
              className='cursor-pointer text-xl font-bold'
              onClick={() => navigate(menus.link)}
            >
              {menus.label}
            </li>
          ))
        }
      </ul>
      }
      {
        width < 1280 &&
        <Menu 
          right
        >
          {
            headerMenu.map((menus, id) => (
              <li 
                key={id}
                className='text-kalekaYellow cursor-pointer text-2xl font-bold pb-8'
                onClick={() => navigate(menus.link)}
              >
                {menus.label}
              </li>
            ))
          }
        </Menu>
      }
    </div>
  )
}

export default Header