import StyleMain from "../../../styles/MainHome.module.scss";
import TaskList from "./components/TaskList";


const MainHome = () => {
    return (
        <main className={StyleMain.Conteiner}>
            <TaskList />
        </main>
    )
}

export default MainHome;