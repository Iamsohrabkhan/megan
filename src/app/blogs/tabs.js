"use client";
import { motion } from "framer-motion";

import { useState } from "react";

const ChipTabs = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div>
      <div className="px-4 py-4 bg-[#7C96A6] md:flex md:items-center md:flex-wrap md:gap-6">
        <h3 className="md:ml-40 md:mr-12 italic">Catagories:</h3>
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
