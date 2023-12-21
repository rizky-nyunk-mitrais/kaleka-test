import React from 'react'

import {
  Header,
  Banner,
  Map
} from '../../components'

function About() {
  return (
    <div className='w-screen'>
      <Header/>
      <Banner label={'TENTANG KAMI'}/>
      <div className='py-9 px-16'>
        <p className='text-lg pb-8'>
          Kaleka (formerly Yayasan Inobu) is an Indonesian, non-profit organization that strives towards the sustainable management of Indonesia’s landscapes and seascapes for the benefit of local and indigenous communities. Founded in 2014, Kaleka is a women-led organization, where the Executive Director and majority of managers and staff are women. With over 60 staff now, our staff represent the diversity of peoples in the Indonesian archipelago, all committed to upholding human rights and protecting the environment. Kaleka’s thematic strengths are in the areas of sustainable sourcing, conservation and restoration, agri-food systems, community development and environmental and social governance.
        </p>
        <p className='text-lg pb-8'>
          At the heart of Kaleka’s approach, is the concept of Collaborative, Action Research. Before commencing any work, we work with our partners, including the government at the national and sub-national levels, civil society organizations, producer, manufacturing and consumer-facing companies, universities, farmers and local communities, to identify their priorities. Through researching best practices in science, while incorporating local and indigenous knowledge, we test, implement, evaluate and refine innovations. This approach ensures the acceptability and relevance of interventions to local partners while also allowing us to scale nationally.
        </p>
        <p className='text-lg pb-8'>
          <p className='font-bold underline'>Vision</p>
          Aspire for an Indonesia where land and seascapes are managed sustainably and benefit the communities that depend on them.
        </p>
        <p className='text-lg pb-8'>
          <p className='font-bold underline'>Mission</p>
          Improve public policies and strengthen civil society through innovative research, policy analysis, technology and alliance-building to sustainably manage Indonesia’s natural resources and agricultural production system, throughout the life-cycle of products.
        </p>
        <p className='text-lg pb-8'>
          <p className='font-bold underline'>Purpose</p>
          To work with farmers, including younger generations, to protect nature.
          <br />
          We aim to achieve our vision and mission through our four strategic initiatives.
        </p>
      </div>
    </div>
  )
}

export default About