// button 클릭시 바운스 되는 동작

import { motion } from "framer-motion";

export const Button = () => {
  return (
    <>
      <motion.button
        whileTap={{ scale: 1.1 }}
        //whileTap은 탭 했을 시 동작하게 해줌. scale로 강도 설정 가능
        transition={{ type: "spring", stiffness: 500, damping: 17 }}
        // type을 통해 애니메이션 타입을 설정가능 =>  tween, spring, inertia 3가지 종류가 있음
        //spring의 경우 stiffness으로 추가 설정 가능 (스프링의 강도)
        style={{ backgroundColor: "skyblue", width: "100px", height: "50px" }}
      >
        Click!
      </motion.button>
    </>
  );
};
