import "./SideBar.css"
import NavBar from "./NavBar";

const SideBar = (props) => {
    return (
        <div className="WrapperSideBar" onClick={props.onShowSideBarButtonClick} style={{
            width: props.showSideBarState ? "300px" : "0px",
            height: "100%",
            position: "fixed",
            top: "0",
            right: "0",
            transition: "width 0.5s ease-in-out",
            background: "rgba(0,0,0,50%)",

        }}>
            <NavBar orientation="vertical" sideBarState={props.showSideBarState} buttonText={["Home", "About Me", "Resume", "Projects"]}></NavBar>
        </div>
    )
}

export default SideBar;