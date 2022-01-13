import { getItem, setItem } from '@/service/storage.js'

export const getIndigrentList = () => {
  return getItem('IndigrentList') || [];
}

export const setIndigrentList = (indigrentList) => {
  setItem('indigrentList', indigrentList);
}

export const addRecipe = (recipe) => {
  const recipeList = getItem('recipeList') || [];
  console.log(recipeList)
  console.log(recipe)
  recipeList.push(recipe);
  setItem('recipeList', recipeList);
}
