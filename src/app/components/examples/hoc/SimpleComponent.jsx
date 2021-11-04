import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    return (
        <>
            {isAuth === false
                ? <><button className={"btn btn-primary"} onClick={onLogin}>Войти</button></>
                : <><button className={"btn btn-primary"} onClick={onLogOut}>Выйти из системы</button></>}
        </>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};
export default SimpleComponent;
