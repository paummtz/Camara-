import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'camApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      backgroundColor: "#ffffff",
      showSpinner: false
    }
  }
};

export default config;

