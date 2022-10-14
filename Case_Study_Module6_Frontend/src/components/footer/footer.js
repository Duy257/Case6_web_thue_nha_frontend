import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
const Footer = () => {
  return (
    <>
      <div className="bg-[#ced4da] text-[#8491a4] font-medium">
        <div className="container mx-auto py-12">
          <p className="my-3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Flogo.png?alt=media&token=5153edea-5f50-437b-9f8a-7594126d1b46"
              alt=""
              className="w-52 h-24"
            />
          </p>
          <p className="my-3 flex items-end">
            Theo dõi chúng tôi:
            <FacebookOutlinedIcon />
            <SubscriptionsOutlinedIcon />
          </p>
          <p>
            Địa chỉ: CÔNG TY TNHH HOMESYTE VIỆT NAM, The Hive, 26 Huỳnh Khương
            Ninh, Phường Đa Kao, Quận 1, Tp.HCM, Việt Nam
          </p>
          <p className="my-3">Liên hệ chúng tôi: duckies@gmail.com</p>
          <p className="my-3">Số điện thoại: 0953572987</p>
          <p className="my-3">
            Giấy phép kinh doanh: 0316915148, Cấp ngày: 24/06/2021, Nơi cấp: Sở
            Kế hoạch và Đầu tư TP. Hồ Chí Minh
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
