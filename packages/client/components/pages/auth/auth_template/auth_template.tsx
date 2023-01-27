import {FC, ReactNode} from "react";
import s from "components/pages/auth/auth_template/auth_template.module.scss";
import cn from "classnames";
import {FcGoogle} from "react-icons/fc";
import Link from "next/link";
import {getUIText} from './helpers';
import {AuthTemplate} from "entities/Auth/AuthTemplate";


interface RegTemplateProps {
    children: ReactNode,
    mode: 'login' | 'signup'
}


const RegTemplate: FC<RegTemplateProps> = ({children, mode}) => {

    const {
        title, linkHref, linkText,
        blueLinkText
    } = getUIText(mode)

    return <div className={s.login_form}>
        <div className={s.wrapper}>
            <div className={s.title}>{title}</div>
            {children}
            <button className={cn('primary_button', s.login_button)}>{title}</button>
            <div className={s.grey_line}></div>
            <button className={cn('outlined_button', s.with_google)}><FcGoogle/>
                Continue with google
            </button>
            <h4 className={s.account_link}>
                {linkText} <Link className="hover_link" href={linkHref}>  {blueLinkText} </Link></h4>
        </div>
    </div>
}

export default AuthTemplate
