import { WebPlugin } from '@capacitor/core';
import { AppSettingsPlugin } from './definitions';

export class AppSettingsWeb extends WebPlugin implements AppSettingsPlugin {
  constructor() {
    super({
      name: 'AppSettings',
      platforms: ['web'],
    });
  }

  async openAppSettingsOfOS(): Promise<void> {
    console.log('openAppSettingsOfOS');
  }
}

const AppSettings = new AppSettingsWeb();

export { AppSettings };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppSettings);
