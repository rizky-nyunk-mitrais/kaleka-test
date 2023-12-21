import React from 'react'

import useScreenSize from '../../helpers/UseScreenSize';

function Banner(props: { label: string | null }) {
  const {width} = useScreenSize()

  return (
    <div className="h-52 w-screen flex justify-center text-center items-center bg-banner bg-center bg-cover bg-no-repeat">
      {
        props.label &&
        <p className={`${width < 1280 ? 'text-2xl' : 'text-4xl'} text-white font-bold`}>{props.label}</p>
      }
    </div>
  )
}

export default Banner