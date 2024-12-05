import React from "react";
import styles from "../../styles/footer/footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.first_div}>
        <div className={styles.first_div_box}>
          <p>Ready to get Started? Talk to us</p>
          <button className={styles.btn_common}>Get Started</button>
        </div>
      </div>
      <div className={styles.second_div}>
        <div className={styles.second_box}>
          <div className={styles.follow_box}>
            <div className={styles.follow_us_div}>Follow Us</div>
            <div className={styles.social_media_wrapper}>
              <a
                target="_blank"
                className={styles.social_media_link}
                href="https://www.facebook.com/Anuragkushwah.Anuragkushwah.7?mibextid=ZbWKwL"
              >
                <FaFacebookF />
              </a>

              <a
                target="_blank"
                className={styles.social_media_link}
                href="https://www.instagram.com/iamanuragk21/"
              >
                <AiFillInstagram />
              </a>
              <a
                target="_blank"
                className={styles.social_media_link}
                href="www.linkedin.com/in/anurag-kushwah-a9b2801b4"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.subscribe_box}>
            <p className={styles.subscribe_title}>
              Subcribe to get important updates
            </p>
            <input
              type="text"
              placeholder="Enter Email"
              className={styles.email_box}
            />
            <button className={styles.btn_common}>Subscribe</button>
          </div>
          <div className={styles.call_div}>
            <p>Call us</p>
            <p>+91 96669907552</p>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.footer_title}> ⓒ 2023 All Rights Received</div>
      </div>
    </footer>
  );
};

export default Footer;
