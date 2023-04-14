import { useCallback, useState } from 'react';
import { FilterOption, Restaurant } from '../types';
import { DEFAULT_CATEGORY, DEFAULT_SORT_BY } from '../constants';

const filterRestaurant = (restaurantList: Restaurant[], filter: string) => {
  if (filter === DEFAULT_CATEGORY) return restaurantList;

  return restaurantList.filter((restaurant) => restaurant.category === filter);
};

const sortByName = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.name.localeCompare(b.name));
};

const sortByDistance = (restaurantList: Restaurant[]) => {
  return [...restaurantList].sort((a, b) => a.distance - b.distance);
};

const sortRestaurant = (restaurantList: Restaurant[], sortBy: string) => {
  if (sortBy === DEFAULT_SORT_BY) return sortByName(restaurantList);

  return sortByDistance(restaurantList);
};

const filterAndSortRestaurantList = (
  restaurantList: Restaurant[],
  filter: string = DEFAULT_CATEGORY,
  sortBy: string = DEFAULT_SORT_BY
) => {
  const filteredRestaurantList = filterRestaurant([...restaurantList], filter);

  return sortRestaurant([...filteredRestaurantList], sortBy);
};

const useRestaurantList = (restaurantList: Restaurant[]) => {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);

  const updateCurrentRestaurantList = useCallback(
    (displayStatus: FilterOption) => {
      const { category, sortBy } = displayStatus;
      const updatedRestaurantList = filterAndSortRestaurantList(restaurantList, category, sortBy);
      setCurrentRestaurantList(updatedRestaurantList);
    },
    [restaurantList]
  );

  return { currentRestaurantList, updateCurrentRestaurantList };
};

export { filterAndSortRestaurantList, useRestaurantList };
