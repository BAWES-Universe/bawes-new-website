import {createNavigation} from 'next-intl/navigation';
import {locales, localePrefix} from './locales';

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales, localePrefix});
