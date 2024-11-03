function convertArrayToJSON(array:any[]) {
    return array.reduce((result, item) => {
        result[item.id] = item.name;
        return result;
    }, {});
}

// Example usage:
const data = [
  {
    id: "black_aswan",
    name: "Black Aswan",
    image: "/Black Aswan/main-image.jpg",
    imagesUrl: [
      "/Black Aswan/black_aswan (1).jpg",
      "/Black Aswan/black_aswan (2).jpg"
    ],
    headerText: "Black Aswan",
    description: [
      "Black Aswan Granite is known for its striking black tones with subtle black and white specks, adding a vibrant and bold look to any space.",
      "This granite is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Granite",
      material_name: "Black Aswan",
      Color: "Black with black and white specks",
      country: "Egypt",
      Quarry_location: "Aswan",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "red_aswan",
    name: "Red Aswan",
    image: "/Red Aswan/main-image.jpg",
    imagesUrl: [
      "/Red Aswan/red_aswan (1).jpg",
      "/Red Aswan/red_aswan (2).jpg",
      "/Red Aswan/red_aswan (3).jpg",
      "/Red Aswan/red_aswan (4).jpg",
      "/Red Aswan/red_aswan (5).jpg",
      "/Red Aswan/red_aswan (6).jpg",
      "/Red Aswan/red_aswan (7).jpg",
      "/Red Aswan/red_aswan (8).jpg",
    ],
    headerText: "Red Aswan",
    description: [
      "Red Aswan Granite is known for its striking red tones with subtle black and white specks, adding a vibrant and bold look to any space.",
      "This granite is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Granite",
      material_name: "Red Aswan",
      Color: "Red with black and white specks",
      country: "Egypt",
      Quarry_location: "Aswan",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "new_halayeb",
    name: "New Halayeb",
    image: "/New Halayeb/main-image.jpg",
    imagesUrl: [
      "/New Halayeb/new_halayeb (1).jpg",
      "/New Halayeb/new_halayeb (2).jpg",
      "/New Halayeb/new_halayeb (3).jpg",
      "/New Halayeb/new_halayeb (4).jpg",
      "/New Halayeb/new_halayeb (5).jpg",
      "/New Halayeb/new_halayeb (6).jpg",
      "/New Halayeb/new_halayeb (7).jpg",
      "/New Halayeb/new_halayeb (8).jpg",
      "/New Halayeb/new_halayeb (9).jpg",
      "/New Halayeb/new_halayeb (10).jpg",
    ],
    headerText: "New Halayeb",
    description: [
      "New Halayeb Granite is known for its unique blend of gray and white tones with striking veining, adding a sophisticated touch to any space.",
      "This granite is sourced from Egyptian quarries and is highly durable and versatile."
    ],
    specification: {
      type: "Granite",
      material_name: "New Halayeb",
      Color: "Gray and white blend",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "gandola",
    name: "Gandola",
    image: "/Gandola/main-image.jpg",
    imagesUrl: [
      "/Gandola/gandola (1).jpg",
      "/Gandola/gandola (2).jpg",
      "/Gandola/gandola (3).jpg",
      "/Gandola/gandola (4).jpg"
    ],
    headerText: "Gandola",
    description: [
      "Gandola Granite is renowned for its unique beige tones with subtle gray and cream veins, adding elegance to any space.",
      "This granite is extracted from quarries in Egypt and offers durability and versatility for a variety of uses."
    ],
    specification: {
      type: "Granite",
      material_name: "Gandola",
      Color: "Beige with gray and cream veins",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "gray_elsherka",
    name: "Gray Elsherka",
    image: "/Grey Sherka/main-image.jpg",
    imagesUrl: [],
    headerText: "Gray Elsherka",
    description: [
      "Gray Elsherka Granite features a unique blend of gray tones with intricate veining, perfect for adding a sophisticated touch to any space.",
      "This granite is sourced from Egyptian quarries and offers exceptional durability and versatility."
    ],
    specification: {
      type: "Granite",
      material_name: "Gray Elsherka",
      Color: "Gray with intricate veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "rosa",
    name: "Rosa",
    image: "/Rosa/main-image.jpg",
    imagesUrl: [
      "/Rosa/rosa_elnasr (4).jpg",
      "/Rosa/rosa_elnasr (5).jpg",
      "/Rosa/rosa_elnasr (7).jpg",
      "/Rosa/rosa_elnasr (6).jpg",
      "/Rosa/rosa_elnasr (1).jpg",
      "/Rosa/rosa_elnasr (2).jpg",
      "/Rosa/rosa_elnasr (3).jpg",

      "/Rosa/rose_katren (1).jpg",
      "/Rosa/rose_katren (2).jpg",
      "/Rosa/rose_katren (3).jpg",
      "/Rosa/rose_katren (4).jpg",
    ],
    headerText: "Rosa",
    description: [
      "Rosa Granite is characterized by its soft pink tones with subtle gray veining, adding a touch of elegance to any space.",
      "This granite is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Granite",
      material_name: "Rosa",
      Color: "Pink with gray veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "verdi",
    name: "Verdi",
    image: "/Verdi/main-image.jpg",
    imagesUrl: [
      "/Verdi/verdi (1).jpg",
      "/Verdi/verdi (2).jpg",
      "/Verdi/verdi (3).jpg",
      "/Verdi/verdi (4).jpg",
      "/Verdi/verdi (5).jpg"
    ],
    headerText: "Verdi",
    description: [
      "Verdi Granite features a unique blend of green tones with subtle veining, perfect for adding a touch of nature to any space.",
      "This granite is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Granite",
      material_name: "Verdi",
      Color: "Green with subtle veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "forsan",
    name: "Forsan",
    image: "/Forsan/main-image.jpg",
    imagesUrl: [
      "/Forsan/forsan (1).jpg",
      "/Forsan/forsan (2).jpg",
      "/Forsan/forsan (3).jpg"
    ],
    headerText: "Red Forsan",
    description: [
      "Red Forsan Granite is known for its vibrant red tones with intricate veining, adding a bold and striking look to any space.",
      "This granite is sourced from Egyptian quarries and offers exceptional durability and versatility."
    ],
    specification: {
      type: "Granite",
      material_name: "Red Forsan",
      Color: "Red with intricate veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "halayeb",
    name: "Halayeb",
    image: "/Halayeb/main-image.jpg",
    imagesUrl: [
      "/Halayeb/halayeb (1).jpg",
      "/Halayeb/halayeb (2).jpg",
      "/Halayeb/halayeb (3).jpg",
      "/Halayeb/halayeb (4).jpg",
      "/Halayeb/halayeb (5).jpg",
      "/Halayeb/halayeb (6).jpg",
      "/Halayeb/halayeb (7).jpg",
      "/Halayeb/halayeb (8).jpg",
    ],
    headerText: "Halayeb",
    description: [
      "Halayeb Granite features a refined white tone with delicate gray veining, perfect for adding a clean and modern look to any space.",
      "This granite is sourced from Egyptian quarries and offers exceptional durability and versatility."
    ],
    specification: {
      type: "Granite",
      material_name: "Halayeb",
      Color: "White with gray veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "safaga",
    name: "Safaga",
    image: "/Safaga/main-image.jpg",
    imagesUrl: [
      "/Safaga/safaga (1).jpg",
      "/Safaga/safaga (2).jpg",
      "/Safaga/safaga (3).jpg"
    ],
    headerText: "Safaga",
    description: [
      "Safaga Granite is known for its vibrant red tones with intricate black and white veining, adding a bold and striking look to any space.",
      "This granite is sourced from Egyptian quarries and offers exceptional durability and versatility."
    ],
    specification: {
      type: "Granite",
      material_name: "Red Safaga",
      Color: "Red with black and white veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
    {
    id: "galala",
    name: "Galala",
    image: "/Galala/main-image.jpg",
    imagesUrl: [
      "/Galala/galala (1).jpg",
      "/Galala/galala (2).jpg",
      "/Galala/galala (3).jpg",
      "/Galala/galala (4).jpg",
      "/Galala/galala (5).jpg",
      "/Galala/galala (6).jpg",
      "/Galala/galala (1).jpeg",
    ],
    headerText: "Galala Marble",
    description: [
      "Galala Marble features a lighter beige tone with delicate gray veins, perfect for creating a bright and airy atmosphere.",
      "This marble is sourced from Egyptian quarries and is known for its durability and versatility."
    ],
    specification: {
      type: "Marble",
      material_name: "Galala",
      Color: "Light beige with gray veins",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "sunny_menia",
    name: "Sunny Menia",
    image: "/Sunny Menia/main-image.jpg",
    imagesUrl: [
      "/Sunny Menia/sunny_menia (1).jpg",
      "/Sunny Menia/sunny_menia (2).jpg",
      "/Sunny Menia/sunny_menia (3).jpg",
      "/Sunny Menia/sunny_menia (4).jpg",
      "/Sunny Menia/sunny_menia (5).jpg",
      "/Sunny Menia/sunny_menia (6).jpg",
    ],
    headerText: "Sunny Menia",
    description: [
      "Sunny Menia Marble is characterized by its warm beige tones with subtle golden veins, adding a touch of warmth to any space.",
      "This marble is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Marble",
      material_name: "Sunny Menia",
      Color: "Beige with golden veins",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "silvia",
    name: "Silvia",
    image: "/Silvia/main-image.jpg",
    imagesUrl: [
      "/Silvia/silvia_menia (1).jpg",
      "/Silvia/silvia_menia (2).jpg",
      "/Silvia/silvia_menia (3).jpg",
      "/Silvia/silvia_menia (4).jpg",
      "/Silvia/silvia_menia (5).jpg",
      "/Silvia/silvia_menia (6).jpg",
      "/Silvia/silvia_menia (9).jpg",
      "/Silvia/silvia_menia (10).jpg",
      "/Silvia/silvia_menia (11).jpg",
      "/Silvia/silvia_menia (12).jpg",
      "/Silvia/silvia_menia (13).jpg",
    ],
    headerText: "Silvia",
    description: [
      "Silvia Menia Marble is characterized by its warm beige tones with subtle golden veins, adding a touch of warmth to any space.",
      "This marble is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Marble",
      material_name: "Silvia Menia",
      Color: "Beige with golden veins",
      country: "Egypt",
      Quarry_location: "Menia",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "triesta",
    name: "Triesta",
    image: "/Triesta/main-image.jpg",
    imagesUrl: [
      "/Triesta/triesta (1).jpg",
      "/Triesta/triesta (2).jpg",
      "/Triesta/triesta (3).jpg",
      "/Triesta/triesta (4).jpg",
      "/Triesta/triesta (5).jpg",
      "/Triesta/triesta (6).jpg",
      "/Triesta/triesta (7).jpg",
      "/Triesta/triesta (8).jpg",
      "/Triesta/triesta (9).jpg",
      "/Triesta/triesta (10).jpg",
    ],
    headerText: "Triesta",
    description: [
      "Triesta Marble is known for its elegant beige tones with subtle gray veins, adding a touch of sophistication to any space.",
      "This marble is sourced from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Marble",
      material_name: "Triesta",
      Color: "Beige with gray veins",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "milly",
    name: "Milly",
    image: "/Milly/main-image.jpg",
    imagesUrl: [
      "/Milly/milly (1).jpg",
      "/Milly/milly (2).jpg",
      "/Milly/milly (3).jpg",
      "/Milly/milly (4).jpg",
      "/Milly/milly (5).jpg",
      "/Milly/milly (6).jpg",
      "/Milly/milly (7).jpg",
      "/Milly/milly (8).jpg",
    ],
    headerText: "Milly",
    description: [
      "Milly Marble features a refined gray tone with subtle veining, perfect for adding sophistication to any space.",
      "This marble is extracted from Egyptian quarries and offers exceptional durability and versatility."
    ],
    specification: {
      type: "Marble",
      material_name: "Milly",
      Color: "Gray with subtle veining",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "shikh_fadl",
    name: "Shikh Fadl",
    image: "/Shikh Fadl/main-image.jpg",
    imagesUrl: [
      "/Shikh Fadl/shikh_fadl (1).jpg",
      "/Shikh Fadl/shikh_fadl (2).jpg",
      "/Shikh Fadl/shikh_fadl (3).jpg",
      "/Shikh Fadl/shikh_fadl (4).jpg"
    ],
    headerText: "Shikh Fadl",
    description: [
      "Shikh Fadl Marble is characterized by its warm beige tones with subtle golden veins, adding a touch of warmth to any space.",
      "This marble is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Marble",
      material_name: "Shikh Fadl",
      Color: "Beige with golden veins",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "carrara",
    name: "Carrara",
    image: "/Carrara/main-image.jpeg",
    imagesUrl: [
      "/Carrara/carrara (1).jpeg",
      "/Carrara/carrara (2).jpeg",
      "/Carrara/carrara (3).jpeg",
      "/Carrara/carrara (4).jpeg",
      "/Carrara/carrara (5).jpeg"
    ],
    headerText: "Carrara",
    description: [
      "Carrara Marble is characterized by its warm beige tones with subtle golden veins, adding a touch of warmth to any space.",
      "This marble is extracted from quarries in Egypt and is highly durable and versatile."
    ],
    specification: {
      type: "Marble",
      material_name: "Carrara",
      Color: "Beige with golden veins",
      country: "Egypt",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        15,
        20,
        30
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
    {
    id: "Sunny_Shikh_Fadl",
    name: "Sunny_Shikh_Fadl",
    image: "/Sunny_Shikh_Fadl/main-image.jpg",
    imagesUrl: [
      "/Sunny_Shikh_Fadl/Sunny_Shikh_Fadl (1).jpg",
    ],
    headerText: "Sunny_Shikh_Fadl",
    description: [],
    specification: {
      type: "Split Face",
      material_name: "Galala Beige",
      Color: "Beige with gray and cream veins",
      country: "Egypt",
      dimension: "l20x7x2",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        1,
        2,
        3
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "Sunny_Menia",
    name: "Sunny_Menia",
    image: "/Sunny_Menia/main-image.jpg",
    imagesUrl: [
      "/Sunny_Menia/Sunny_Menia (1).jpg",
      "/Sunny_Menia/Sunny_Menia (2).jpg",
      "/Sunny_Menia/Sunny_Menia (3).jpg",
      "/Sunny_Menia/Sunny_Menia (4).jpg",
      "/Sunny_Menia/Sunny_Menia (5).jpg",
      "/Sunny_Menia/Sunny_Menia (6).jpg",
    ],
    headerText: "Sunny_Menia",
    description: [],
    specification: {
      type: "Split Face",
      material_name: "Galala Beige",
      Color: "Beige with gray and cream veins",
      country: "Egypt",
      dimension: "l20x7x2",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        1,
        2,
        3
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "Galala",
    name: "Galala",
    image: "/Galala/main-image.jpg",
    imagesUrl: [
      "/Galala/Galala (1).jpg",
      "/Galala/Galala (2).jpg"
    ],
    headerText: "Galala",
    description: [],
    specification: {
      type: "Split Face",
      material_name: "Galala Beige",
      Color: "Beige with gray and cream veins",
      country: "Egypt",
      dimension: "l20x7x2",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        1,
        2,
        3
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "Triesta",
    name: "Triesta",
    image: "/Triesta/main-image.jpg",
    imagesUrl: [
      "/Triesta/Triesta (1).jpg",
      "/Triesta/Triesta (2).jpg",
      "/Triesta/Triesta (3).jpg",
      "/Triesta/Triesta (4).jpg",
      "/Triesta/Triesta (5).jpg",
      "/Triesta/Triesta (6).jpg",
      "/Triesta/Triesta (7).jpg",
      "/Triesta/Triesta (8).jpg",
      "/Triesta/Triesta (9).jpg",
    ],
    headerText: "Triesta",
    description: [],
    specification: {
      type: "Split Face",
      material_name: "Galala Beige",
      Color: "Beige with gray and cream veins",
      country: "Egypt",
      dimension: "l20x7x2",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        1,
        2,
        3
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  },
  {
    id: "Gem",
    name: "Gem",
    image: "/Gem/main-image.jpg",
    imagesUrl: [
      "/Gem/Gem (1).jpg",
      "/Gem/Gem (2).jpg",
      "/Gem/Gem (3).jpg",
      "/Gem/Gem (4).jpg"
    ],
    headerText: "Gem",
    description: [],
    specification: {
      type: "Split Face",
      material_name: "Galala Beige",
      Color: "Beige with gray and cream veins",
      country: "Egypt",
      dimension: "l20x7x2",
      Quarry_location: "Egyptian desert",
      Availability: [
        "Blocks",
        "Slabs",
        "Tiles"
      ],
      Thickness: [
        1,
        2,
        3
      ],
      Applications: [
        "Flooring",
        "Bathrooms",
        "Staircases",
        "Fireplaces",
        "Exterior"
      ]
    }
  }



];

const result = convertArrayToJSON(data);
console.log(result);
