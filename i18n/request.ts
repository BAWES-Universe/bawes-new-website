import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from '../lib/locales';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = requested ?? defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
