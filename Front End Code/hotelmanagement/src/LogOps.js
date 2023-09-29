import React from 'react';
import './LogOps.css';
class LogOps extends React.Component {
    render() {
        return (
            <div id="typesLog">
                <div id="admin">
                    <i class="fas fa-user-cog"></i><br/>
                    <label>Admin Login</label>
                </div>
                <div id="user">
                    <i class="fas fa-user"></i><br/>
                    <label>User Login</label>
                </div>
            </div>
        )
    }
}

export default LogOps;