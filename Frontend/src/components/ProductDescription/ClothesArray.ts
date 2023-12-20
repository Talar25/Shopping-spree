//import types
import { ClothesArr } from '../../types';
//import images
import Jackets1 from '../../assets/Landscape_clothes.webp';
import Jackets1_PLACEHOLDER from '../../assets/Landscape_clothes_PLACEHOLDER.webp';
import Jackets2 from '../../assets/Landscape_clothes2.webp';
import Jackets2_PLACEHOLDER from '../../assets/Landscape_clothes2_PLACEHOLDER.webp';
import Sweatshirt1 from '../../assets/Landscape_sweatshirt1.webp';
import Sweatshirt1_PLACEHOLDER from '../../assets/Landscape_sweatshirt1_PLACEHOLDER.webp';
import Sweatshirt2 from '../../assets/Landscape_sweatshirt2.webp';
import Sweatshirt2_PLACEHOLDER from '../../assets/Landscape_sweatshirt2_PLACEHOLDER.webp';
import Trousers1 from '../../assets/Landscape_trousers.webp';
import Trousers1_PLACEHOLDER from '../../assets/Landscape_trousers_PLACEHOLDER.webp';
import Trousers2 from '../../assets/Landscape_trousers2.webp';
import Trousers2_PLACEHOLDER from '../../assets/Landscape_trousers2_PLACEHOLDER.webp';
import Tshirts1 from '../../assets/Landscape_tshirts.webp';
import Tshirts1_PLACEHOLDER from '../../assets/Landscape_tshirts_PLACEHOLDER.webp';
import Tshirts2 from '../../assets/Landscape_tshirts2.webp';
import Tshirts2_PLACEHOLDER from '../../assets/Landscape_tshirts2_PLACEHOLDER.webp';

const clothes: ClothesArr[] = [
  {
    name: 'jacket',
    img1: Jackets1,
    img1Placeholder: Jackets1_PLACEHOLDER,
    img2: Jackets2,
    img2Placeholder: Jackets2_PLACEHOLDER,
    text: {
      text1: {
        heading: 'Exceptional Quality',
        paragraph:
          'Elevate your style with jackets crafted from premium materials, ensuring long-lasting comfort and durability. Our commitment to quality guarantees a standout addition to your wardrobe.',
      },
      text2: {
        heading: 'On-Trend Designs',
        paragraph:
          "Stay fashion-forward with our jackets that seamlessly blend timelessappeal with the latest trends. Versatile and stylish, they're perfectfor any occasion, adding a touch of sophistication to your look.",
      },
      text3: {
        heading: 'Smart Functionality',
        paragraph:
          'Our jackets go beyond style, offering practical features for yourdaily needs. From ample pockets to adjustable details, experience the perfect fusion of fashion and functionality in every piece.',
      },
      text4: {
        heading: 'Sustainable Fashion',
        paragraph:
          'Make a conscious choice with our eco-friendly jackets. We prioritizesustainability in our production processes, ensuring you not only lookgood but also contribute to a greener future. Choose fashion with a purpose.',
      },
    },
  },
  {
    name: 'sweatshirt',
    img1: Sweatshirt1,
    img1Placeholder: Sweatshirt1_PLACEHOLDER,
    img2: Sweatshirt2,
    img2Placeholder: Sweatshirt2_PLACEHOLDER,
    text: {
      text1: {
        heading: 'Cozy Comfort',
        paragraph:
          'Wrap yourself in warmth and comfort with our sweatshirts. Crafted fromthe softest fabrics, our designs provide a cozy embrace, making themyour go-to choice for chilly days and relaxed evenings.',
      },
      text2: {
        heading: 'Effortless Style Upgrade',
        paragraph:
          'Elevate your casual look effortlessly with our stylish sweatshirts.From minimalist designs to bold statements, our collection offersversatile options that effortlessly blend comfort with fashion-forward flair.',
      },
      text3: {
        heading: 'Relaxed Versatility',
        paragraph:
          "Embrace the perfect balance of comfort and style with our versatilesweatshirts. Whether you're lounging at home or heading out for a casual outing, our designs adapt seamlessly to your relaxed lifestyle.",
      },
      text4: {
        heading: 'Durability Meets Trend',
        paragraph:
          'Invest in sweatshirts that stand up to both style and wear. Ourcommitment to durability ensures that you not only stay on-trend butal so enjoy long-lasting quality, making each piece a valuable additionto your wardrobe.',
      },
    },
  },
  {
    name: 'trousers',
    img1: Trousers1,
    img1Placeholder: Trousers1_PLACEHOLDER,
    img2: Trousers2,
    img2Placeholder: Trousers2_PLACEHOLDER,
    text: {
      text1: {
        heading: 'Tailored Comfort',
        paragraph:
          'Our trousers are crafted with precision and comfort in mind. Enjoy the perfect fit and freedom of movement with our tailored designs, ensuring you stay comfortable and stylish all day long.',
      },
      text2: {
        heading: 'Timeless Elegance',
        paragraph:
          'Elevate your wardrobe with trousers that exude timeless elegance. Fromclassic cuts to modern styles, our collection offers a versatile range, ensuring you make a sophisticated statement wherever you go.',
      },
      text3: {
        heading: 'Functional Fashion',
        paragraph:
          'Experience the perfect blend of fashion and functionality. Our trousers are designed with practical features, including ample pockets and smart detailing, making them a practical and stylish choice for any occasion.',
      },
      text4: {
        heading: 'Quality Craftsmanship',
        paragraph:
          'Invest in trousers that stand the test of time. Our commitment toquality craftsmanship ensures durable and long-lasting pieces, allowing you to build a wardrobe that combines style with enduring quality.',
      },
    },
  },
  {
    name: 'tshirt',
    img1: Tshirts1,
    img1Placeholder: Tshirts1_PLACEHOLDER,
    img2: Tshirts2,
    img2Placeholder: Tshirts2_PLACEHOLDER,
    text: {
      text1: {
        heading: 'Supreme Comfort',
        paragraph:
          'Experience unparalleled comfort with our T-shirts, crafted from the softest and most breathable fabrics. Our commitment to quality ensures a second-skin feel that keeps you comfortable throughout the day.',
      },
      text2: {
        heading: 'Effortless Style',
        paragraph:
          'Elevate your casual wardrobe with our effortlessly stylish T-shirts. Designed to be versatile, our collection effortlessly combines comfort with on-trend looks, making it easy to stay fashion-forward in any setting.',
      },
      text3: {
        heading: 'Everyday Versatility',
        paragraph:
          "Our T-shirts are more than just basics – they're versatile essentials. Whether you're dressing up or down, our designs effortlessly adapt to your style, providing the perfect foundation for a variety of looks.",
      },
      text4: {
        heading: 'Sustainable Chic',
        paragraph:
          'Make a statement for the planet with our eco-conscious T-shirts. Each piece is crafted with sustainability in mind, ensuring you not only look good but also contribute to a more environmentally friendly fashion industry. Choose fashion that cares.',
      },
    },
  },
];

export default clothes;
