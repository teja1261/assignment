import {Component} from 'react'
import Sidebar from '../Sidebar'
import './index.css'

class Assignment extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="sidebar-container">
                <div className="section-logo">
                    <img src="https://www.linkpicture.com/q/frame_1-removebg-preview.png" alt="logo" className="logo-main"/>
                </div>
                    <div className="section">
                        <img src="https://www.linkpicture.com/q/user-graduate-solid.svg" alt="Students" className="logo"/>
                        <p>Students</p>
                    </div>
                    <div className="select-section section">
                        <img src="https://www.linkpicture.com/q/book-solid.svg" alt="Lesson plan" className="logo"/>
                        <p>Lesson Plan</p>
                    </div>
                    <div className="section">
                        <img src="https://www.linkpicture.com/q/cog-solid.svg" alt="Setting" className="logo"/>
                        <p>Setting</p>
                    </div>
                </div>
                <Sidebar />
            </div>
        )
    }
}

export default Assignment