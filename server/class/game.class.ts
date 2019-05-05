import {Player} from './player.class';
import {Timer} from './Timer';

export class Game {
  private players: Player;
  private timer: Timer;

  constructor() {
    this.timer = new Timer();
  }
}
