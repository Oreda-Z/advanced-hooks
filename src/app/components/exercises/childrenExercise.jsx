import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const WrapperComponent = ({ children }) => {
    let counter = 0;
    const childrenWithWrapperDiv = React.Children.map(children, (child) => {
        counter++;
        return <div>{counter}{child}</div>;
    });
    return childrenWithWrapperDiv;
};
WrapperComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <WrapperComponent>
            <Component />
            <Component />
            <Component />
            </WrapperComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
