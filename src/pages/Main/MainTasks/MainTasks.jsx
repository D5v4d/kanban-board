import StyleTasks from "../../../styles/MainTasks.module.scss";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainTasks = () => {
  const { datataskList, setDatataskList } = useContext(DataContext);
  const location = useLocation();
  const { state } = location;

  const [edit, setEdit] = useState(false);
  const [textTitle, setTextTitle] = useState("");
  const [textTask, setTextTask] = useState("");

  useEffect(() => {
    if (datataskList && state) {
      for (let key in datataskList) {
        const item = datataskList[key].find((item) => item.id === state.id);
        if (item) {
          setTextTitle(item.taskName);
          setTextTask(item.taskText);
          break;
        }
      }
    }
  }, [datataskList, state]);

  const isOpenEdit = () => {
    // Переключаем состояние edit
    if (textTitle === "") return;

    setEdit(!edit);

    if (edit) {
      // Обновляем datataskList только если edit становится true
      const updatedDataForFooter = { ...datataskList };

      for (let key in updatedDataForFooter) {
        updatedDataForFooter[key] = updatedDataForFooter[key].map((item) =>
          item.id === state.id
            ? { ...item, taskName: textTitle, taskText: textTask }
            : item
        );
      }
      // Обновляем глобальное состояние
      setDatataskList(updatedDataForFooter);
    }
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(datataskList));
  }, [datataskList]);
  return (
    <main className={StyleTasks.MainTasks}>
      <div className={StyleTasks.TasksConteiner}>
        <div className={StyleTasks.Task}>
          {edit ? (
            <>
              <textarea
                maxLength={45}
                defaultValue={textTitle}
                onChange={(e) => setTextTitle(e.target.value)}
                placeholder="Write a task"
                className={`${StyleTasks.TitleTask} ${
                  textTitle === "" ? StyleTasks.TextTaskError : ""
                }`}
                name="TitleTask"
                id=""
              ></textarea>
              <textarea
                placeholder="Write a description of the task"
                defaultValue={textTask}
                onChange={(e) => setTextTask(e.target.value)}
                className={StyleTasks.TextTask}
                name="TextTask"
                id=""
              ></textarea>
            </>
          ) : (
            <>
              <h1>{textTitle}</h1>
              <p>
                {textTask === "" ? "This task has no description" : textTask}
              </p>
            </>
          )}
        </div>
        <Link to={"/"} className={StyleTasks.Сlose}></Link>
        <button onClick={isOpenEdit} className={StyleTasks.Сhange}>
          Edit
        </button>
      </div>
    </main>
  );
};

export default MainTasks;
