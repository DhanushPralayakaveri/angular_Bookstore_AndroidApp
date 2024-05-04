import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'myBooks',
  webDir: 'dist/books',
  server: {
    androidScheme: 'https'
  }
};

export default config;
