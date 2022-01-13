import { getItem, setItem } from '@/service/storage.js'

export const getIndigrentList = () => {
  return getItem('IndigrentListTemp') || [];
}

export const setIndigrentList = (indigrentList) => {
  setItem('indigrentList', indigrentList);
}

export const addRecipe = (recipe) => {
  const recipeList = getItem('recipeList') || [];

  recipeList.push(recipe);
  setItem('recipeList', recipeList);
}
