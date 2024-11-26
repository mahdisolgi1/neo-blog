/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import useSwr from 'swr'
import type {
  Arguments,
  Key,
  SWRConfiguration
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import type {
  CategoryListResponse,
  CategoryRequest,
  CategoryResponse,
  Error,
  GetCategoriesParams
} from '.././models'


  
  export const getCategories = (
    params?: GetCategoriesParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<CategoryListResponse>> => {
    return axios.default.get(
      `http://localhost:1337/api/categories`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }



export const getGetCategoriesKey = (params?: GetCategoriesParams,) => [`http://localhost:1337/api/categories`, ...(params ? [params]: [])] as const;

export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>
export type GetCategoriesQueryError = AxiosError<Error>

export const useGetCategories = <TError = AxiosError<Error>>(
  params?: GetCategoriesParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getCategories>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetCategoriesKey(params) : null);
  const swrFn = () => getCategories(params, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
export const postCategories = (
    categoryRequest: CategoryRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<CategoryResponse>> => {
    return axios.default.post(
      `http://localhost:1337/api/categories`,
      categoryRequest,options
    );
  }



export const getPostCategoriesMutationFetcher = ( options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: CategoryRequest }): Promise<AxiosResponse<CategoryResponse>> => {
    return postCategories(arg, options);
  }
}
export const getPostCategoriesMutationKey = () => [`http://localhost:1337/api/categories`] as const;

export type PostCategoriesMutationResult = NonNullable<Awaited<ReturnType<typeof postCategories>>>
export type PostCategoriesMutationError = AxiosError<Error>

export const usePostCategories = <TError = AxiosError<Error>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof postCategories>>, TError, Key, CategoryRequest, Awaited<ReturnType<typeof postCategories>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getPostCategoriesMutationKey();
  const swrFn = getPostCategoriesMutationFetcher(axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
export const getCategoriesId = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<CategoryResponse>> => {
    return axios.default.get(
      `http://localhost:1337/api/categories/${id}`,options
    );
  }



export const getGetCategoriesIdKey = (id: number,) => [`http://localhost:1337/api/categories/${id}`] as const;

export type GetCategoriesIdQueryResult = NonNullable<Awaited<ReturnType<typeof getCategoriesId>>>
export type GetCategoriesIdQueryError = AxiosError<Error>

export const useGetCategoriesId = <TError = AxiosError<Error>>(
  id: number, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getCategoriesId>>, TError> & { swrKey?: Key, enabled?: boolean }, axios?: AxiosRequestConfig }
) => {
  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetCategoriesIdKey(id) : null);
  const swrFn = () => getCategoriesId(id, axiosOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
export const putCategoriesId = (
    id: number,
    categoryRequest: CategoryRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<CategoryResponse>> => {
    return axios.default.put(
      `http://localhost:1337/api/categories/${id}`,
      categoryRequest,options
    );
  }



export const getPutCategoriesIdMutationFetcher = (id: number, options?: AxiosRequestConfig) => {
  return (_: Key, { arg }: { arg: CategoryRequest }): Promise<AxiosResponse<CategoryResponse>> => {
    return putCategoriesId(id, arg, options);
  }
}
export const getPutCategoriesIdMutationKey = (id: number,) => [`http://localhost:1337/api/categories/${id}`] as const;

export type PutCategoriesIdMutationResult = NonNullable<Awaited<ReturnType<typeof putCategoriesId>>>
export type PutCategoriesIdMutationError = AxiosError<Error>

export const usePutCategoriesId = <TError = AxiosError<Error>>(
  id: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof putCategoriesId>>, TError, Key, CategoryRequest, Awaited<ReturnType<typeof putCategoriesId>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getPutCategoriesIdMutationKey(id);
  const swrFn = getPutCategoriesIdMutationFetcher(id, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
export const deleteCategoriesId = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<number>> => {
    return axios.default.delete(
      `http://localhost:1337/api/categories/${id}`,options
    );
  }



export const getDeleteCategoriesIdMutationFetcher = (id: number, options?: AxiosRequestConfig) => {
  return (_: Key, __: { arg: Arguments }): Promise<AxiosResponse<number>> => {
    return deleteCategoriesId(id, options);
  }
}
export const getDeleteCategoriesIdMutationKey = (id: number,) => [`http://localhost:1337/api/categories/${id}`] as const;

export type DeleteCategoriesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCategoriesId>>>
export type DeleteCategoriesIdMutationError = AxiosError<Error>

export const useDeleteCategoriesId = <TError = AxiosError<Error>>(
  id: number, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof deleteCategoriesId>>, TError, Key, Arguments, Awaited<ReturnType<typeof deleteCategoriesId>>> & { swrKey?: string }, axios?: AxiosRequestConfig}
) => {

  const {swr: swrOptions, axios: axiosOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getDeleteCategoriesIdMutationKey(id);
  const swrFn = getDeleteCategoriesIdMutationFetcher(id, axiosOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
