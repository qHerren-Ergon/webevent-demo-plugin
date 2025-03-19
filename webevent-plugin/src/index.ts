import { registerPlugin } from '@capacitor/core';

import type { webeventPlugin } from './definitions';

const webevent = registerPlugin<webeventPlugin>('webevent', {
  web: () => import('./web').then((m) => new m.webeventWeb()),
});

export * from './definitions';
export { webevent };
