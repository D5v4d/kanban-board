import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../pages/Main/MainHome/components/TaskList";

describe("TaskList Component", () => {
  test("Adding a task when clicking on the Add Task button, entering text in the field and sending it when clicking on the Submit button", () => {
    // Рендерим компонент
    render(<TaskList />);

    // Находим кнопку "Add Task" для Backlog
    const addTaskButton = screen.getByText("Add Task");

    // Нажимаем на кнопку "Add Task"
    fireEvent.click(addTaskButton);

    // Проверяем, что появилось поле для редактирования (Textarea)
    const textarea = screen.getByPlaceholderText(/Write a task/i);
    expect(textarea).toBeInTheDocument();

    // Вводим название задачи
    const taskName = "New Task";
    fireEvent.change(textarea, { target: { value: taskName } });

    // Находим кнопку Submit
    const submitButton = screen.getByText("Submit");

    // Нажимаем на кнопку Submit
    fireEvent.click(submitButton);

    // Проверяем, что задача появилась в Backlog
    const taskInBacklog = screen.getByText(taskName);
    expect(taskInBacklog).toBeInTheDocument();
  });
});