import catImage from "./images/089.jpg";

export const petsDB = [
  {
    name: "Jackie",
    imgs: [catImage],
    id: "1234",
    breed: "Dvorniajka",
    location: "NewYork",
    age: "Young",
    gender: "Female",
    size: "Small",
    color: "White",
    org: "CARMA, Fredericton Chapter",
    aboutInfo: [
      {
        label: "CHARACTERISTICS",
        info: "Quiet, Calm, Relaxed, Shy, Playful",
      },
      {
        label: "COAT LENGTH",
        info: "Short",
      },
      {
        label: "HOUSE-TRAINED",
        info: "Yes",
      },
      {
        label: "HEALTH",
        info: "Vaccinations up to date, spayed / neutered.",
      },
    ],
  },
  {
    name: "Pensil",
    imgs: [catImage],
    id: "12345",
    breed: "Dvorniajka",
    location: "NewYork",
    age: "Young",
    gender: "Female",
    size: "Small",
    color: "White",
    aboutInfo: [
      {
        label: "CHARACTERISTICS",
        info: "Quiet, Calm, Relaxed, Shy, Playful",
      },
      {
        label: "COAT LENGTH",
        info: "Short",
      },
      {
        label: "HOUSE-TRAINED",
        info: "Yes",
      },
      {
        label: "HEALTH",
        info: "Vaccinations up to date, spayed / neutered.",
      },
    ],
    org: "CARMA, Fredericton Chapter",
  },
  {
    name: "Bob",
    imgs: [catImage],
    id: "123456",
    breed: "Dvorniajka",
    location: "NewYork",
    age: "Young",
    gender: "Female",
    size: "Small",
    color: "White",
    org: "CARMA, Fredericton Chapter",
    aboutInfo: [],
  },
  {
    name: "Jack",
    imgs: [catImage],
    id: "234",
    breed: "Dvorniajka",
    location: "NewYork",
    age: "Young",
    gender: "Female",
    size: "Small",
    color: "White",
    org: "CARMA, Fredericton Chapter",
    aboutInfo: [],
  },
  {
    name: "Luna",
    imgs: [catImage],
    id: "2345",
    breed: "Dvorniajka",
    location: "NewYork",
    age: "Young",
    gender: "Female",
    size: "Small",
    color: "White",
    org: "CARMA, Fredericton Chapter",
    aboutInfo: [],
  },
  {
    name: "Yoshi",
    imgs: [catImage],
    id: "23456",
    breed: "Dvorniajka",
    location: "NewYork",
    age: "Young",
    gender: "Female",
    size: "Small",
    color: "White",
    org: "CARMA, Fredericton Chapter",
    aboutInfo: [],
  },
];

export const typeOpt = [
  { value: "Cat", label: "Cat" },
  { value: "Dog", label: "Dog" },
  { value: "Rabbit", label: "Rabbit" },
];

export const dogBreedsOpt = [
  { value: "Pit Bull Terrier", label: "Pit Bull Terrier" },
  { value: "Cane Corso", label: "Cane Corso" },
];

export const catBreedsOpt = [
  { value: "Domestic Short Hair", label: "Domestic Short Hair" },
  { value: "Siamese", label: "Siamese" },
];

export const ageOpt = [
  { value: "Puppy", label: "Puppy" },
  { value: "Young", label: "Young" },
  { value: "Adult", label: "Adult" },
  { value: "Senior", label: "Senior" },
];

export const sizeOpt = [
  { value: "Small", label: "Small" },
  { value: "Medium", label: "Medium" },
  { value: "Large", label: "Large" },
  { value: "Extra Large", label: "Extra Large" },
];

export const genderOpt = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
