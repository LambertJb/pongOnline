export class Timer {
  private second: number;

  constructor(second = 0) {
    this.second = second;
  }

  startTimer() {
      this.second++;
      console.log(this.second);
      setTimeout(this.startTimer.bind(this), 1000);
  }

  getSecond() {
    return this.second;
  }

}


