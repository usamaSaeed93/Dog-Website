const items = [
    {
      title: "Pet Care Service 1",
      description: "Description line 1 Description Line 2 Description line 3",
      price: "From $39/complex"
    },
    {
      title: "Pet Care Service 2",
      description: "Description line 1 Description Line 2 Description line 3",
      price: "From $39/complex"
    },
    {
      title: "Pet Care Service 3",
      description: "Description line 1 Description Line 2 Description line 3",
      price: "From $39/complex"
    },
    {
      title: "Pet Care Service 4",
      description: "Description line 1 Description Line 2 Description line 3",
      price: "From $39/complex"
    },
    {
      title: "Pet Care Service 5",
      description: "Description line 1 Description Line 2 Description line 3",
      price: "From $39/complex"
    },
  ];
  
  const jsonData = JSON.stringify(items);
  console.log(jsonData);
  const Products1 = [
    {
      imageSrc: "../Assets/Images/png/pet1",
      description: "Golden Retriever\nFriendly and playful",
      price: "$50.12"
    },
    {
      imageSrc: "../Assets/Images/png/pet2",
      description: "German Shepherd\nLoyal and intelligent",
      price: "$40.35"
    },
    {
      imageSrc: "../Assets/Images/png/pet3",
      description: "Labrador Retriever\nEnergetic and affectionate",
      price: "$32.51"
    }
  ];

  
  const Products2=[
    {
      "imageSrc":  "../Assets/Images/png/pet4.png",
      "description": "Poodle\nSmart and hypoallergenic",
      "price": 800
    },
    {
      "imageSrc": "../Assets/Images/png/pet5.png",
      "description": "Bulldog\nFriendly and courageous",
      "price": 900
    },
    {
      "imageSrc":  "../Assets/Images/png/pet6.png",
      "description": "Siberian Husky\nEnergetic and outgoing",
      "price": 1000
    }
  ]
const Peroducts3=[
  {
    "imageSrc":  "../Assets/Images/png/pet7.png",
    "description": "Poodle\nSmart and hypoallergenic",
    "price": 800
  },
  {
    "imageSrc":  "../Assets/Images/png/pet8.png",
    "description": "Bulldog\nFriendly and courageous",
    "price": 900
  },
  {
    "imageSrc": "../Assets/Images/png/pet9.png",
    "description": "Siberian Husky\nEnergetic and outgoing",
    "price": 1000
  }
]
  
export function fetchDummyData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products1);
    }, 2000); // Simulating an asynchronous delay of 2 seconds
  });
}
