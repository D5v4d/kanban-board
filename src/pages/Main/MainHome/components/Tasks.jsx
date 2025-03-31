import { Link } from 'react-router-dom';

const Tasks = ({ taskList, index, style }) => {
  const firstKey = Object.keys(taskList)[index];

  return (
    <>
      {taskList[firstKey]?.length > 0 && (
        <div className={style.Tasks}>
          {taskList[firstKey].map((e, index) => (
            <Link to={`/tasks/${e.id}`} key={index} className={style.Task} state={e}>
              {e.taskName}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Tasks;