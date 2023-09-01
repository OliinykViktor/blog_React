import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import {FC} from 'react';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
});

const errorMsg ={
  padding:'15px 0 15px 0',
  color:'red'
  }

const AddPostModal: FC = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Post</DialogTitle>
      <DialogContent >
        <Formik
          initialValues={{ title: '', body: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmit(values);
            actions.resetForm();
            onClose();
          }}
        >
          <Form>
            <Field as={TextField} label="Title" name="title" fullWidth  />
            <ErrorMessage name="title" component="div" style={errorMsg}/>
            <Field as={TextField} label="Body" name="body" fullWidth multiline />
            <ErrorMessage name="body" component="div" style={errorMsg}/>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostModal;