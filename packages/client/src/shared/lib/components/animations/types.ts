import { CSSProperties, MutableRefObject, ReactNode } from 'react'
import callbackSprings from './config/callbackSprings'
import springs from 'shared/lib/components/animations/config/springs'


export interface CallbackSprings {
    [key: string]: (param?: string | number) => [Object, Object[], Object?]
}

export interface Springs {
    [key: string]: (param?: string | number) => { from: Object, to: Object, config?: Object }
}

export interface WithSpringProps {
    className?: string,
    children: ReactNode,
    type?: keyof typeof springs,
    param?: string | number,
    style?: CSSProperties,
    onClick?: () => void,
    subscriber?: any
}


export interface ApiAnimationProps extends WithSpringProps {
    onClick?: () => void,
    type: keyof typeof callbackSprings,
    subscriber?: MutableRefObject<undefined | HTMLElement>,
    subscriberValue?: any,
    duration?: number,
    style?: CSSProperties
}
