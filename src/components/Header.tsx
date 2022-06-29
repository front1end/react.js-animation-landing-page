import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.nav variants={fadeIn("down")} initial="initial" animate="animate" className="header">
      <span className="header-logo">Mr Omar</span>
      <ul>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <span className="header-account">My Account</span>
      <span className="header-user">🤐</span>
    </motion.nav>
  );
};

export default Header;
