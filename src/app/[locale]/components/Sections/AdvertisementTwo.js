import '@/app/[locale]/scss/sections/storiesSection.scss'
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from 'react-bootstrap';

// Assets
import AdvertisementTwoImage from '../../../../../public/advertisement/advertisement-two.png'

const AdvertisementTwo = () => {
  return (
    <div className='add-two-wrapper mb-5'>
      <Image src={AdvertisementTwoImage} height={400} width={1400} alt='add-two' />
    </div>
  )
}

export default AdvertisementTwo;