// eslint-disable-next-line import/no-unresolved
import { isEmptyObj } from '@/utils';

export function getPortfolio({ pages }) {
  return getPage(pages, 'portfolio');
}

export function getContacts({ pages }) {
  return getPage(pages, 'contacts');
}

export function getPage(pages, slug) {
  return pages.find(p => p.slug === slug);
}

export function getWorks({ menus, menusActivity, works }) {
  const menu = menus.portfolio;

  if (!menu || isEmptyObj(menu)) {
    return [];
  }

  const menuLink = menu[menusActivity.portfolio];
  const worksType = +menuLink.href;

  return works.filter(w => w.type & worksType);
}