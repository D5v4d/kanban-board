import taskAdd from "../../../../assets/svg/taskAdd.svg";

const Button = ({ onClick, style, label, disabled }) => {
    const isAddTask = label === "Add Task";

    return (
        <button
            onClick={onClick}
            className={isAddTask ? (disabled ? `${style.BtnAddActiv} ${style.BtnDisabled}`: style.BtnAddActiv) : (style.BtnSubmit)}
            disabled={disabled}
        >
            {isAddTask ? (
                <>
                    <img src={taskAdd} alt="taskAdd" />
                    <span>Add card</span>
                </>
            ) : ("Submit")}
        </button>
    );
};

export default Button;