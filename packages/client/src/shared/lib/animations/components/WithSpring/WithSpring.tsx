import {FC} from 'react';
import {animated, useSpring} from '@react-spring/web'
import springs from 'shared/lib/animations/config/springs'
import {WithSpringProps} from "../../types";


const WithSpring: FC<WithSpringProps> = ({className, children, type = 'opacity', param}) => {
    const spring = useSpring(springs[type](param))
    //
    return <animated.div className={className} style={spring}>
        {children}
    </animated.div>
}

export default WithSpring
