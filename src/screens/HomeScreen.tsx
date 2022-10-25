import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { View, Text, Dimensions, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CalendarIcon,
  GoBackIcon,
  MoreIcon,
  PhoneIcon,
  VideoCallIcon,
} from "../assets/Icons";
import Container from "../components/Container";
import IconButton from "../components/IconButton";
import Neurology from "../assets/images/neurology.svg";
import Genetics from "../assets/images/genetics.svg";
import Dentistry from "../assets/images/dentistry.svg";
import Surgery from "../assets/images/surgery.svg";

const addCommaToCount = (count: number) => {
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const specialties = [
  {
    name: "Neurology",
    image: <Neurology />,
    doctorCount: 1839,
  },
  {
    name: "Genetics",
    image: <Genetics />,
    doctorCount: 1912,
  },
  {
    name: "Dentistry",
    image: <Dentistry />,
    doctorCount: 3855,
  },
  {
    name: "Surgery",
    image: <Surgery />,
    doctorCount: 1316,
  },
  // {
  //   name: "Cardiology",
  //   image: require("../assets/images/cardiology.png"),
  // },

  // {
  //   name: "Dermatology",
  //   image: require("../assets/images/dermatology.png"),
  // },
  // {
  //   name: "Gastroenterology",
  //   image: require("../assets/images/gastroenterology.png"),
  // },
  // {
  //   name: "Ophthalmology",
  //   image: require("../assets/images/ophthalmology.png"),
  // },
  // {
  //   name: "Orthopedics",
  //   image: require("../assets/images/orthopedics.png"),
  // },
  // {
  //   name: "Pediatrics",
  //   image: require("../assets/images/pediatrics.png"),
  // },
];

export default function HomeScreen() {
  return (
    <Container>
      <View className="flex-row justify-between items-center">
        <Text className="text-lg">Welcome, John</Text>
        <View className="flex-row">
          <IconButton classes="mr-1">
            <CalendarIcon />
          </IconButton>
          <IconButton outline={false}>
            <MoreIcon />
          </IconButton>
        </View>
      </View>

      <View
        className={`flex-col justify-between mt-4 bg-primary h-[450px] rounded-3xl px-3 shadow-md shadow-primary-500`}
      >
        <View className="justify-between p-4 w-3/4">
          <Text className="text-white font-bold text-4xl mb-4">
            Covid-19 Healthcare
          </Text>
          <Text className="text-white text-xl">
            Book your next online appointments
          </Text>
        </View>
        <View className="items-center w-full">
          <Image
            source={require("../assets/images/illustration.png")}
            className="flex-end"
            style={{
              aspectRatio: 1.3,
            }}
          />
        </View>
      </View>
      <View className="bg-gray-200 my-4 flex flex-row justify-between items-center rounded-xl p-4 px-3">
        <View className="flex-col">
          <Text className="font-bold mb-1 text-lg">STI Problems?</Text>
          <Text className="font-light text-gray-900">
            Find suitable specialists here
          </Text>
        </View>
        <IconButton classes="mr-1 bg-white p-0 border-0">
          <Ionicons name="arrow-forward" size={24} color="black" />
        </IconButton>
      </View>
      <View className="flex flex-1">
        <Text className="font-bold text-lg mb-2">Specialty 😷</Text>
        <FlatList
          style={{
            flex: 1,
          }}
          data={specialties}
          renderItem={({ item }) => (
            <View
              key={item.name}
              className="flex-col items-center justify-center bg-gray-200 w-36 rounded-xl "
            >
              {item.image}
              <View className="pt-2 items-center">
                <Text className="text-lg mb-1">{item.name}</Text>
                <Text className="text-gray-700">
                  {addCommaToCount(item.doctorCount)} Doctors
                </Text>
              </View>
            </View>
          )}
          horizontal
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
}
