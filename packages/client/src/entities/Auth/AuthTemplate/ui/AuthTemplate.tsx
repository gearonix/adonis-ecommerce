import {FC} from "react";
import s from "./style.module.scss";
import Link from "next/link";
import {getUIText} from '../helpers';
import {AuthTemplateProps} from "../types";
import cn from "classnames";
import GoogleButton from "widgets/Login/ui/GoogleButton";

const RegTemplate: FC<AuthTemplateProps> = ({children, mode, submit, role}) => {
    const {title, linkHref, linkText, blueLinkText} = getUIText(mode)

    return <form className={s.login_form}>
        <div className={s.wrapper}>
            <h2 className={s.title}>{title}</h2>
            {children}
            <button className={cn('primary_button', s.login_button)} onClick={submit}>{title}</button>
            <div className={s.grey_line}></div>
            <GoogleButton mode={mode} role={role}/>
            <h4 className={s.account_link}>
                {linkText} <Link className="hover_link" href={linkHref}>  {blueLinkText} </Link></h4>
        </div>
    </form>
}

export default RegTemplate
