import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return <button className="btn btn-primary mx-2" onClick={onLogOut}>LogOut</button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areEqual(prevProps, nextProps) {
    if (prevProps.onLogOut === nextProps.onLogOut) return true;
    return false;
};
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);
// const MemoizedLogOutButton = React.memo(
//     LogOutButton,
//     (prevProps, nextProps) => {
//         if (prevProps === nextProps) return true;
//         return false;
//     }
// );

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleOnLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button className="btn btn-primary mx-2" onClick={() => setState(!state)}>
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleOnLogOut}/>
        </>
    );
};

export default MemoWithUseCallbackExample;
