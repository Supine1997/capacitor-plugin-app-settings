declare module '@capacitor/core' {
  interface PluginRegistry {
    AppSettings: AppSettingsPlugin;
  }
}

export interface AppSettingsPlugin {
  /**
   * 打开App在OS中对应的设置
   */
  openAppSettingsOfOS(): Promise<void>;
}
