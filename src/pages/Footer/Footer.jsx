import styleHeader from "../../styles/Footer.module.scss";
import { DataContext } from "../../App";
import { useContext } from "react";

const Footer = () => {
  const { datataskList } = useContext(DataContext);

  return (
    <footer className={styleHeader.Footer}>
      <div className={styleHeader.NumberTasks}>
        <span>Active tasks: {datataskList.Backlog?.length || 0}</span>
        <span>Finished tasks: {datataskList.Finished?.length || 0}</span>
      </div>
      <div className={styleHeader.KanbanBoard}>Kanban board</div>
    </footer>
  );
};

export default Footer;
