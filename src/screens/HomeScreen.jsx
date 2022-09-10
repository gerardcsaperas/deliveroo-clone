import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"]{
        ...,
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
      }
    `
      )
      .then((data) => setFeaturedCategories(data))
      .catch((e) => {
        console.error(` 
        There was an error fetching your data from sanity. Error: ${e.message}
      `);
      });
  }, []);

  return (
    <SafeAreaView className="pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-lg">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* SearchBar */}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {/* Featured Rows */}
        {featuredCategories &&
          featuredCategories.map((featuredCategory) => (
            <FeaturedRow
              key={featuredCategory._id}
              id={featuredCategory._id}
              title={featuredCategory.name}
              description={featuredCategory.shortDescription}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
