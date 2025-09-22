import React from 'react'
import AddItemsSection from './AddItemsSection'
import ListsContainer from './ListsContainer'
import RespHeader from './RespHeader'

function Content() {
  return (
    <div className='min-h-screen w-full bg-gray-100 grid grid-cols-12 relative'>
      <RespHeader/>
      <AddItemsSection/>
      <ListsContainer/>
    </div>
  )
}

export default Content