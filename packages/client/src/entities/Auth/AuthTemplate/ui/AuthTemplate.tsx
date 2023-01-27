import {FC} from "react";
import s from "./style.module.scss";
import Link from "next/link";
import {getUIText} from '../helpers';
import {RegTemplateProps} from "../types";
import {FcGoogle} from "icons";
import cn from "classnames";

const RegTemplate: FC<RegTemplateProps> = ({children, mode}) => {
    const {title, linkHref, linkText, blueLinkText} = getUIText(mode)

    return <div className={s.login_form}>
        <div className={s.wrapper}>
            <h2 className={s.title}>{title}</h2>
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

export default RegTemplate
