import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2025 RimiCode. All rights reserved.</div>
      <div className={styles.social}>
      <Link href="https://www.facebook.com/muhammed.elrimi" target="_blank">
    <Image
      src="/1.png"
      width={15}
      height={15}
      className={styles.icon}
      alt="Facebook"
    />
  </Link>

  <Link href="https://www.instagram.com/muhammed_elrimi" target="_blank">
    <Image
      src="/2.png"
      width={15}
      height={15}
      className={styles.icon}
      alt="Instagram"
    />
  </Link>

  <Link href="https://www.linkedin.com/in/muhammed-elrimi-380a38299/" target="_blank">
    <Image
      src="/linkedin.png"
      width={15}
      height={15}
      className={styles.icon}
      alt="linkedin"
    />
  </Link>

  <Link href="https://github.com/mohamadAlrimi" target="_blank">
    <Image
      src="/5.png"
      width={15}
      height={15}
      className={styles.icon}
      alt="github"
    />
  </Link>
      </div>
    </div>
  );
};

export default Footer;
