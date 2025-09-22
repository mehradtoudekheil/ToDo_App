import React from 'react'
// import AddItemForm from './AddItemForm'
import AddItemForm from './AdditemForm'


function AddItemsSection() {
  return (
    <div className='h-full col-span-12 lg:col-span-3 hidden lg:block'>
        <div className='w-full h-full flex flex-col items-center border-r-2 border-gray-300 bg-slate-50 dark:bg-slate-800'>
            <h1 className='text-center font-bold text-fuchsia-600 text-3xl pt-5'>
                ToDooooo!!!
            </h1>
            <AddItemForm/>
        </div>
    </div>
  )
}

export default AddItemsSection