import fbIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import stripeClimateBadge from "../assets/icons/stripe-climate-badge.png";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer w-screen ">
      <div className="footer__container m-auto ">
        <ul className="footer__nav flex justify-center font-semibold text-l text-yellow-900 ">
          <Link to="/" className="footer__nav-item">
            HOME
          </Link>
          <Link to="/privacy" className="footer__nav-item">
            PRIVACY
          </Link>
          <Link to="mailto:pomofocus@gmail.com" className="footer__nav-item">
            CONTACT
          </Link>
          <Link to="/app" className="footer__nav-item">
            SIMPLE PAGE
          </Link>
        </ul>
        <div className="footer__contact flex justify-center">
          <a href="https://www.facebook.com/pomofocus" className="footer__contact-logo ">
            <img  src={fbIcon} alt="fbIcon"  />
          </a>
          <a href="https://twitter.com/pomofocus" className="footer__contact-logo">
            <img src={twitterIcon} alt="twitterIcon" />
          </a>
          <a href="https://climate.stripe.com/kfwPBZ" className="footer__contact-logo">
            <img src={stripeClimateBadge} alt="stripeClimateBadge" />
          </a>
        </div>
        <div className="footer__shortDesc text-center mt-2 text-yellow-900 opacity-80">
          <span>
            clone with 🧡 by <a href="https://github.com/thanhngan22" className="font-semibold text-red-400">suke</a> 💦


          </span>
        </div>
        <div className="footer__copyright text-center text-xs mt-4">
          <span>©Pomofocus 2023. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
