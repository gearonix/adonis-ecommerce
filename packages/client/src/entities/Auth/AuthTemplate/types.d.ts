import {FC, ReactNode} from "react";
import {UseFormHandleSubmit} from 'react-hook-form'
import {GoogleButtonProps} from "widgets/Login/types";
import {Roles} from "shared/types/globals";

interface AuthTemplateProps {
    children: ReactNode,
    mode: 'login' | 'signup',
    submit: UseFormHandleSubmit,
    GoogleButton: FC<GoogleButtonProps>,
    role?: Roles
}
