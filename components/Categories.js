import React, { useState } from "react";
import { View, Text, Image, ScrollView, } from "react-native";

const items =  [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Bakery",
    },
    {
        image: require("../assets/images/138-1381406_fast-food-food-junk-food-kitchen-meal-restaurant-fast-food-icon-png.png"),
        text: "Fast Food",
    },
    {
        image: require("../assets/images/grocery.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffe",
    },
];

export default function Categories() {
    return (
        <View
          style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20,
          }}
        >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                <Image
                    source={item.image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: "contain",
                    }}
                />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
}