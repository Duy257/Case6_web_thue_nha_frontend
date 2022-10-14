import { Avatar, Button, Fab } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { storage } from "../../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../redux/actionThunk/userActionThunk";

export default function RightContent() {
  let { user } = useSelector((state) => state.user);
  const disPatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: user && user.fullName,
      email: user && user.email,
      phoneNumber: user && user.phoneNumber,
      address: user && user.address,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Must be more than  2 characters")
        .max(15, "Must be 15 characters or less")
        .required("Name is valid required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is valid required!"),
      phoneNumber: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .integer("Số điện thoại không được bao gồm dấu thập phân")
        .required("Không để trống"),
      address: Yup.string().required("Không để trống"),
    }),
    onSubmit: async (values, helpers) => {
      let imageUpload = image;
      if (imageUpload) {
        const imageRef = ref(storage, `images/${imageUpload?.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            values.avatar = url;
            // console.log(values);
            let payload = {
              id: user && user._id,
              user: values,
            };
            disPatch(updateUserAction(payload));
          });
        });
      }
    },
  });

  const [infor, setInfor] = useState({});
  const [image, setImage] = useState();
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image?.preview);
    };
  }, [image]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ margin: "7px 10px" }}>
            <Avatar
              alt="Remy Sharp"
              src={image?.preview}
              sx={{ width: "100px", height: "100px", margin: "5px 5px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={handlePreviewAvatar}
              />
              <br />
              <Button color="success" variant="contained" component="span">
                Tải ảnh lên
              </Button>{" "}
            </label>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
        >
          <TextField
            id="outlined-basic"
            label="Họ và tên "
            variant="outlined"
            sx={{ width: "70%" }}
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            error={
              formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : ""
            }
            helperText={
              formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
        </div>

        <div
          style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "70%" }}
            name="email"
            type="email"
            onChange={formik.handleChange}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
        >
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            sx={{ width: "70%" }}
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""
            }
            helperText={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
        >
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            sx={{ width: "70%" }}
            name="address"
            type="text"
            onChange={formik.handleChange}
            error={
              formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ""
            }
            helperText={
              formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
        >
          <Button variant="contained" color="success" type="submit">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  );
}
