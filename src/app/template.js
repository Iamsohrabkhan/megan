"use client";

import { motion } from "framer-motion";

const Template = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1,y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
