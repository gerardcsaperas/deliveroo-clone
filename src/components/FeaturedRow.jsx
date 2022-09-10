import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../sanity";
const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "featured" && _id == $id] {
            name,
            shortDescription,
            restaurants[]->{
              name,
              shortDescription,
              image,
              address,
              rating,
              lat,
              long,
              cuisine->{
                title
              },
              dishes[]->{
                name,
                price,
                image,
                shortDescription
              }
            }
          }[0]
        `,
        { id }
      )
      .then((data) => setRestaurants(data.restaurants))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-l">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.cuisine.title}
              address={restaurant.address}
              shortDescription={restaurant.shortDescription}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
