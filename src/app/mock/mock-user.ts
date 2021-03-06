interface User {
  id: number;
  name: string;
  email: string;
  location: string;
  avatar: string;
}

export const USER: User[] = [
  {
    id: 1,
    name: 'Anik Ishaan',
    avatar: 'assets/img/user/avatar.png',
    location: 'Dhaka Jatrabari',
    email: 'demo@gmail.com',
  },
  {
    id: 2,
    name: 'Rifat Islam',
    avatar: 'assets/img/user/avatar.png',
    location: 'Dhaka Jatrabari',
    email: 'rifat@gmail.com',
  },
];
