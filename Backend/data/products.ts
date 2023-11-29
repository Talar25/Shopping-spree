import { ClothType, Gender, Product, Color, Size } from '../src/types';

const products: Product[] = [
  {
    id: '663bd970-8e45-11ee-bf97-09e8660f1385',
    name: 'basic slim fit t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description:
      'Stretch cotton T-shirt featuring a round neck and short sleeves.',
    price: '10',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '8fa7f1e0-8e45-11ee-8589-9b6c13386848',
    name: 'basic slim fit t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description:
      'Stretch cotton T-shirt featuring a round neck and short sleeves.',
    price: '10',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '06e1cba0-8e46-11ee-bbb8-27ea7d7c949f',
    name: 'oversize t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description:
      'Round neck and sleeves falling below the elbow. Matching logo detail on the back.',
    price: '14',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '1b10e110-8e46-11ee-92d5-fffec3698084',
    name: 'oversize t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description:
      'Round neck and sleeves falling below the elbow. Matching logo detail on the back.',
    price: '14',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '6c1403d0-8e46-11ee-b867-d1cde1b373e0',
    name: 'tank top',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description: 'Sleeveless top with a wide round neckline.',
    price: '12',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'c053b3f0-8e46-11ee-b8cb-fb994b1c5fed',
    name: 'stripped textured t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description:
      'Round neck T-shirt with long sleeves and side vents at the hem.',
    price: '16',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'c4079430-8e46-11ee-b8cb-fb994b1c5fed',
    name: 'tshirt with contrast print',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description:
      'Loose-fitting round neck T-shirt with short sleeves. Contrast print on the front.',
    price: '18',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'feae8850-8e46-11ee-9508-a1d4df9da7f9',
    name: 'slim fit long sleeve t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description:
      'T-shirt made of stretch cotton fabric. Round neck and long sleeves.',
    price: '15',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '4c43d1a0-9c8f-11ec-8d3d-0242ac130003',
    name: 'v-neck t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description: 'Classic v-neck T-shirt with short sleeves.',
    price: '13',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'a0493ac0-8e47-11ee-88cb-dd894d48d596',
    name: 'graphic print t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description:
      'Comfortable T-shirt with a stylish graphic print on the front.',
    price: '20',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'adb9ef10-8e47-11ee-a584-15801cdcf4df',
    name: 'sporty performance tee',
    type: ClothType.Tshirt,
    gender: Gender.Male,
    description: 'Moisture-wicking sporty T-shirt for optimal performance.',
    price: '25',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'b7b3cc20-8e47-11ee-acaf-5b9870e81133',
    name: 'fitted scoop neck tee',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description: 'Fitted scoop neck T-shirt with a flattering silhouette.',
    price: '18',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'b2e70a70-9c8f-11ec-8d3d-0242ac130003',
    name: 'floral print blouse',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description: 'Chic blouse with a stylish floral print.',
    price: '22',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'cf40c220-9c8f-11ec-8d3d-0242ac130003',
    name: 'off-shoulder top',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description: 'Trendy off-shoulder top with short sleeves.',
    price: '28',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'e5e70380-9c8f-11ec-8d3d-0242ac130003',
    name: 'lace detail t-shirt',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description: 'Elegant T-shirt with delicate lace detailing.',
    price: '30',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'fff0b5e0-9c8f-11ec-8d3d-0242ac130003',
    name: 'ruffle sleeve blouse',
    type: ClothType.Tshirt,
    gender: Gender.Female,
    description: 'Blouse with stylish ruffle sleeves for a feminine touch.',
    price: '26',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '2a8c3940-a1b2-11ec-b4e9-0242ac130004',
    name: 'classic crewneck sweatshirt',
    type: ClothType.Sweatshirt,
    gender: Gender.Male,
    description: 'Comfortable crewneck sweatshirt with ribbed cuffs and hem.',
    price: '35',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '43e37c00-a1b2-11ec-b4e9-0242ac130004',
    name: 'hooded pullover sweatshirt',
    type: ClothType.Sweatshirt,
    gender: Gender.Male,
    description: 'Hooded pullover sweatshirt with front pouch pocket.',
    price: '40',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '5ef90c60-a1b2-11ec-b4e9-0242ac130004',
    name: 'quarter-zip sweatshirt',
    type: ClothType.Sweatshirt,
    gender: Gender.Male,
    description: 'Quarter-zip sweatshirt with a stand-up collar.',
    price: '38',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '75dd9500-a1b2-11ec-b4e9-0242ac130004',
    name: 'sporty fleece hoodie',
    type: ClothType.Sweatshirt,
    gender: Gender.Male,
    description: 'Fleece hoodie with a sporty design for casual comfort.',
    price: '45',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '8a8d8dc0-a1b2-11ec-b4e9-0242ac130004',
    name: 'zip-up hoodie',
    type: ClothType.Sweatshirt,
    gender: Gender.Male,
    description: 'Zip-up hoodie with a cozy fleece lining.',
    price: '42',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'a0d60f80-a1b2-11ec-b4e9-0242ac130004',
    name: 'thermal-lined sweatshirt',
    type: ClothType.Sweatshirt,
    gender: Gender.Male,
    description: 'Sweatshirt with a thermal-lined interior for extra warmth.',
    price: '48',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'b1fb2c40-a1b2-11ec-b4e9-0242ac130004',
    name: 'cozy oversized sweatshirt',
    type: ClothType.Sweatshirt,
    gender: Gender.Female,
    description: 'Oversized sweatshirt for a cozy and relaxed fit.',
    price: '38',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'c6623d00-a1b2-11ec-b4e9-0242sc130004',
    name: 'hooded fleece pullover',
    type: ClothType.Sweatshirt,
    gender: Gender.Female,
    description: 'Hooded fleece pullover with a stylish and casual design.',
    price: '42',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'da1d3e00-a1b2-11ec-b4e9-0242aw130004',
    name: 'quarter-zip athleisure sweatshirt',
    type: ClothType.Sweatshirt,
    gender: Gender.Female,
    description:
      'Athleisure-inspired quarter-zip sweatshirt for comfort and style.',
    price: '45',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'ebddff40-a1b2-11ec-b4e9-0242dc130004',
    name: 'off-the-shoulder fleece top',
    type: ClothType.Sweatshirt,
    gender: Gender.Female,
    description: 'Fashionable off-the-shoulder fleece top for a trendy look.',
    price: '40',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'ff925140-a1b2-11ec-b4e9-0242cc130004',
    name: 'zip-front hoodie',
    type: ClothType.Sweatshirt,
    gender: Gender.Female,
    description: 'Zip-front hoodie with a modern and chic design.',
    price: '48',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: '0e969240-a1b3-11ec-b4e9-0242bc130004',
    name: 'cowl neck pullover',
    type: ClothType.Sweatshirt,
    gender: Gender.Female,
    description: 'Cowl neck pullover for a stylish and comfortable fit.',
    price: '36',
    size: [Size.XS, Size.S, Size.M, Size.L, Size.XXL],
    color: [
      Color.BLACK,
      Color.WHITE,
      Color.GREEN,
      Color.RED,
      Color.BLUE,
      Color.YELLOW,
    ],
  },
  {
    id: 'd1a0e340-a1b3-11ec-b4e9-0242ac130004',
    name: 'hooded windbreaker jacket',
    type: ClothType.Jacket,
    gender: Gender.Male,
    description: 'Windbreaker jacket with a hood for extra protection.',
    price: '45',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.BLACK, Color.BLUE],
  },
  {
    id: 'e4295700-a1b3-11ec-b4e9-0242ac130004',
    name: 'quilted bomber jacket',
    type: ClothType.Jacket,
    gender: Gender.Male,
    description: 'Quilted bomber jacket for a stylish and warm look.',
    price: '55',
    size: [Size.S, Size.M, Size.L],
    color: [Color.GREEN, Color.BLACK],
  },
  {
    id: 'f04c5840-a1b3-11ec-b4e9-0242ac130004',
    name: 'waterproof shell jacket',
    type: ClothType.Jacket,
    gender: Gender.Male,
    description: 'Waterproof shell jacket for protection against the elements.',
    price: '60',
    size: [Size.L, Size.XL, Size.XXL],
    color: [Color.RED, Color.BLACK],
  },
  {
    id: 'fffb58c0-a1b3-11ec-b4e9-0242ac130004',
    name: 'denim trucker jacket',
    type: ClothType.Jacket,
    gender: Gender.Male,
    description: 'Classic denim trucker jacket for a timeless look.',
    price: '50',
    size: [Size.M, Size.L, Size.XXL],
    color: [Color.BLUE, Color.WHITE],
  },
  {
    id: '13fc9e20-a1b4-11ec-b4e9-0242ac130004',
    name: 'puffer jacket with hood',
    type: ClothType.Jacket,
    gender: Gender.Male,
    description: 'Puffer jacket with a hood for warmth and style.',
    price: '65',
    size: [Size.S, Size.M, Size.L],
    color: [Color.YELLOW, Color.BLACK],
  },
  {
    id: '2cfd3070-a1b4-11ec-b4e9-0242ac130004',
    name: 'belted trench coat',
    type: ClothType.Jacket,
    gender: Gender.Female,
    description: 'Stylish belted trench coat for a classic look.',
    price: '75',
    size: [Size.S, Size.M, Size.L],
    color: [Color.BLACK, Color.WHITE],
  },
  {
    id: '3f9f7780-a1b4-11ec-b4e9-0242ac130004',
    name: 'faux fur bomber jacket',
    type: ClothType.Jacket,
    gender: Gender.Female,
    description: 'Fashionable faux fur bomber jacket for warmth and style.',
    price: '80',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.WHITE, Color.GREEN, Color.YELLOW],
  },
  {
    id: '513b0e60-a1b4-11ec-b4e9-0242ac130004',
    name: 'water-resistant parka',
    type: ClothType.Jacket,
    gender: Gender.Female,
    description: 'Water-resistant parka with a detachable hood.',
    price: '70',
    size: [Size.S, Size.M, Size.L],
    color: [Color.GREEN, Color.RED],
  },
  {
    id: '63f24240-a1b4-11ec-b4e9-0242ac130004',
    name: 'crop denim jacket',
    type: ClothType.Jacket,
    gender: Gender.Female,
    description: 'Trendy crop denim jacket for a casual and chic look.',
    price: '65',
    size: [Size.S, Size.L, Size.XXL],
    color: [Color.BLUE, Color.GREY],
  },
  {
    id: '758855c0-a1b4-11ec-b4e9-0242ac130004',
    name: 'quilted puffer jacket',
    type: ClothType.Jacket,
    gender: Gender.Female,
    description: 'Quilted puffer jacket for a warm and cozy feel.',
    price: '85',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.BLACK, Color.RED],
  },
  {
    id: '8a7c9130-a1b5-11ec-b4e9-0242ac130004',
    name: 'high-waisted wide-leg trousers',
    type: ClothType.Trousers,
    gender: Gender.Female,
    description:
      'High-waisted wide-leg trousers for a trendy and flattering look.',
    price: '50',
    size: [Size.S, Size.M, Size.L],
    color: [Color.BLACK, Color.BROWN],
  },
  {
    id: '9d39a0e0-a1b5-11ec-b4e9-0242ac130004',
    name: 'skinny fit ankle grazer pants',
    type: ClothType.Trousers,
    gender: Gender.Female,
    description: 'Skinny fit ankle grazer pants for a modern and sleek style.',
    price: '45',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.GREY, Color.BROWN],
  },
  {
    id: 'ae0682a0-a1b5-11ec-b4e9-0242ac130004',
    name: 'pleated culottes',
    type: ClothType.Trousers,
    gender: Gender.Female,
    description: 'Pleated culottes for a chic and comfortable ensemble.',
    price: '55',
    size: [Size.S, Size.M, Size.L],
    color: [Color.GREEN, Color.WHITE],
  },
  {
    id: 'bfdbb470-a1b5-11ec-b4e9-0242ac130004',
    name: 'flared high-rise trousers',
    type: ClothType.Trousers,
    gender: Gender.Female,
    description: 'Flared high-rise trousers for a vintage-inspired look.',
    price: '48',
    size: [Size.M, Size.L, Size.XXL],
    color: [Color.BLUE, Color.RED],
  },
  {
    id: 'd46bf140-a1b5-11ec-b4e9-0242ac130004',
    name: 'straight leg tailored pants',
    type: ClothType.Trousers,
    gender: Gender.Female,
    description:
      'Straight leg tailored pants for a polished and professional appearance.',
    price: '52',
    size: [Size.S, Size.L, Size.XL],
    color: [Color.BLACK, Color.YELLOW],
  },
  {
    id: 'e84d0f60-a1b5-11ec-b4e9-0242ac130004',
    name: 'cargo jogger pants',
    type: ClothType.Trousers,
    gender: Gender.Female,
    description: 'Cargo jogger pants for a sporty and casual look.',
    price: '42',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.GREY, Color.BLACK],
  },
  {
    id: 'fe70b3a0-a1b5-11ec-b4e9-0242ac130004',
    name: 'classic straight-fit trousers',
    type: ClothType.Trousers,
    gender: Gender.Male,
    description:
      'Classic straight-fit trousers for a timeless and polished look.',
    price: '60',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.BLACK, Color.BROWN],
  },
  {
    id: '103a0580-a1b6-11ec-b4e9-0242ac130004',
    name: 'slim-fit chino pants',
    type: ClothType.Trousers,
    gender: Gender.Male,
    description: 'Slim-fit chino pants for a modern and tailored appearance.',
    price: '55',
    size: [Size.S, Size.L, Size.XXL],
    color: [Color.GREY, Color.BLUE],
  },
  {
    id: '21f39b20-a1b6-11ec-b4e9-0242ac130004',
    name: 'cargo trousers with pockets',
    type: ClothType.Trousers,
    gender: Gender.Male,
    description:
      'Cargo trousers with multiple pockets for a functional and casual style.',
    price: '50',
    size: [Size.M, Size.L, Size.XL],
    color: [Color.GREEN, Color.BLACK],
  },
  {
    id: '341ebf90-a1b6-11ec-b4e9-0242ac130004',
    name: 'athletic jogger pants',
    type: ClothType.Trousers,
    gender: Gender.Male,
    description: 'Athletic jogger pants for a comfortable and sporty look.',
    price: '45',
    size: [Size.M, Size.L, Size.XXL],
    color: [Color.BLUE, Color.GREY],
  },
  {
    id: '45ba1a60-a1b6-11ec-b4e9-0242ac130004',
    name: 'pleated dress trousers',
    type: ClothType.Trousers,
    gender: Gender.Male,
    description: 'Pleated dress trousers for a sophisticated and formal style.',
    price: '65',
    size: [Size.S, Size.M, Size.L],
    color: [Color.BLACK, Color.WHITE],
  },
  {
    id: '5680dca0-a1b6-11ec-b4e9-0242ac130004',
    name: 'corduroy straight-leg pants',
    type: ClothType.Trousers,
    gender: Gender.Male,
    description: 'Corduroy straight-leg pants for a textured and casual look.',
    price: '58',
    size: [Size.S, Size.L, Size.XL],
    color: [Color.BROWN, Color.RED],
  },
];

export default products;
