import { User } from './user.class';

export class Player extends User {

  private id: number;
  private score: number;
  private position: object;

  constructor(socket: object, name: string, id: number, score: number = 0, position: object = { top: 0, left: 0 }) {
    super(socket, name);
    this.score = score;
    this.id = id;
    this.position = position;
  }

  getScore(): number {
    return this.score;
  }

  incrementScore(): void {
    this.score++;
  }

  getId(): number {
    return this.id;
  }
}
