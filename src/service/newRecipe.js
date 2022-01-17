import { getItem, setItem } from '@/utils/storage.js'

export const getIndigrentList = () => {
  return getItem('IndigrentList') || [];
}

export const setIndigrentList = (indigrentList) => {
  setItem('indigrentList', indigrentList);
}

export const addRecipe = (recipe) => {
  const recipeList = getItem('recipeList') || [];

  recipeList.push(recipe);
  setItem('recipeList', recipeList);
}
