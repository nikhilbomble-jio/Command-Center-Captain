import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.da1b6181f376478d9793f612815e3db1',
  appName: 'jpsl-ai-connect',
  webDir: 'dist',
  server: {
    url: 'https://da1b6181-f376-478d-9793-f612815e3db1.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;