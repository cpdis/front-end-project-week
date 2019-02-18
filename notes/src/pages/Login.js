import React from 'react'
import { connect } from 'react-redux'
import { loginWithBlockstack } from '../actions/userActions'

const Login = ({ user, onClick, ...rest }) => {
    return (
        <div>
            <h2>Login with Blockstack</h2>
            <button onClick={onClick}>Log In</button>
        </div>
    )
}

const mapStateToProps = (dispatch) => {
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(loginWithBlockstack())
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer