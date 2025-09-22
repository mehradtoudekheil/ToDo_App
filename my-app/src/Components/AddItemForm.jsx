import { useRef, useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";


function AddItemForm() {


  // states 
  const [showReminder, setShowReminder] = useState(false);

  // elements refs
  let todoTitle = useRef();
  let todoExplane = useRef();
  let myRange = useRef();
  let todoDate = useRef();
  let todoTime = useRef();
  let todoNotif = useRef();
  let todoRing = useRef();

  // functions

  const ShowReminderHandler = () => {
    setShowReminder(!showReminder);
  }

  const rangeChangeHandler = () => {
    console.log("0");

  }



  return (
    <div className='mt-5 w-10/12'>
      <form className='w-full flex flex-col items-center'>
        {/* title  */}
        <div className='w-full'>
          <input ref={todoTitle} type="text" placeholder='Title : ' className='h-10 w-full  rounded-xl p-3 shadow-md shadow-slate-200 outline-fuchsia-600 dark:shadow-gray-700 dark:bg-gray-300 dark:outline-slate-800' />
        </div>
        {/* Info */}
        <div className='w-full mt-5'>
          <p className='text-xs text-indigo-700 dark:text-fuchsia-600 ml-3'>
            Explane Your Task Here:
          </p>
          <textarea ref={todoExplane} className="h-24 mt-3 w-full  rounded-xl p-3 shadow-md shadow-slate-200 outline-fuchsia-600 dark:shadow-gray-700 dark:bg-gray-300 dark:outline-slate-800" name="" id="" placeholder='What You Should Do???'></textarea>
        </div>
        {/* importance */}
        <div className='w-full mt-5'>
          <p className='text-xs text-indigo-700 dark:text-fuchsia-600 ml-3'>
            Task Importance Level :
          </p>
          <input ref={myRange} type="range" min="1" max="100" className='w-full mt-3' id="myRange" onChange={rangeChangeHandler} />

          <div className='w-full flex justify-between'>
            <p className='text-xs text-slate-400'>Not Important</p>
            <div className='w-10 h-10 border-8 rounded-full flex justify-center items-center mt-3' id='circle'>
              <p className="text-xs dark:text-white text-slate-600">
                0
              </p>
            </div>
            <p className='text-xs text-slate-400'>Very Important</p>
          </div>

        </div>

        {/* reminder */}

        <div className='w-full mt-10'>

          <div className='w-full flex justify-between px-3'>
            <p className="text-indigo-800 text-md">Reminder</p>
            {
              showReminder ? <FaToggleOn className='text-fuchsia-600 text-xl mt-1 cursor-pointer' onClick={ShowReminderHandler} /> : <FaToggleOff className='text-slate-600 text-xl mt-1 cursor-pointer' onClick={ShowReminderHandler} />
            }
          </div>
          <div className='w-full mt-7 flex justify-between'>
            <input ref={todoDate} type="date" className={`shadow shadow-md  p-1 rounded-xl text-fuchsia-600 outline-fuchsia-600 dark:bg-gray-300 dark:shaddow-gray-700 shadow-slate-200 ${!showReminder && "text-slate-300"}`} disabled={!showReminder && true} />
            <input ref={todoDate} type="time" className={`shadow shadow-md  p-1 rounded-xl text-fuchsia-600 outline-fuchsia-600 dark:bg-gray-300 dark:shaddow-gray-700 shadow-slate-200 ${!showReminder && "text-slate-300"}`} disabled={!showReminder && true} />
          </div>
          <div className='w-full mt-7'>
            <p className={`text-indigo-800 dark:text-fuchsia ml-3 text-md ${!showReminder && "text-slate-300"}`}>
              How Remind You?
            </p>
            <div className='w-full mt-5 flex justify-around px-3'>
              <div>
                <input disabled={!showReminder && true} ref={todoRing} type="radio" id='ring' className='mr-1' name='reminderOption' />
                <label htmlFor="ring" className={`${showReminder ? "text-fuchsia-600" : "text-slate-200"}`} >
                  Ring
                </label>
              </div>
              <div>
                <input disabled={!showReminder && true} ref={todoNotif} type="radio" id='notification' className='mr-1' name='reminderOption' />
                <label htmlFor="notification" className={`${showReminder ? "text-fuchsia-600" : "text-slate-200"}`}  >
                  Notification
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* submit button */}
        <button className='mt-10 w-full h-10 bg-fuchsia-600 rounded-md text-white font-bold hover:bg-fuchsia-700 transition-all duration-300 cursor-pointer'>
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddItemForm