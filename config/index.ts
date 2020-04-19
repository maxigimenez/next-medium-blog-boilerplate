import config from '../blog.json';

interface Config {
  name: string;
  title: string;
  domain: string;
  googleTracking?: string;
  subscription: {
    enabled: boolean;
    url: string;
    success: string;
    error: string;
  }
}

export default config as Config;
