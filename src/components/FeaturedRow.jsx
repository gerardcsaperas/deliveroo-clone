import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({ id, title, description }) => {
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
        <RestaurantCard
          id="restaurant1"
          imgUrl="https://links.papareact.com/wru"
          title="Il Cenacolo"
          rating={4.5}
          genre="Italian"
          address="123 Granollers St"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={1}
        />
        <RestaurantCard
          id="restaurant1"
          imgUrl="https://links.papareact.com/wru"
          title="Il Cenacolo"
          rating={4.5}
          genre="Italian"
          address="123 Granollers St"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={1}
        />
        <RestaurantCard
          id="restaurant1"
          imgUrl="https://links.papareact.com/wru"
          title="Il Cenacolo"
          rating={4.5}
          genre="Italian"
          address="123 Granollers St"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={1}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
