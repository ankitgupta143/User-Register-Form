import React from 'react';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormHelperText,
  Typography,
  Box,
} from '@mui/material';

const countries = [
  { value: 'usa', label: 'United States' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'india', label: 'India' },
];

const hobbies = [
  { value: 'reading', label: 'Reading' },
  { value: 'sports', label: 'Sports' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'travelling', label: 'Travelling' },
];

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      country: '',
      gender: '',
      hobbies: [],
    },
    onSubmit: (values) => {
      console.log(values);
      alert('Form submitted!');
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.address) {
        errors.address = 'Required';
      }

      if (!values.country) {
        errors.country = 'Required';
      }

      if (!values.gender) {
        errors.gender = 'Required';
      }

      if (values.hobbies.length === 0) {
        errors.hobbies = 'Required';
      }

      return errors;
    },
  });

  return (
    <Box
      maxWidth={400}
      mx="auto"
      p={2}
      border="1px solid #ccc"
      borderRadius={8}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      bgcolor="#f8f8f8"
    >
      <Typography variant="h5" align="center" gutterBottom>
        User Information Form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          style={{ marginBottom: 16 }}
        />

        <TextField
          fullWidth
          multiline
          id="address"
          name="address"
          label="Address"
          variant="outlined"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          style={{ marginBottom: 16 }}
        />

        <FormControl fullWidth variant="outlined" error={formik.touched.country && Boolean(formik.errors.country)}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            id="country"
            name="country"
            labelId="country-label"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ marginBottom: 16 }}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.country && formik.errors.country && (
            <FormHelperText>{formik.errors.country}</FormHelperText>
          )}
        </FormControl>

        <FormControl component="fieldset" error={formik.touched.gender && Boolean(formik.errors.gender)}>
          <RadioGroup
            row
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ marginBottom: 16 }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
          {formik.touched.gender && formik.errors.gender && (
            <FormHelperText>{formik.errors.gender}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
          component="fieldset"
          style={{ marginBottom: 16 }}
        >
          <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
          <Select
            id="hobbies"
            name="hobbies"
            labelId="hobbies-label"
            multiple
            value={formik.values.hobbies}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            renderValue={(selected) => selected.join(', ')}
          >
            {hobbies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox checked={formik.values.hobbies.includes(option.value)} />
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.hobbies && formik.errors.hobbies && (
            <FormHelperText>{formik.errors.hobbies}</FormHelperText>
          )}
        </FormControl>

        <Button color="primary" variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
