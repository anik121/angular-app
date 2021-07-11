interface Food {
  id: number;
  name: string;
  imgPath: string;
  location: string;
}

export const FOOD: Food[] = [
  {
    id: 3,
    name: 'Cardamom Maple Salmon',
    imgPath: '/assets/img/recipe/recipe3.jpg',
    location: 'ambrosia Hotel & restaurant',
  },
  {
    id: 4,
    name: 'Spicy Pork Tenderloin',
    imgPath: '/assets/img/recipe/recipe4.jpg',
    location: 'ambrosia Hotel & restaurant',
  },
  {
    id: 5,
    name: 'Burmese Chicken Curry',
    imgPath: '/assets/img/recipe/recipe5.jpg',
    location: 'ambrosia Hotel & restaurant',
  },
  {
    id: 6,
    name: 'Copycat Fried Chicken',
    imgPath: '/assets/img/recipe/recipe6.jpg',
    location: 'ambrosia Hotel & restaurant',
  },
];
