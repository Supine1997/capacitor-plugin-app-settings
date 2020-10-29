declare module '@capacitor/core' {
  interface PluginRegistry {
    AppSettings: AppSettingsPlugin;
  }
}

export interface AppSettingsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
