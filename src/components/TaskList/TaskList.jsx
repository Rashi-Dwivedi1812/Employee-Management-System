import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start py-5 gap-5 flex-nowrap mt-10'>
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompletedTask key={idx} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={idx} data={e}/>
            }
        })}
    </div>
  )
}

export default TaskList