import { render, screen, fireEvent } from "@testing-library/react";
import Textarea from "../pages/Main/MainHome/components/Textarea";


describe("Textarea Component", () => {
  test("renders Add Task button correctly and calls onClick when clicked", () => {
    // имитация функции
    const handleChange = jest.fn();

    render(<Textarea style={`Input`} onChange={handleChange} />);

    //находим элемент textarea ввод текста 
    const textareaElement = screen.getByPlaceholderText(/Write a task/i);
    // Проверяем, что элемент отображается
    expect(textareaElement).toBeInTheDocument();

    // Вводим текст в поле
    fireEvent.change(textareaElement, { target: { value: 'Hello World' } });

    // Проверяем, что функция onChange была вызвана
    expect(handleChange).toHaveBeenCalledTimes(1);

    // Проверяем, что значение в textarea установлено корректно
    expect(textareaElement).toHaveValue('Hello World');

  });
});
 