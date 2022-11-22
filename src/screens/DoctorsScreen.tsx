import { View, Text } from "react-native";
import React from "react";
import Container from "../components/Container";
import IconButton from "../components/IconButton";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../../App";
import { FilterIcon, GoBackIcon } from "../assets/Icons";
import DoctorSearchInput from "../components/DoctorSearchInput";
import { FlashList } from "@shopify/flash-list";
import { generateDoctors } from "../utils/generator";
import DoctorCard from "../components/DoctorCard";

type Props = NativeStackScreenProps<AppStackParamsList, "Doctors">;
const data = generateDoctors(1000);
const DoctorsScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <View className="flex flex-row items-center">
        <IconButton classes="bg-white p-0" onPress={() => navigation.goBack()}>
          <GoBackIcon fill="fill-black dark:fill-white" />
        </IconButton>
        <Text className="flex-1 text-center text-xl text-stone-900 dark:text-stone-100">
          Doctors
        </Text>
        <IconButton classes="bg-white p-0">
          <FilterIcon fill="fill-black dark:fill-white" width={19} />
        </IconButton>
      </View>
      <DoctorSearchInput />
      <FlashList
        data={data}
        renderItem={({ item, index }) => (
          <DoctorCard {...item} isLeft={index % 2 == 0} />
        )}
        estimatedItemSize={200}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default DoctorsScreen;
