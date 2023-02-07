import {FC} from 'react';
import {Box, Fade, Modal} from '@mui/material';
import {ContentModalProps} from '../../types';

const ModalStyles = {
    position: 'absolute' as 'absolute',
    top: '5%',
    left: '50%',
    height: '80%',
    overflowY: 'auto',
    transform: 'translate(-50%, 0)',
    width: '70%',
    bgcolor: 'background.paper',
    borderRadius: '6px',
    boxShadow: 24,
    p: 4,
};

export const ContentModal: FC<ContentModalProps> = ({isOpened, close, children}) => {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpened}
                onClose={close}
                closeAfterTransition
            >
                <Fade in={isOpened}>
                    <Box sx={ModalStyles}>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};
