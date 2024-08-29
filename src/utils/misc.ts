import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const capitalizeFirstLetter = (text: string):string => {
  if(!text || text.length === 0 ) return text;
  if(text.length === 1) return text[0].toUpperCase();
  return text[0].toUpperCase() + text.slice(1);
}