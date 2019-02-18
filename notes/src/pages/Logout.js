import React from 'react'
import { userLogout } from '../actions/userActions'
import { connect } from 'react-redux'

const Logout = ({ user, handleLogout, ...rest }) => {
    if (user.isAuthenticated) {
        handleLogout()
    }

    return (
        <h2>Signed Out</h2>
    )
}
const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => {
            dispatch(userLogout())
        }
    }
}

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout)

export default LogoutContainer