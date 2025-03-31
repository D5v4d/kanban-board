import { render, screen, fireEvent } from "@testing-library/react";
import taskAdd from "../assets/svg/taskAdd.svg";
import Button from "../pages/Main/MainHome/components/Button";

const mockStyles = {
  BtnAddActiv: "btn-add-activ",
  BtnSubmit: "btn-submit",
  BtnDisabled: "btn-disabled",
};
describe("Button Component", () => {
  test("renders Add Task button correctly and calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        style={mockStyles}
        label="Add Task"
        disabled={false}
      />
    );

    // Находим, кнопку
    const buttonElement = screen.getByRole("button");
    // Проверяем, что кнопка отображается
    expect(buttonElement).toBeInTheDocument();
    // Проверяем, что текст "Add card"
    expect(buttonElement).toHaveTextContent("Add card");

    // Находим, img элемент с Alt в котором текст taskAdd
    const imgElement = screen.getByAltText("taskAdd");
    // Проверяем, img элемент отображается
    expect(imgElement).toBeInTheDocument();
    // Проверяем, что установлен правильны путь к изображению 
    expect(imgElement).toHaveAttribute("src", taskAdd);
    // Проверяем, что кнопка не отключена
    expect(buttonElement).not.toBeDisabled();

    // Имитируем клик на кнопку
    fireEvent.click(buttonElement);
    // Проверяем, что обработчик был вызван
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders Submit button correctly and calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        style={mockStyles}
        label="Submit"
        disabled={false}
      />
    );

    // Находим, кнопку
    const buttonElement = screen.getByRole("button");
    // Проверяем, что кнопка отображается
    expect(buttonElement).toBeInTheDocument();
    // Проверяем, что текст "Submit" отображаются
    expect(buttonElement).toHaveTextContent("Submit");
    // Проверяем, что кнопка не отключена
    expect(buttonElement).not.toBeDisabled();

    // Имитируем клик на кнопку
    fireEvent.click(buttonElement);
    // Проверяем, что обработчик был вызван
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disabled prop is true", () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        style={mockStyles}
        label="Add Task"
        disabled={true}
      />
    );

    // Находим, кнопку
    const buttonElement = screen.getByRole("button");
    // Проверяем, что кнопка отключена
    expect(buttonElement).toBeDisabled();
  });

  test("applies correct styles for disabled Add Task button", () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        style={mockStyles}
        label="Add Task"
        disabled={true}
      />
    );

    // Находим, кнопку
    const buttonElement = screen.getByRole("button");
    // Проверяем отоброжение стилей при отключенной и включенной кнопке
    expect(buttonElement).toHaveClass(mockStyles.BtnAddActiv);
    expect(buttonElement).toHaveClass(mockStyles.BtnDisabled);
  });

  test("applies correct styles for Submit button", () => {
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        style={mockStyles}
        label="Submit"
        disabled={false}
      />
    );

    // Находим, кнопку
    const buttonElement = screen.getByRole("button");
    // Проверяем отоброжение стилей при включенной кнопке
    expect(buttonElement).toHaveClass(mockStyles.BtnSubmit);
  });
});