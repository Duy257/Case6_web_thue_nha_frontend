import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  registerAction,
  setStatusAuthAction,
} from "../../redux/actionThunk/authActionThunk";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";


export function RegisterPage () {
  const handleRegister = (values) => {
    disPatch(registerAction(values));
  }
  const disPatch = useDispatch();
  let { status } = useSelector((state) => state.auth);
  console.log(status);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "fulfilled") {
      openNotificationWithIcon({type: 'success', message: "Thành Công!!!"});
      navigate("/login");
      disPatch(setStatusAuthAction());
    }else if (status === "rejected") {
      openNotificationWithIcon({type: 'error', message: "Tài Khoản Đã Tồn Tại!!!"});
    }
  }, [status]);

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Không để trống"),
      phoneNumber: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .integer("Số điện thoại không được bao gồm dấu thập phân")
        .required("Không để trống"),
      password: Yup.string()
        .min(6, "Tối thiểu 6 ký tự")
        .max(8, "Tối đa 8 ký tự")
        .required("Không để trống"),
      confirmPassword: Yup.string()
        .required("Không để trống")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
    }),
    onSubmit: (values) => {
      values.avatar =
        "https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/image%2Favatar.jpg?alt=media&token=0cf016f4-f295-4d46-942f-ae8a8a79c53d";
      handleRegister(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="bg-gray-50 dark:bg-gray-900 mt-10">
        <div className=" bg-[#ffffff] flex justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 white:text-white"
          ></a>
          <div className=" regal-write w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Đăng ký
              </h1>
              <div>
                <label
                  htmlFor="username"
                  className="flex justify-start  mb-2 text-sm font-medium  dark:text-black"
                >
                  Nhập tên đăng nhập *
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={
                    formik.touched.username && formik.errors.username
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {formik.errors.username}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="flex justify-start  mb-2 text-sm font-medium  dark:text-black"
                >
                  Nhập Số Điện Thoại *
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {formik.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="  flex justify-start  mb-2 text-sm font-medium text-gray-900 "
                >
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="  flex justify-start  mb-2 text-sm font-medium text-gray-900 "
                >
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#14f1d7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Tạo một tài khoản{" "}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                Bạn có sẵn sàng tạo một tài khoản?
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Đăng nhập
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
