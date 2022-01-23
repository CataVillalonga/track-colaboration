import {FaTimes} from 'react-icons/fa'
const Task = ({tasks}) => {
  return (
    <div>
      {tasks.map(task =><div className="task" key = {task.id}><h3>{task.text}<FaTimes style={{color: 'red'}} /></h3> <p>{task.day}</p> </div>)}
    </div>
  );
};

export default Task;

//       {tasks.map(task => <h3>{task.text}</h3>)}