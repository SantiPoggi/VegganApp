import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Gordo Vegano",
        image_url: "https://www.madmonkeyhostels.com/wp-content/uploads/2018/03/39155069365_f1e61b225d_b.jpg",
        categories: ["Cafe", "Bakery"],
        price: "$$$",
        reviews: 345,
        rating: 4.8,
    },
    {
        name: "Burger Green",
        Image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4mMwHNFhiIq2Guh5tuBTFL2NKGmWjK7XGQ&usqp=CAU",
        categories: ["fast-food", "Bar"],
        price: "$$$",
        reviews: 345,
        rating: 4.8,
    },
    {
        name: "Gordo Vegano",
        image_url: "https://www.madmonkeyhostels.com/wp-content/uploads/2018/03/39155069365_f1e61b225d_b.jpg",
        categories: ["Cafe", "Bakery"],
        price: "$$$",
        reviews: 345,
        rating: 4.8,
    },
]

export default function RestaurantItem(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (         
                <View 
                    key={index}
                    style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
                >
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo 
                        name={restaurant.name}
                        rating={restaurant.rating}
                    />
                </View>
            ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>    
        <Image 
            source={{
                uri: props.image,
            }} 
            style={{width: "100%", height: 180}}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color= "#fff" />    
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 10, color: "gray" }}>
                25-40 * min
            </Text>
        </View>
        <View>   
            <Text style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15, }}>
            {props.rating}
            </Text>
        </View> 
    </View>
);
