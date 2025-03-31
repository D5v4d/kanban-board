import styleHeader from "../../styles/Header.module.scss";
import User from "../../assets/img/user-avatar.png";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }
    return (
        <header className={styleHeader.Header}>
            <span className={styleHeader.Title}>Awesome Kanban Board</span>
            <div>
                <button onClick={toggleMenu} className={styleHeader.DropdownButton}>
                    <img className={styleHeader.User} src={User} alt="user" />
                    {isOpen ? (
                        <div className={styleHeader.ArrowUp}></div>
                    ) : (
                        <div className={styleHeader.ArrowDown}></div>
                    )}
                </button>
                {isOpen && (
                    <div className={styleHeader.DropdownMenu}>
                        <div className={styleHeader.DropdownMenuArrowUp}></div>
                        <ul className={styleHeader.MenuList}>
                            <li>Profile</li>
                            <li>Log Out</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};


export default Header;