"use client";
import { useState } from "react";
import Input from "@/app/common/input/Input";
import FormCssModule from "./formular.module.css";
import Link from "next/link";
import { Button } from "@/app/common/Button/Button";
import RoundedPictures from "@/app/common/images/RoundedPictures";

export type formDataType = {
  first_name?: string;
  last_name?: string;
  city?: string;
  postal_code?: string;
  address?: string;
  email?: string;
  phone?: string;
  password?: string;
  agree: boolean;
};
export default function PersonalInformationForm() {
  const [formData, setFormData] = useState<formDataType>({
    first_name: "Petter",
    last_name: "Cetera",
    city: "London",
    postal_code: "E2 4XF",
    address: "123 Example",
    email: "petter@gmail.com",
    phone: "+442223334444",
    password: "password",
    agree: false,
  } as formDataType);

  const changeData = (e: any) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  };
  return (
    <div style={{ width: "100%" }}>
      <div className={FormCssModule["form-container"]}>
        <div className={FormCssModule.form}>
          <Input
            label='First Name'
            type='text'
            onChange={changeData}
            value={formData.first_name || ""}
            placeholder=''
            name='first_name'
            size='md'
          />
          <Input
            label='Last Name'
            onChange={changeData}
            type='text'
            value={formData.last_name || ""}
            placeholder=''
            name='last_name'
            size='md'
          />
          <Input
            label='City'
            onChange={changeData}
            type='text'
            value={formData.city || ""}
            placeholder=''
            name='city'
            size='md'
          />
          <Input
            label='Postal Code'
            onChange={changeData}
            type='text'
            value={formData.postal_code || ""}
            placeholder=''
            name='postal_code'
            size='md'
          />
          <Input
            label='Address'
            type='text'
            onChange={changeData}
            value={formData.address || ""}
            placeholder=''
            name='address'
            size='md'
            wide={true}
          />

          <Input
            label='Email'
            type='email'
            onChange={changeData}
            value={formData.email || ""}
            placeholder=''
            name='email'
            size='md'
          />
          <Input
            label='Phone'
            type='text'
            onChange={changeData}
            value={formData.phone || ""}
            placeholder=''
            name='phone'
            size='md'
          />
          <Input
            label='Password'
            type='password'
            onChange={changeData}
            value={formData.password || ""}
            placeholder=''
            name='password'
            size='md'
          />
        </div>
        <div className={FormCssModule.profile}>
          <div style={{ width: 144 }}>
            <RoundedPictures
              src={"/profil.png"}
              alt='profil'
              width={144}
              height={144}
            />
          </div>
        </div>
      </div>
      <p className={FormCssModule.notification}>
        Use this email to log in to your{" "}
        <Link href={"#"} className='link'>
          resumedone.io
        </Link>{" "}
        account and receive notifications.
      </p>
      <Button size='md'>{"Save"}</Button>
      <div className={FormCssModule.agree}>
        <input
          onChange={changeData}
          type={"checkbox"}
          name={"agree"}
                  checked={formData.agree}
                  aria-label="checkbox"
        />
        <p className={FormCssModule.agreeText}>
          Show my profile to serious employers on{" "}
          <Link href={"#"} className='link'>
            hirethesbest.io
          </Link>{" "}
          for free
        </p>
      </div>
    </div>
  );
}

