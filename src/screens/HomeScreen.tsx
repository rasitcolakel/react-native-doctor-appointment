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
import { useColorScheme } from "nativewind";

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
];

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);
  return (
    <Container>
      <View className="flex-row justify-between items-center">
        <Text className="text-lg text-primary-500">Welcome, John</Text>
        <View className="flex-row">
          <IconButton classes="mr-1" onPress={toggleColorScheme}>
            <CalendarIcon fill="fill-black dark:fill-white" />
          </IconButton>
          <IconButton outline={false}>
            <MoreIcon fill="fill-black dark:fill-white" />
          </IconButton>
        </View>
      </View>

      <View
        className={`flex-col justify-between mt-4 bg-primary h-auto rounded-3xl px-3 shadow-md shadow-primary-500`}
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
      <View className="bg-gray-200 my-6 flex flex-row justify-between items-center rounded-xl p-4 px-3 dark:bg-slate-900">
        <View className="flex-col">
          <Text className="font-bold mb-1 text-lg my-class dark:text-white">
            STI Problems?
          </Text>
          <Text className="font-light text-gray-500">
            Find suitable specialists here
          </Text>
        </View>
        <IconButton classes="mr-1 bg-white p-0 border-0">
          <Ionicons
            name="arrow-forward"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </IconButton>
      </View>
      <View className="flex flex-1">
        <Text className="font-bold text-lg mb-4 text-primary-500">
          Specialty 😷
        </Text>
        <FlatList
          style={{
            flex: 1,
          }}
          data={specialties}
          renderItem={({ item }) => (
            <View
              key={item.name}
              className="flex-col items-center justify-center bg-gray-200 w-36 rounded-xl dark:bg-slate-900"
            >
              {item.image}
              <View className="pt-2 items-center">
                <Text className="text-lg mb-1 dark:text-white">
                  {item.name}
                </Text>
                <Text className="text-gray-700 dark:text-gray-500">
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
