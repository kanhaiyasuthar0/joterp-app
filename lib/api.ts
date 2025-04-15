import type { User } from "@/types/user";

// Mock data for users
const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    skypeId: "john.doe.skype",
    dob: "1985-04-12",
    address: "123 Main Street, Apt 4B, New York, NY 10001, United States",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    skypeId: "jane.smith.skype",
    dob: "1990-08-23",
    address: "456 Park Avenue, San Francisco, CA 94107, United States",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "+1 (555) 456-7890",
    dob: "1978-11-30",
    address: "789 Broadway, Seattle, WA 98101, United States",
  },
  {
    id: 4,
    name: "Emily Williams",
    email: "emily.williams@example.com",
    phone: "+1 (555) 234-5678",
    skypeId: "emily.williams.skype",
    dob: "1992-02-15",
    address: "321 Oak Street, Austin, TX 78701, United States",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    phone: "+1 (555) 876-5432",
    dob: "1983-07-08",
    address: "654 Pine Road, Chicago, IL 60601, United States",
  },
];

// Simulate API call with a delay
export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 800); // Simulate network delay
  });
};

// Simulate fetching a single user
export const fetchUser = (id: number): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers.find((user) => user.id === id) || null;
      resolve(user);
    }, 500);
  });
};
