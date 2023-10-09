import { Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

const Profile = () => {
  const firstName = "Alexandru";
  const lastName = "Vieru";
  const email = "vieru.alexandruu@gmail.com";
  const contactNumber = "0733139412";

  const [value, setValue] = useState(0);
  const [isSuccessDetails, setIsSuccessDetails] = useState(false);
  const [isSuccessPWChange, setIsSuccessPWChange] = useState(false);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const initialValuesDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    contactNumber: contactNumber,
  };

  const initialValuesPasswordChange = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
  };

  const detailsSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    contactNumber: yup
      .string()
      .required("required")
      .matches(/^\d+$/, "Contact number must contain only digits"),
  });

  const passwordChangeSchema = yup.object().shape({
    oldPassword: yup.string().required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup
      .string()
      .required("required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const handleUpdateDetails = async (values, onSubmitProps) => {
    setIsSuccessDetails(true);
  };

  const handlePasswordChange = async (values, onSubmitProps) => {
    setIsSuccessPWChange(true);
  };

  return (
    <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h4" color="primary">
          Hi, {firstName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{ p: 2, maxWidth: "sm", marginLeft: "auto", marginRight: "auto" }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Account Details" {...a11yProps(0)} />
              <Tab label="Password Change" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Formik
                onSubmit={handleUpdateDetails}
                initialValues={initialValuesDetails}
                validationSchema={detailsSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  resetForm,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} sx={{ textAlign: "initial" }}>
                        <TextField
                          label="First Name"
                          variant="outlined"
                          name="firstName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          error={
                            Boolean(touched.firstName) &&
                            Boolean(errors.firstName)
                          }
                          helperText={touched.firstName && errors.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} sx={{ textAlign: "initial" }}>
                        <TextField
                          label="Last Name"
                          variant="outlined"
                          name="lastName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          error={
                            Boolean(touched.lastName) &&
                            Boolean(errors.lastName)
                          }
                          helperText={touched.lastName && errors.lastName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          disabled
                          sx={{ minWidth: "243px" }}
                          label="E-mail address"
                          variant="outlined"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          error={
                            Boolean(touched.email) && Boolean(errors.email)
                          }
                          helperText={touched.email && errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Contact number"
                          variant="outlined"
                          name="contactNumber"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contactNumber}
                          error={
                            Boolean(touched.contactNumber) &&
                            Boolean(errors.contactNumber)
                          }
                          helperText={
                            touched.contactNumber && errors.contactNumber
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          type="submit"
                        >
                          Update Details
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Formik
                onSubmit={handlePasswordChange}
                initialValues={initialValuesPasswordChange}
                validationSchema={passwordChangeSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  resetForm,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Old Password"
                          variant="outlined"
                          type="password"
                          name="oldPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.oldPassword}
                          error={
                            Boolean(touched.oldPassword) &&
                            Boolean(errors.oldPassword)
                          }
                          helperText={touched.oldPassword && errors.oldPassword}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="New Password"
                          variant="outlined"
                          type="password"
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password}
                          error={
                            Boolean(touched.password) &&
                            Boolean(errors.password)
                          }
                          helperText={touched.password && errors.password}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Confirm Password"
                          variant="outlined"
                          type="password"
                          name="confirmPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.confirmPassword}
                          error={
                            Boolean(touched.confirmPassword) &&
                            Boolean(errors.confirmPassword)
                          }
                          helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="outlined"
                          color="primary"
                          type="submit"
                          fullWidth
                        >
                          Reset Password
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </TabPanel>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;