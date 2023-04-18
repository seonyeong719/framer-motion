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
        <motion.div
          transition={{ duration: 0.3 }}
          // 버튼에 화살표가 바뀌는 속도 지정해줌.
          variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: { clipPath: "inset(10% 50% 90% 50% round 10px)" },
        }}
        style={{ backgroundColor: "pink" }}
      >
        <motion.li variants={itemVariants}>item 1</motion.li>
        <motion.li variants={itemVariants}>item 2</motion.li>
        <motion.li variants={itemVariants}>item 3</motion.li>
        <motion.li variants={itemVariants}>item 4</motion.li>
        <motion.li variants={itemVariants}>item 5</motion.li>
      </motion.ul>
    </motion.nav>
  );
}
export default MenuBtn;
