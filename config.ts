import { Theme } from './contexts/ThemeContext'

type TogglerThemeOptions = {
  light: Theme;
  dark: Theme;
};

type PickerThemeOptions = Theme[];


export type IAppConfiguration = {
  [key: string]: any;

  features: {
    superButton: {
      position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
    },
  },

  integrations?: {
    google?: {
      analytics?: {
        id: string;
      }
    }
  }

  themes: {
    type: 'toggler' | 'picker';
    initialMode: 'light' | 'dark';
    options: 'toggler' extends IAppConfiguration['themes']['type'] ? TogglerThemeOptions : PickerThemeOptions;
  };
};


const appConfiguration: IAppConfiguration = {
  features: {
    superButton: {
      position: 'bottom-right' // etc
    },
  },

  integrations: {
    google: {
      analytics: {
        id: process.env.GoogleAnalyticsID || 'G-VEBF97CRFK'
      }
    }
  },

  themes: {
    type: 'toggler',
    initialMode: 'light',
    options: {
      light: 'light', //'lofi',
      dark: 'sunset',
    },
  },
}

export default appConfiguration
