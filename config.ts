import { Theme } from './contexts/ThemeContext';

type TogglerThemeOptions = {
  light: Theme;
  dark: Theme;
};

type PickerThemeOptions = Theme[];

export type IAppConfiguration = {
  [key: string]: any;
  themes: {
    type: 'toggler' | 'picker';
    options: 'toggler' extends IAppConfiguration['themes']['type'] ? TogglerThemeOptions : PickerThemeOptions;
  };
};

const appConfiguration: IAppConfiguration = {
  features:{
    superButton: {
      position: 'bottom-right' // etc
    }
  },

  themes: {
    type: 'toggler',
    options: {
      light: 'light',
      dark: 'dracula',
    },
  },
};

export default appConfiguration;
