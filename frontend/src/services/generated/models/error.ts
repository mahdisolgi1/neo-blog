/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ErrorData } from './errorData';
import type { ErrorError } from './errorError';

export interface Error {
  /** @nullable */
  data?: ErrorData;
  error: ErrorError;
}
