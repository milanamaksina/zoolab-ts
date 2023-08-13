export class FeedTime {
  feedTime: Date;

  constructor() {
    this.feedTime = this.GetTime();
  }

  GetTime(): Date {
    return new Date();
  }
}

