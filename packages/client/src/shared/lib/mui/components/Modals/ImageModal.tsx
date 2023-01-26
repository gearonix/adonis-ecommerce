import {Backdrop, Fade, Modal} from "@mui/material"
import {FC} from "react"
import {ModalProps} from './../../types'
import Image from 'next/image'

export const ImageModal: FC<ModalProps> = ({isOpen, handleOpen, image}) => {
    return <Modal
        open={isOpen}
        onClose={() => handleOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500
        }}
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
                backgroundcolor: "red"
            }
        }}
    >
        <Fade in={isOpen} timeout={500}>
            <Image src={image} alt={''} layout='fill'
                   objectFit='contain'/>
        </Fade>
    </Modal>
}
