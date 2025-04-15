"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { User } from "@/types/user";
import { UserCircle } from "lucide-react";

interface UserListProps {
  users: User[];
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}

export default function UserList({
  users,
  selectedUser,
  onSelectUser,
}: UserListProps) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
    >
      <AnimatePresence>
        {users.map((user, index) => (
          <motion.button
            key={user.id}
            className={`p-3 cursor-pointer text-left hover:bg-accent/10 transition-colors rounded-md flex items-center gap-2 ${
              selectedUser?.id === user.id
                ? "bg-gray-400 text-white font-medium"
                : ""
            }`}
            onClick={() => onSelectUser(user)}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 24,
              },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            exit={{ opacity: 0, y: 20 }}
            layout
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                delay: index * 0.05 + 0.1,
              }}
            >
              <UserCircle
                size={20}
                className={
                  selectedUser?.id === user.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              />
            </motion.div>
            {user.name}
          </motion.button>
        ))}
      </AnimatePresence>
      {users.length === 0 && (
        <motion.div
          className="p-4 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No users found
        </motion.div>
      )}
    </motion.div>
  );
}
