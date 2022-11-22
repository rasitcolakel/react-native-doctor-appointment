import { faker } from "@faker-js/faker";

export type DoctorCardType = {
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  rating: string;
  reviews: string;
  avatar: string;
  online: boolean;
};

const specialties = [
  "allergist",
  "anesthesiologist",
  "cardiologist",
  "chiropractor",
  "dentist",
  "dermatologist",
  "gynecologist",
  "midwife",
  "naturopath",
  "neurologist",
  "obstetrician",
  "specialist",
  "oncologist",
  "ophthalmologist",
  "pediatrician",
  "specialist",
  "podiatrist",
  "psychiatrist",
  "radiologist",
];

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const generateDoctors = (length: number): DoctorCardType[] => {
  return Array.from({ length }, (i) => {
    const sex: "male" | "female" = faker.helpers.arrayElement([
      "male",
      "female",
    ]);
    return {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(sex),
      lastName: faker.name.lastName(),
      avatar: `https://api.lorem.space/image/face?w=150&h=150&hash=${faker.datatype.uuid()}`,
      specialty: capitalizeFirstLetter(faker.helpers.arrayElement(specialties)),
      reviews: faker.random.numeric(3),
      rating: ((Number(faker.random.numeric(5)) / 6) % 5).toFixed(2).toString(),
      online: faker.random.numeric(1) === "1",
    };
  });
};
