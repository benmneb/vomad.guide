import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const AddProducts = ({ open, onClose }) => {
  const guideTheme = useTheme();
  const fullScreen = useMediaQuery(guideTheme.breakpoints.down('xs'));

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen}>
        <DialogTitle id="form-dialog-title">Contribute to the Guide!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            With your help there is no reason why we can't accurately list all the vegan products and make it easier for everyone to go and stay vegan.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            variant='outlined'
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Your Email"
            type="email"
            variant='outlined'
            fullWidth
          />
          <TextField
            margin="dense"
            id="message"
            label="Tell us what we're missing! Please include links to the product(s)."
            type="text"
            variant='outlined'
            multiline
            rows={4}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="default">
            Cancel
          </Button>
          <Button onClick={onClose} color="default">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProducts;
