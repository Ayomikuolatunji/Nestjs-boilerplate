import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Alice', role: 'INTERN' },
    { id: 2, name: 'Bob', role: 'ADMIN' },
    { id: 3, name: 'Charlie', role: 'ENGINEER' },
    { id: 4, name: 'David', role: 'INTERN' },
    { id: 5, name: 'Eve', role: 'ADMIN' },
    { id: 6, name: 'Frank', role: 'ENGINEER' },
    { id: 7, name: 'Grace', role: 'INTERN' },
    { id: 8, name: 'Henry', role: 'ADMIN' },
    { id: 9, name: 'Ivy', role: 'ENGINEER' },
    { id: 10, name: 'Jack', role: 'INTERN' },
  ];

  public findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.find((user) => user.role === role);
    } else {
      return this.users;
    }
  }
}
