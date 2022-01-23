import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (<>
    <Task tasks = {tasks}/>
  </>);
};

export default Tasks;

//{tasks.map((task) => (<Task key={task.id} task={task}/>))}