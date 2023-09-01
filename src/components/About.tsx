import {FC} from 'react';
import { Typography, Paper} from '@mui/material';

const About:FC = () => {

  return (
    <Paper sx={{mt:3, p:3}}>
      <Typography variant="h4" gutterBottom>
        This is a test application for a blog built using the following technologies:
      </Typography>
      <Typography variant="body1">
        - Vite - A fast build tool for modern web development.
        <br />
        - React - A JavaScript library for building user interfaces.
        <br />
        - Mui - The Material-UI library for designing UI components.
        <br />
        - Formik - A form management library for React applications.
        <br />
        - Yup - A JavaScript schema validation library used with Formik.
        <br />
        - Axios - A promise-based HTTP client for making API requests.
        <br />
        - React Router 6 - A routing library for React applications.
      </Typography>
    </Paper>
  );
}

export default About;