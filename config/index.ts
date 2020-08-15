import config from '../config.json';
import { Integrations } from '@/core/typings';

interface Config {
  name: string;
  title: string;
  domain: string;
  googleAnalytics?: string;
  subscription: {
    enabled: boolean;
    url: string;
    success: string;
    error: string;
  };
  integration: Integrations;
}

export default config as Config;
