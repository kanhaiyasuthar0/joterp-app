"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UserList from "@/components/user-list";
import UserDetails from "@/components/user-details";
import ActionPanel from "@/components/action-panel";
import type { User } from "@/types/user";
import { fetchUsers } from "@/lib/api";
import { Users, UserIcon, Settings } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "contacts">("profile");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        // Select the first user by default
        if (data.length > 0) {
          setSelectedUser(data[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    // Reset to profile tab when selecting a new user
    setActiveTab("profile");
  };

  return (
    <motion.main
      className="flex min-h-screen bg-background p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* User List Panel */}
        <motion.div
          className="md:col-span-3 bg-card border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-muted p-3 font-medium border-b border-gray-200 flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Users size={18} className="text-primary" />
            </motion.div>
            <span>User list</span>
          </div>
          <div className="p-2">
            {isLoading ? (
              <motion.div
                className="p-4 text-center text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  },
                }}
              >
                Loading users...
              </motion.div>
            ) : (
              <UserList
                users={users}
                onSelectUser={handleUserSelect}
                selectedUser={selectedUser}
              />
            )}
          </div>
        </motion.div>

        {/* User Details Panel */}
        <motion.div
          className="md:col-span-6 bg-card border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          variants={itemVariants}
        >
          <div className="bg-muted p-3 font-medium border-b border-gray-200 flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <UserIcon size={18} className="text-accent" />
            </motion.div>
            <span>User detail</span>
          </div>
          <div>
            {selectedUser ? (
              <UserDetails
                user={selectedUser}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            ) : (
              <motion.div
                className="p-8 text-center text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Select a user to view details
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Action Panel */}
        <motion.div
          className="md:col-span-3 bg-card border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-muted p-3 font-medium border-b border-gray-200 flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Settings size={18} className="text-secondary" />
            </motion.div>
            <span>Action</span>
          </div>
          <div className="p-4">
            <ActionPanel />
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
