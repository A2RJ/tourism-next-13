import { queryParamsType } from "@/types/utils";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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

export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

export function formatDateTime(input: string) {
  const date = new Date(input);
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' });
  return dateTimeFormat.format(date);
}

export function formatDateTimeFromNow(input: string): string {
  const inputDate = new Date(input);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
}

export function formatDateRange(start: Date, end: Date): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const diffInMilliseconds = endDate.getTime() - startDate.getTime();

  const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
  if (days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);

  return parts.join(', ');
}

export const bearerToken = (token: string | boolean) => {
  return `Bearer ${token}`
}