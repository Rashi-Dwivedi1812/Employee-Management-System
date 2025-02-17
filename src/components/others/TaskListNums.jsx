import React from 'react'

const TaskListNums = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
        <div className='p-10 rounded-xl py-6 px-9 w-[45%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p-10 rounded-xl py-6 px-9 w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold text-black'>{data.taskNumber.completed}</h2>
            <h3 className='text-xl font-medium text-black'>Completed Task</h3>
        </div>
        <div className='p-10 rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='p-10 rounded-xl py-6 px-9 w-[45%] bg-green-400'>
            <h2 className='text-3xl font-semibold text-black'>{data.taskNumber.failed}</h2>
            <h3 className='text-xl font-medium text-black'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNums