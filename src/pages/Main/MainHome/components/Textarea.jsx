// import { StyleProps } from '../../types/types';
import TextareaAutosize from "react-textarea-autosize";

const Textarea = ({ style, onChange }) => {
  return (
    <div className={style.Input}>
      <TextareaAutosize
        maxLength={45}
        placeholder="Write a task"
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
