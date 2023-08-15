import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from 'moment'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function snakeToCamel(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = key.replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
      result[newKey] = obj[key];
    }
  }

  return result;
}

export type queryParamsType = {
  page?: number;
  per_page?: number;
  keyword?: string
};

export function objectToQueryParamString(obj: queryParamsType): string {
  const { page, per_page, keyword } = obj;
  const queryParams = [];

  if (page !== undefined && page !== null) {
    queryParams.push(`page=${page}`);
  }

  if (per_page !== undefined && per_page !== null) {
    queryParams.push(`per_page=${per_page}`);
  }

  if (keyword !== undefined && keyword !== null) {
    queryParams.push(`keyword=${encodeURIComponent(keyword)}`);
  }

  return `?${queryParams.join('&')}`;
}

export function formatDateTime(input: string) {
  return moment(input).format('MMMM Do YYYY, h:mm:ss A')
}

export function formatDateTimeFromNow(input: string) {
  return moment(input, 'YYYYMMDD').fromNow()
}

export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};
