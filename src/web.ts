import { WebPlugin } from '@capacitor/core';
import { AppSettingsPlugin } from './definitions';

export class AppSettingsWeb extends WebPlugin implements AppSettingsPlugin {
  constructor() {
    super({
      name: 'AppSettings',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const AppSettings = new AppSettingsWeb();

export { AppSettings };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppSettings);
