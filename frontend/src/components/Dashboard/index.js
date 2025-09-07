import axios from 'axios'
import './index.css'




const DashBoard = ({ user, setUser }) => {
    const { name } = user
    const onLogout = () => {
        axios.post('http://localhost:4000/api/logout').then(() => {
            setUser(null)

        })
    }

    return (
        <>
            <nav className='nav-container' >
                <button className='logout-btn' type="button" onClick={onLogout}>Logout</button>
            </nav>

            <div className='dashboard-container' >
                <h1 className='main-heading'>Welcome, {name}</h1>

            </div>
        </>

    )
}

export default DashBoard