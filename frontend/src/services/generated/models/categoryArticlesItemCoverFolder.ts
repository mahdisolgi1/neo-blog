/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryArticlesItemCoverFolderChildrenItem } from './categoryArticlesItemCoverFolderChildrenItem';
import type { CategoryArticlesItemCoverFolderCreatedBy } from './categoryArticlesItemCoverFolderCreatedBy';
import type { CategoryArticlesItemCoverFolderFilesItem } from './categoryArticlesItemCoverFolderFilesItem';
import type { CategoryArticlesItemCoverFolderLocalizationsItem } from './categoryArticlesItemCoverFolderLocalizationsItem';
import type { CategoryArticlesItemCoverFolderParent } from './categoryArticlesItemCoverFolderParent';
import type { CategoryArticlesItemCoverFolderUpdatedBy } from './categoryArticlesItemCoverFolderUpdatedBy';

export type CategoryArticlesItemCoverFolder = {
  children?: CategoryArticlesItemCoverFolderChildrenItem[];
  createdAt?: string;
  createdBy?: CategoryArticlesItemCoverFolderCreatedBy;
  documentId?: string;
  files?: CategoryArticlesItemCoverFolderFilesItem[];
  id?: number;
  locale?: string;
  localizations?: CategoryArticlesItemCoverFolderLocalizationsItem[];
  name?: string;
  parent?: CategoryArticlesItemCoverFolderParent;
  path?: string;
  pathId?: number;
  publishedAt?: string;
  updatedAt?: string;
  updatedBy?: CategoryArticlesItemCoverFolderUpdatedBy;
};
