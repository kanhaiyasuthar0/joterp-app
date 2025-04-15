"use client";

import { motion } from "framer-motion";
import {
  Pencil,
  Trash,
  UserPlus,
  Lock,
  RefreshCw,
  Download,
  Share2,
} from "lucide-react";

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
  whileHover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
  whileTap: { scale: 0.97 },
};

const iconVariants = {
  initial: { scale: 0 },
  animate: (index: number) => ({
    scale: 1,
    transition: {
      delay: index * 0.05 + 0.1,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  }),
  whileHover: {
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 },
  },
};

export default function ActionPanel() {
  const actions = [
    {
      icon: Pencil,
      text: "Edit",
      color: "text-primary",
      hoverBg: "hover:bg-primary/10",
    },
    {
      icon: Trash,
      text: "Delete",
      color: "text-destructive",
      hoverBg: "hover:bg-destructive/10",
    },
    {
      icon: UserPlus,
      text: "Add User",
      color: "text-secondary",
      hoverBg: "hover:bg-secondary/10",
    },
    {
      icon: Lock,
      text: "Reset Password",
      color: "text-accent",
      hoverBg: "hover:bg-accent/10",
    },
    {
      icon: RefreshCw,
      text: "Sync Data",
      color: "text-warning",
      hoverBg: "hover:bg-warning/10",
    },
    {
      icon: Download,
      text: "Export",
      color: "text-success",
      hoverBg: "hover:bg-success/10",
    },
    {
      icon: Share2,
      text: "Share",
      color: "text-muted-foreground",
      hoverBg: "hover:bg-muted",
    },
  ];

  return (
    <motion.div
      className="flex flex-col gap-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.07,
          },
        },
      }}
    >
      {actions.map((action, index) => (
        <motion.button
          key={action.text}
          className={`flex cursor-pointer items-center gap-2 p-3 border border-gray-200 rounded-md ${action.hoverBg} transition-colors`}
          custom={index}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
          variants={buttonVariants}
        >
          <motion.div
            custom={index}
            variants={iconVariants}
            className={action.color}
          >
            <action.icon size={18} />
          </motion.div>
          <span>{action.text}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
