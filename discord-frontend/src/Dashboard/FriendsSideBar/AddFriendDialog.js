import React, { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from "@mui/material";
import { validateMail } from '../../shared/utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const AddFriendDialog = ({
    isDialogOpen, 
    closeDialogHandler, 
    sendFreindInvitation = () => {} 
}) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleSendInvitation = () => {
        console.log('handleSendInvitation')
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    }

    useEffect(() => {
        setIsFormValid(validateMail(mail))
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog 
                open={isDialogOpen}
                onClose={handleCloseDialog}
            >
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography component={'span'} variant={'body2'}>
                        Enter email address of friend you wish to invite
                        </Typography>
                    </DialogContentText>
                    <InputWithLabel
                        label='Mail'
                        type='text'
                        value={mail}
                        setValue={setMail}
                        placeholder="Enter e-mail address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label='Send'
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px'
                        }}
                    >
                    </CustomPrimaryButton>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddFriendDialog;