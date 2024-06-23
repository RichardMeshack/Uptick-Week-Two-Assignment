function recommendRestaurants(restaurants, targetRating){

    const sortedRestaurants = restaurants.sort((a,b) => b.rating - a.rating);

    if (targetRating !== undefined) {
        return sortedRestaurants.filter(restaurants => restaurants.rating >= targetRating);

    }

    return sortedRestaurants;
}
const restaurants = [
    {name:"Pizza Palace", rating:4.8},
    {name:"Curry Corner", rating:4.2},
    {name:"Amazing Asian", rating:4.5},
    {name:"Healthy Eats", rating:3.9},
];
const targetRating = 4.3;
console.log(recommendRestaurants(restaurants, targetRating));