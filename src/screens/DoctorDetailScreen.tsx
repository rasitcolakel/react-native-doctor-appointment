import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../../App";
import Container from "../components/Container";
import IconButton from "../components/IconButton";
import {
  AchievementIcon,
  CallIcon,
  FilterIcon,
  GoBackIcon,
  MessagingIcon,
  MoreIcon,
  PeopleIcon,
  StarOIcon,
  VideoCallIcon,
} from "../assets/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../components/Button";
import { faker } from "@faker-js/faker";

type Props = NativeStackScreenProps<AppStackParamsList, "DoctorDetail">;

const DoctorDetailScreen = ({ navigation, route }: Props) => {
  const { firstName, lastName, specialty, avatar, online } =
    route.params.doctor;

  const city = faker.address.city();

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View className="flex items-center w-full flex-1 dark:bg-black mb-6">
        <LinearGradient
          // Button Linear Gradient
          colors={["#FFFFFF", "#FCFAFA"]}
          className={`flex items-center w-full bg-gradient-to-r rounded-b-3xl  pb-4 px-7`}
        >
          <View className="flex w-full flex-row items-center justify-between mt-12">
            <IconButton
              classes="bg-white p-0"
              onPress={() => navigation.goBack()}
            >
              <GoBackIcon fill="fill-black dark:fill-white" />
            </IconButton>
            <IconButton outline={false}>
              <MoreIcon fill="fill-black dark:fill-white" />
            </IconButton>
          </View>
          <View className="w-full rounded-xl items-center">
            <View className="relative pb-4 rounded-full shadow-lg shadow-slate-300">
              <Image
                source={{ uri: avatar }}
                className="w-36 h-36 rounded-full"
              />
              {online && (
                <View className="absolute top-0 right-0 bg-primary rounded-full w-10 h-10 border-[6px] border-white" />
              )}
            </View>
            <Text className="text-xl font-bold mt-4">{`Dr. ${firstName} ${lastName}`}</Text>
            <Text className="text-md mt-2 font-light text-slate-700">
              {specialty}
            </Text>
          </View>
          <View className="flex-row w-full justify-between mt-5">
            <View className="w-[30%] bg-white shadow items-center h-32 rounded-2xl">
              <View className="bg-blue-200 w-12 items-center h-16 rounded-b-2xl justify-end">
                <IconButton outline={false}>
                  <PeopleIcon fill="fill-blue-500" />
                </IconButton>
              </View>
              <View className="items-center flex-1 justify-center">
                <Text className="font-bold text-lg pt-2">1000+</Text>
                <Text className="font-light text-slate-700">Patients</Text>
              </View>
            </View>
            <View className="w-[30%] bg-white shadow items-center h-32 rounded-2xl">
              <View className="bg-pink-200 w-12 items-center h-16 rounded-b-2xl justify-end">
                <IconButton outline={false}>
                  <AchievementIcon fill="fill-pink-500" />
                </IconButton>
              </View>
              <View className="items-center flex-1 justify-center">
                <Text className="font-bold text-lg pt-2">10 Yrs</Text>
                <Text className="font-light text-slate-700">Experience</Text>
              </View>
            </View>
            <View className="w-[30%] bg-white shadow items-center h-32 rounded-2xl">
              <View className="bg-amber-200 w-12 items-center h-16 rounded-b-2xl justify-end">
                <IconButton outline={false}>
                  <StarOIcon fill="fill-amber-500" />
                </IconButton>
              </View>
              <View className="items-center flex-1 justify-center">
                <Text className="font-bold text-lg pt-2">4.5</Text>
                <Text className="font-light text-slate-700">Ratings</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View className="mt-4">
          <View className="w-full justify-between mt-5 px-7">
            <Text className="font-bold text-lg">About Doctor</Text>
            <Text className="mt-2 text-base text-slate-500">
              Dr. {firstName + " " + lastName} is a top specialist at Bridge
              Hospital at {city}. He has achieved several awards and recognition
              for is contribution and service in his own field. He is available
              for private consultation.
            </Text>
            <Text className="font-bold text-lg mt-5">Working Time</Text>
            <Text className="mt-2 text-base text-slate-500">
              Mon - Sat (08:30 AM - 09:00 PM)
            </Text>
            <Text className="font-bold text-lg mt-5">Communication</Text>
            <View>
              <View className="flex w-full flex-row mt-5 items-center">
                <IconButton
                  outline={false}
                  className="bg-pink-100 items-center rounded-b-2xl w-12 h-12"
                >
                  <MessagingIcon fill="fill-pink-400" width={22} height={22} />
                </IconButton>
                <View className="flex ml-2">
                  <Text className="text-xl mb-1">Messaging</Text>
                  <Text className="text-slate-500 text-sm">
                    Chat me up, share photos.
                  </Text>
                </View>
              </View>
              <View className="flex w-full flex-row mt-5 items-center">
                <IconButton
                  outline={false}
                  className="bg-blue-100 items-center rounded-b-2xl w-12 h-12"
                >
                  <CallIcon fill="fill-blue-400" width={22} height={22} />
                </IconButton>
                <View className="flex ml-2">
                  <Text className="text-xl mb-1">Audio Call</Text>
                  <Text className="text-slate-500 text-sm">
                    Call your doctor directly.
                  </Text>
                </View>
              </View>
              <View className="flex w-full flex-row mt-5 items-center">
                <IconButton
                  outline={false}
                  className="bg-amber-100 items-center rounded-b-2xl w-12 h-12"
                >
                  <VideoCallIcon fill="fill-amber-400" width={22} height={22} />
                </IconButton>
                <View className="flex ml-2">
                  <Text className="text-xl mb-1">Video Call</Text>
                  <Text className="text-slate-500 text-sm">
                    See your doctor live.
                  </Text>
                </View>
              </View>
            </View>

            <Button
              text={"Book Appointment"}
              className="rounded-2xl p-4 mt-6"
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DoctorDetailScreen;
