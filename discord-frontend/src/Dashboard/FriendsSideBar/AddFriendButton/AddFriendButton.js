import React, {useState} from 'react';
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import AddFriendDialog from '../AddFriendDialog';

const additionalStyles = {
  marginTop: '8px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
  
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  }
  
  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  }
  
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label='Add Friend'
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleOpenAddFriendDialog}
      />
    </>
  )
};

export default AddFriendButton;