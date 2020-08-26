import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
} from "react-native";

// Installed Packages
import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  // Carousel data

  const Images = [
    { image: require("./assets/card1.png") },
    { image: require("./assets/card2.png") },
    { image: require("./assets/card3.png") },
    { image: require("./assets/card4.png") },
    { image: require("./assets/card5.png") },
    { image: require("./assets/card6.png") },
  ];

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{
            width: 460,
            height: 280,
            borderRadius: 10,
            alignItems: "center",
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 50, paddingHorizontal: 14 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 26, color: "#fff" }}>Welcome Back,</Text>
            <Text style={{ fontSize: 26, color: "#fff", opacity: 0.6 }}>
              Clinton James
            </Text>
          </View>
          <View>
            <Image
              source={require("./assets/ClintMemoji.png")}
              style={styles.ProfileImage}
            />
            <View style={styles.ProfileImageNotification}></View>
          </View>
        </View>

        {/* Carousel section */}
        <View>
          <Carousel
            layout={"tinder"}
            ref={carouselRef}
            data={Images}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width - 10}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
  },
  ProfileImage: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
});
