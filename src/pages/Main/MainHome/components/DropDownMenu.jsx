import { useState } from "react";

const DropDownMenu = ({ setIsOpen, setTaskList, taskList, index, style }) => {
  const [isOpenDropDownMenu, setIsOpenDropDownMenu] = useState(false);
  const previousKey = Object.keys(taskList)[index - 1];
  const currentKey = Object.keys(taskList)[index];

  const tasksList = () => {
    if (taskList[previousKey].length !== 0) {
      setIsOpenDropDownMenu(!isOpenDropDownMenu);
    }
  };

  const movingTasks = (id, taskName,  taskText) => {
    setIsOpen((prev) => ({
      ...prev,
      [currentKey]: !prev[currentKey],
    }));

    setTaskList((prev) => {
      const updatedCurrentKey = [...prev[currentKey], { id, taskName,  taskText }];
      const updatedPreviousKey = prev[previousKey].filter(
        (item) => item.id !== id
      );
      return {
        ...prev,
        [currentKey]: updatedCurrentKey,
        [previousKey]: updatedPreviousKey,
      };
    });
  };

  return (
    <>
      <button onClick={tasksList} className={style.DropDownMenu}>
        <div className={style.arrowDropDown}></div>
      </button>
      {!isOpenDropDownMenu ? (
        <ul className={style.DropDownList}>
          {taskList[previousKey].map((task) => (
            <li key={task.id}>
              <button onClick={() => movingTasks(task.id, task.taskName, task.taskText)}>
                {task.taskName}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default DropDownMenu;
