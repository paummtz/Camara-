import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'camApp',
  webDir: 'www',
  // npm install @capawesome/capacitor-android-edge-to-edge-support
// npx cap sync
  plugins: {
    EdgeToEdge: {
      backgroundColor: "#d73636",
      navigationBarColor: "#1e1e8d",
      statusBarColor: "#09ff00",
    },
  },
};

export default config;

