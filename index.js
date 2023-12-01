const foodData = require('./food.json');

function AllFoodItems() {
  return foodData;
}

function VegetableFoodItems() {
  return foodData.filter((food) => food.category === 'Vegetable');
}

function FruitFoodItems() {
  return foodData.filter((food) => food.category === 'Fruit');
}

function ProteinFoodItems() {
  return foodData.filter((food) => food.category === 'Protein');
}

function NutsFoodItems() {
  return foodData.filter((food) => food.category === 'Nuts');
}

function GrainsFoodItems() {
  return foodData.filter((food) => food.category === 'Grain');
}

function DairyFoodItems() {
  return foodData.filter((food) => food.category === 'Dairy');
}

function FoodItemsAboveCalorie(calorie) {
  return foodData.filter((food) => food.calorie > calorie);
}

function FoodItemsBelowCalorie(calorie) {
  return foodData.filter((food) => food.calorie < calorie);
}

function FoodItemsByProteinContent() {
  return foodData.sort((a, b) => b.protiens - a.protiens);
}

function FoodItemsByCarbContent() {
  return foodData.sort((a, b) => a.cab - b.cab);
}

console.log('Task 1: List all the food items');
console.log(AllFoodItems());

console.log('\nTask 2: List all the food items with category vegetables');
console.log(VegetableFoodItems());

console.log('\nTask 3: List all the food items with category fruit');
console.log(FruitFoodItems());

console.log('\nTask 4: List all the food items with category protein');
console.log(ProteinFoodItems());

console.log('\nTask 5: List all the food items with category nuts');
console.log(NutsFoodItems());

console.log('\nTask 6: List all the food items with category grains');
console.log(GrainsFoodItems());

console.log('\nTask 7: List all the food items with category dairy');
console.log(DairyFoodItems());

console.log('\nTask 8: List all the food items with calorie above 100');
console.log(FoodItemsAboveCalorie(100));

console.log('\nTask 9: List all the food items with calorie below 100');
console.log(FoodItemsBelowCalorie(100));

console.log('\nTask 10: List all the food items with highest protein content to lowest');
console.log(FoodItemsByProteinContent());

console.log('\nTask 11: List all the food items with lowest carb content to highest');
console.log(FoodItemsByCarbContent());