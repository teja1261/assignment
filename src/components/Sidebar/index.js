import './index.css'

const Sidebar = () => (
    <div className="display-bar">
    <div className="empty-card"></div>
        <div className="card-container">
            <div className="back-session">
                <img src="https://www.linkpicture.com/q/caret-left-solid.svg" alt="back arrow" className="logo"/>
                <p className="name">Videos</p>
            </div>
            <div className="middle">
                <div className="insert-container">
                    <p className="name">Insert URL here</p>
                </div>
                <p className="name">or</p>
                <div className="upload-container">
                    <p className="name">upload</p>
                </div>
            </div>
        </div>
    </div>
)

export default Sidebar