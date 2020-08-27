import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

// Installed Packages
import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  // Users Data
  const Users = [
    {
      key: "1",
      userImage:
        "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Jessica",
      transactionDate: "25 April 20",
      amount: "$350",
      credit: true,
    },
    {
      key: "2",
      userImage:
        "https://images.pexels.com/photos/4447119/pexels-photo-4447119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Mike",
      transactionDate: "13 April 20",
      amount: "$450",
      credit: false,
    },
    {
      key: "4",
      userImage:
        "https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Tricia",
      transactionDate: "22 April 20",
      amount: "$50",
      credit: true,
    },
    {
      key: "4",
      userImage:
        "https://images.pexels.com/photos/3220530/pexels-photo-3220530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Karo",
      transactionDate: "18 April 20",
      amount: "$500",
      credit: true,
    },
    {
      key: "5",
      userImage:
        "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Peace",
      transactionDate: "28 April 20",
      amount: "$100",
      credit: true,
    },
    {
      key: "6",
      userImage:
        "https://images.pexels.com/photos/4286956/pexels-photo-4286956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Eben",
      transactionDate: "26 April 20",
      amount: "$750",
      credit: false,
    },
    {
      key: "7",
      userImage:
        "https://images.pexels.com/photos/5082974/pexels-photo-5082974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Jerry",
      transactionDate: "11 April 20",
      amount: "$250",
      credit: true,
    },
    {
      key: "8",
      userImage:
        "https://images.pexels.com/photos/4171757/pexels-photo-4171757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Toria",
      transactionDate: "15 April 20",
      amount: "$150",
      credit: false,
    },
    {
      key: "9",
      userImage:
        "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userName: "Michael",
      transactionDate: "17 April 20",
      amount: "$100",
      credit: true,
    },
  ];

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
            width: 490,
            height: 220,
            borderRadius: 10,
            alignItems: "center",
            alignSelf: "center",
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  // SLIDING PANEL
  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 100,
  });

  const _draggedValue = new Animated.Value(100);
  const ModalRef = useRef(null);

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
              source={require("./assets/clintjeez.jpeg")}
              style={styles.ProfileImage}
            />
            <View style={styles.ProfileImageNotification}></View>
          </View>
        </View>

        {/* Carousel section */}
        <View style={{ alignItems: "center" }}>
          <Carousel
            layout={"tinder"}
            ref={carouselRef}
            data={Images}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: "visible",
              marginVertical: 30,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>

        {/* Contact section */}
        <View>
          <Text style={{ color: "#fff", opacity: 0.5, marginBottom: 10 }}>
            Send Money
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.AddUser}>
              <View style={styles.AddUserIconbg}>
                <MaterialIcons
                  name="add"
                  color="white"
                  size={28}
                  style={{ alignSelf: "center" }}
                />
              </View>
              <Text style={{ color: "#fff" }}>Add Users</Text>
            </TouchableOpacity>
            <FlatList
              inverted
              horizontal
              data={Users}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => {
                return (
                  <View style={styles.AddUser}>
                    <Image
                      style={styles.AddUserIconbg}
                      source={{ uri: item.userImage }}
                    />
                    <Text style={{ color: "#fff" }}>{item.userName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#0c0c0c",
              borderRadius: 24,
              padding: 14,
            }}
          >
            <View style={styles.PanelHandle}>
              <View>
                <Text style={{ marginVertical: 16, color: "#fff" }}>
                  Recent Transaction
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                data={Users}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.PanelItemContainer}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            source={{ uri: item.userImage }}
                            style={styles.panelImage}
                          />
                        </View>
                        <View>
                          <Text style={{ fontSize: 14, color: "#fff" }}>
                            {item.userName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: "#fff",
                              opacity: 0.6,
                            }}
                          >
                            {item.transactionDate}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#fff",
                            marginHorizontal: 2,
                          }}
                        >
                          {item.amount}
                        </Text>
                        {item.credit ? (
                          <MaterialIcons
                            name="arrow-drop-up"
                            size={22}
                            color="green"
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-drop-down"
                            size={22}
                            color="#ff3838"
                          />
                        )}
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity style={styles.PanelButton}>
                <Text style={styles.panelButtonText}>View Full History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
    textAlign: "center",
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
  carouselStyle: {
    alignSelf: "center",
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  PanelHandle: {
    height: 5,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },
  PanelItemContainer: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "#666",
    padding: 14,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  panelImage: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    borderRadius: 40,
  },
  PanelButton: {
    padding: 14,
    width: 200,
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },
  panelButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
});
