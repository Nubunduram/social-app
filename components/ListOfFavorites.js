import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { requestBase } from "../utils/constants";
import { Card } from "./Card";

SplashScreen.preventAutoHideAsync();

const mockData = [
  {
    itemId: "1",
    title: "Card Title 1",
    description: "This is the first card.",
    image: "https://www.123-stickers.com/themes/warehouse/img/cover.png",
  },
  {
    itemId: "2",
    title: "Card Title 2",
    description: "Second card content here.",
    image: "https://www.123-stickers.com/themes/warehouse/img/cover.png",
  },
  {
    itemId: "3",
    title: "Card Title 3",
    description: "Another card for testing.",
    image: "https://www.123-stickers.com/themes/warehouse/img/cover.png",
  },
];

export const ListOfFavorites = () => {
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    async function fetchCardData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setCardList(mockData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCardData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (cardList !== null) {
      await SplashScreen.hideAsync();
    }
  }, [cardList]);

  if (!cardList) {
    return null;
  }

  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <View style={{ paddingHorizontal: 20 }} onLayout={onLayoutRootView}>
      <FlatList
        data={cardList.reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate="fast"
      />
    </View>
  );
};