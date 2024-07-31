import React from 'react'
import Curentwrather from './Curentwrather'
import Detailforcast from './Detailforcast'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
        <Curentwrather />
        <Detailforcast />
      </div>
    </div>
  )
}

export default Dashboard
