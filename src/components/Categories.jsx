import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing1" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing2" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing3" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing4" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing5" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing6" />
    </ScrollView>
  );
};

export default Categories;
