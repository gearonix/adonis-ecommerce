import {ReactNode} from "react";
import {UseFormHandleSubmit} from 'react-hook-form'

interface RegTemplateProps {
    children: ReactNode,
    mode: 'login' | 'signup',
    submit: UseFormHandleSubmit
}
