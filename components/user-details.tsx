"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { User } from "@/types/user";
import { UserIcon, Phone, Mail, Calendar, MapPin, Video } from "lucide-react";

interface UserDetailsProps {
  user: User;
  activeTab: "profile" | "contacts";
  onTabChange: (tab: "profile" | "contacts") => void;
}

export default function UserDetails({
  user,
  activeTab,
  onTabChange,
}: UserDetailsProps) {
  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <motion.button
          className={`py-3 px-6 cursor-pointer flex items-center gap-2 relative ${
            activeTab === "profile" ? "bg-gray-400 text-black font-bold" : ""
          }`}
          onClick={() => onTabChange("profile")}
          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <UserIcon size={16} />
          </motion.div>
          Profile
          {activeTab === "profile" && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              layoutId="activeTab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
        <motion.button
          className={`py-3 px-6 flex cursor-pointer items-center gap-2 relative ${
            activeTab === "contacts" ? "bg-gray-400 text-black font-bold" : ""
          }`}
          onClick={() => onTabChange("contacts")}
          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Phone size={16} />
          </motion.div>
          Contacts
          {activeTab === "contacts" && (
            <motion.div
              className="absolute  bottom-0 left-0 right-0 h-0.5 bg-primary"
              layoutId="activeTab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      </div>

      {/* Tab Content */}
      <div className="p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "profile" ? (
            <motion.div
              key="profile"
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="grid grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="font-medium flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.1,
                    }}
                  >
                    <UserIcon size={16} className="text-primary" />
                  </motion.div>
                  Name:
                </div>
                <div className="col-span-2">{user.name}</div>
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="font-medium flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.2,
                    }}
                  >
                    <Calendar size={16} className="text-secondary" />
                  </motion.div>
                  DOB:
                </div>
                <div className="col-span-2">{user.dob}</div>
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-4 items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-medium flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.3,
                    }}
                  >
                    <MapPin size={16} className="text-accent" />
                  </motion.div>
                  Address:
                </div>
                <div className="col-span-2">{user.address}</div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="contacts"
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="grid grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="font-medium flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.1,
                    }}
                  >
                    <Phone size={16} className="text-primary" />
                  </motion.div>
                  Mobile:
                </div>
                <div className="col-span-2">{user.phone}</div>
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="font-medium flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.2,
                    }}
                  >
                    <Video size={16} className="text-secondary" />
                  </motion.div>
                  Skype ID:
                </div>
                <div className="col-span-2">
                  {user.skypeId || "Not available"}
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-medium flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.3,
                    }}
                  >
                    <Mail size={16} className="text-accent" />
                  </motion.div>
                  Email:
                </div>
                <div className="col-span-2">{user.email}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
