import Tasks from "./Tasks";
import Textarea from "./Textarea";
import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import StyleTaskList from "../../../../styles/TaskList.module.scss";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../../App";
import useLocalStorage from "../../../../hooks/useLocalStorage";

const TaskListName = ["Backlog", "Ready", "In Progress", "Finished"];

const TaskList = () => {
  // Используем хук для работы с localStorage
  const [taskList, setTaskList] = useLocalStorage("taskList", {
    Backlog: [],
    Ready: [],
    InProgress: [],
    Finished: [],
  });

  const [taskName, setText] = useState("");
  const [openList, setOpenList] = useState(""); // Открытый список
  const { setDatataskList } = useContext(DataContext);

  useEffect(() => {
    setDatataskList(taskList);
  }, [setDatataskList, taskList]);

  const addTask = (listName) => {
    setOpenList(openList === listName ? "" : listName);
  };

  const submitTask = (listName) => {
    if (listName === "Backlog" && taskName.trim()) {
      setTaskList((prev) => ({
        ...prev,
        [listName]: [
          ...prev[listName],
          { id: Date.now(), taskName, taskText: "" },
        ],
      }));
      setText("");
    }
    setOpenList(""); // Закрыть форму после отправки
  };

  const isPreviousListEmpty = (index) => {
    if (index === 0) return false; // Для Backlog всегда активна
    const previousKey = TaskListName[index - 1].replace(" ", "");
    return taskList[previousKey]?.length === 0;
  };

  const renderForm = (listName, index) => {
    if (index === 0) {
      return (
        <>
          <Textarea
            style={StyleTaskList}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            onClick={() => submitTask(listName)}
            style={StyleTaskList}
            label="Submit"
          />
        </>
      );
    }
    return (
      <DropDownMenu
        setIsOpen={setOpenList}
        setTaskList={setTaskList}
        taskList={taskList}
        index={index}
        style={StyleTaskList}
      />
    );
  };

  return (
    <>
      {TaskListName.map((listName, index) => (
        <div key={listName} className={StyleTaskList.Block}>
          <span>{listName}</span>
          <Tasks taskList={taskList} index={index} style={StyleTaskList} />
          {openList !== listName ? (
            <Button
              onClick={() => addTask(listName)}
              style={StyleTaskList}
              label="Add Task"
              disabled={isPreviousListEmpty(index)}
            />
          ) : (
            renderForm(listName, index)
          )}
        </div>
      ))}
    </>
  );
};

export default TaskList;