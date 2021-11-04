import React, { useState } from "react";

const componentWithHoc = (SimpleComponent) => (props) => {
    const checkUser = () => {
        if (localStorage.getItem("user")) {
            return true;
        } else {
            return false;
        }
    };
    const [isAuth, setIsAuth] = useState(checkUser());
    const onLogin = () => {
        localStorage.setItem("user", "superMan");
        setIsAuth(!isAuth);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(!isAuth);
    };
    return (
        <>
            <SimpleComponent {...props} isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut}/>
        </>
    );
};

export default componentWithHoc;
