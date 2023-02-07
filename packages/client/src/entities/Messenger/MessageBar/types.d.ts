import {FC} from 'react';

export interface MessageBarProps {
    placeholder?: string,
    MessageForm: FC<{ placeholder: string }>
}
