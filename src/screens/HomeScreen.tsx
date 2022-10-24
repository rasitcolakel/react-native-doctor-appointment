import { View, Text } from "react-native";
import { GoBackIcon, PhoneIcon, VideoCallIcon } from "../assets/Icons";
import IconButton from "../components/IconButton";
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View className="gap-2">
        <IconButton classes="mb-4">
          <PhoneIcon />
        </IconButton>
        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <GoBackIcon />
        </IconButton>
      </View>
    </View>
  );
}
