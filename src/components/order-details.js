import React from "react";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function OrderDetails(props) {
  const { open, onClose, handleSubmitOrder } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      note: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      phone: Yup.string().required("phone is required"),
      note: Yup.string().required("note is required"),
    }),
    onSubmit: (values) => {
      handleSubmitOrder(values);
      onClose();
    },
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add Details</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
          component={"form"}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder="e.g. John Doe"
            values={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            placeholder="e.g. 0712567834"
            values={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.phone && formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            fullWidth
            label="Note"
            name="note"
            placeholder="e.g no sauce on fries"
            multiline
            rows={2}
            values={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.note && formik.errors.note)}
            helperText={formik.touched.note && formik.errors.note}
          />
          <Button variant="contained" type="submit">
            Complete
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
