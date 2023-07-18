import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Portfolio of{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;{" "}
          </span>{" "}
          &nbsp;Ahmed
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
