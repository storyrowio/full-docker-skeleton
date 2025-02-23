import Image from "next/image";
import styles from "./page.module.css";
import AppLayout from "layouts/app";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Logo from "components/shared/Logo";
import LoginForm from "components/pages/auth/LoginForm";

export default function Home() {
  return (
      <>
          <LoginForm/>
      </>
  );
}
