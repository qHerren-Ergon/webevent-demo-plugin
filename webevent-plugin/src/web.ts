import {WebPlugin} from '@capacitor/core';

import type { webeventPlugin } from './definitions';

export class webeventWeb extends WebPlugin implements webeventPlugin {
  async eventSender(time:string): Promise<void> {
    this.notifyListeners("sendEvent", { value: "event 1", time: time}, true);
    return Promise.resolve();
  }

  async eventSenderWithTimer(time:string): Promise<void> {
    setTimeout(() => this.notifyListeners("sendEventWithTimer", { value: "event 2", time: time}, true), 5000);
    return Promise.resolve();
  }
}
