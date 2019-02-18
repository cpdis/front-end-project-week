import React from 'react'
import { connect } from 'react-redux'
import { handleBlockstackLogin } from '../actions/userActions'

const HandleLogin = ({ user, handlePendingSignIn, ...rest }) => {
    if (user.isLoginPending) {
        handlePendingSignIn()
    }

    return (
        <div>
            <h2>Logging in...</h2>
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
        handlePendingSignIn: () => {
            dispatch(handleBlockstackLogin())
        }
    }
}

const HandleLoginContainer = connect(mapStateToProps, mapDispatchToProps)(HandleLogin)

export default HandleLoginContainer