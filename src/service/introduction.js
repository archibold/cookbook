import { setItem, getItem } from '@/service/storage.js'

export const getRecipeList = () => {
  return getItem('recipeList') || [];
}

export const setCookbookName = (cookbookName) => {
  return setItem('cookbookName', cookbookName) || '';
}

export const getCookbookName = () => {
  return getItem('cookbookName');
}
