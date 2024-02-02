// Use type safe message keys with `next-intl`
type MessagesENUS = typeof import('./public/locales/en-us.json');
declare interface IntlMessages extends MessagesENUS {}
type MessagesPTBR = typeof import('./public/locales/pt-br.json');
declare interface IntlMessages extends MessagesPTBR {}
