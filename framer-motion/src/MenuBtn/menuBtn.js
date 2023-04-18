import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  closed: { opacity: 0, y: 20 },
};

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);
  // 화살표를 클릭 할때 나올 값을 보여줄 스테이트

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.button whileTap={{ scale: 1.1 }} onClick={() => setIsOpen(!isOpen)}>
        Menu
        <motion.div>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul>
        <motion.li>item 1</motion.li>
        <motion.li>item 2</motion.li>
        <motion.li>item 3</motion.li>
        <motion.li>item 4</motion.li>
        <motion.li>item 5</motion.li>
      </motion.ul>
    </motion.nav>
  );
}
export default MenuBtn;
