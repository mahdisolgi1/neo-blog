/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SharedSeoComponent } from './sharedSeoComponent';
import type { GlobalRequestDataFavicon } from './globalRequestDataFavicon';
import type { GlobalRequestDataLocalizationsItem } from './globalRequestDataLocalizationsItem';

export type GlobalRequestData = {
  defaultSeo?: SharedSeoComponent;
  favicon?: GlobalRequestDataFavicon;
  locale?: string;
  localizations?: GlobalRequestDataLocalizationsItem[];
  siteDescription: string;
  siteName: string;
};
