export class User {

  protected socket: object;
  protected name: string;

  constructor(socket, name = 'anonymous') {
    this.socket = socket;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getSocket(): object {
    return this.socket;
  }

  setName(name: string) {
    this.name = name;
  }
}
