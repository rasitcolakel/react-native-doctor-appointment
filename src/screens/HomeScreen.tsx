import { View, Text, Dimensions, Image } from "react-native";
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
        className={`flex-col justify-between mt-4 bg-primary h-[500px] rounded-3xl px-3 shadow-md shadow-primary-500`}
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
            source={require("../assets/illustration.png")}
            className="flex-end"
            style={{
              aspectRatio: 1.3,
            }}
          />
        </View>
      </View>
    </Container>
  );
}
