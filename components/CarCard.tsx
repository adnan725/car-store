import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { CustomButton } from '.'

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car } : CarCardProps) => {

    const { city_mpg,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year } = car

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h1 className='car-card__content-title'>
                {make} {model}
            </h1>
        </div>
    </div>
  )
}

export default CarCard