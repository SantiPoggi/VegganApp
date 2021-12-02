import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localRestaurants, } from "../components/RestaurantItems";

const YELP_API_KEY=
"WWVy0seqbHJVkjrVDcW5RoAk2xCiQz1mQFFmjLl9_xNcHY1rA9Adit3V5r7nQ3SlhbO3gyoKfK2EmoDvt2ydJjpaz0-F1QgpoZR3LUSLHBTUHZkvN6Ogippb14-eYXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");
  
    const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`, 
        },
      };
  
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
            json.businesses.filter((business) =>
              business.transactions.includes(activeTab.toLowerCase())
            )
          )
        );
    };
  
    useEffect(() => {
      getRestaurantsFromYelp();
    }, [city]);     

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
          <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar cityHandler={setCity} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems
              restaurantData={restaurantData}
              navigation={navigation}
            />
          </ScrollView>
          <Divider width={1} />
          <BottomTabs />
        </SafeAreaView>
    );
}