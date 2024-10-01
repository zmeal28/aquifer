import type { NextPage } from "next";
import { Select, FormControl } from "@mui/material";

interface ProductLayoutProps {
  className?: string;
}

const ProductLayout: NextPage<ProductLayoutProps> = ({ className = "" }) => (
  <section className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-center text-17xl text-gray-200 font-poppins ${className}`}>
    <div className="flex-1 w-full bg-aliceblue overflow-hidden flex flex-col items-start justify-start py-[100px] px-[185px] box-border relative gap-[81px] max-w-full 
        mq450:gap-5 mq450:px-5 mq850:gap-10 mq850:py-[42px] mq850:px-[92px] mq1225:py-[65px]">
      <BackgroundImage />
      <ProductHeader />
      <ProductCards />
    </div>
  </section>
);

const BackgroundImage = () => (
  <img
    className="w-[2041.1px] h-[700.4px] absolute !m-[0] right-[-405.1px] bottom-[88.6px] mq1225:w-full mq1225:h-[300px] mq450:h-[200px]"
    alt=""
    src="/sectionbackground.svg"
  />
);

const DecorWave = () => (
  <img
    className="w-[100px] h-[35px] pt-3 object-contain"
    alt=""
    src="/decorwave@2x.png"
  />
);

const ProductHeader = () => (
  <div className="w-full max-w-[full] flex justify-center">
    <div className="w-[800px] flex flex-wrap justify-between content-start gap-5">
      <DecorWave />
      <div className="w-[370px] max-w-full">
        <div className="w-[350px] h-[87px] px-20 relative mq450:px-5">
          <h1 className="m-0 h-[70px] text-inherit tracking-[-0.4px] leading-[52px] font-black z-[1] mq450:text-3xl mq450:leading-[31px] mq850:text-10xl mq850:leading-[42px]">
            Products
          </h1>
          <img
            className="h-6 w-[150px] absolute top-[40px] right-[40px] mq450:right-0"
            alt=""
            src="/titelunderline.svg"
          />
        </div>
        <p className="mt-2 text-lg leading-[28px] font-gilroy-regular text-gray-400 z-[2] mq450:text-base">
          High-quality products which are designed to protect you all the time
        </p>
      </div>
      <DecorWave />
    </div>
  </div>
);

const ProductCards = () => (
  <div className="self-stretch flex flex-col gap-[30px] max-w-full text-lg text-yellow">
    <div className="flex flex-wrap justify-center gap-[60px] mq1225:gap-[30px] mq450:flex-col">
      <ProductCard
        imageSrc="/imagecard1@2x.png"
        brand="Regal"
        name="UV + UF"
        description="High-quality water purifier"
        price="₹ 12,500"
      />
      <ProductCard
        imageSrc="/imagecard2-1@2x.png"
        brand="Livpure"
        name="Bolt Copper UV+UF"
        description="Advanced water purification system"
        price="₹ 17,000"
        mixBlendMode="darken"
      />
    </div>
    <div className="flex flex-wrap justify-center gap-[60px] mq1225:gap-[30px] mq450:flex-col">
      <ProductCard
        imageSrc="/imagecard3-1@2x.png"
        brand="UTC"
        name="RO+UV+MTDS"
        description="Comprehensive water treatment"
        price="₹ 26,500"
      />
      <ProductCard
        imageSrc="/imagecard4@2x.png"
        brand="Aquaguard"
        name="Enhance NXT UV+hot"
        description="Hot and cold water purifier"
        price="₹ 17,600"
        mixBlendMode="linear-burn"
      />
    </div>
    <div className="w-full max-w-[full] flex justify-center px-5 pt-10">
      <button className="bg-cornflowerblue text-white px-6 py-3 rounded-full mq450:w-full">
        See More
      </button>
    </div>
  </div>
);

interface ProductCardProps {
  imageSrc: string;
  brand: string;
  name: string;
  description: string;
  price: string;
  mixBlendMode?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, brand, name, description, price, mixBlendMode = "unset" }) => (
  <div className="flex-1 flex min-w-[370px] max-w-full font-fontawesome mq850:min-w-full">
    <div className="flex-1 rounded-tl-3xs bg-darkseagreen pt-3 px-[25px] pb-[13px] min-w-[211px] z-[1]">
      <img
        className="h-[275px] w-[275px] object-cover z-[1] mq450:w-full"
        style={{  }}
        alt={`${brand} ${name}`}
        src={imageSrc}
      />
    </div>
    <div className="w-[245px] rounded-tr-3xs rounded-br-3xs bg-colors-white flex flex-col py-[25px] px-4 gap-[20px] min-w-[245px] z-[1] mq850:flex-1 mq450:w-full">
      <div className="flex gap-[9px]">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400">★</span>
        ))}
      </div>
      <div className="text-sm leading-[22px] font-black font-poppins text-colors-text text-left z-[1]">
        {brand}
      </div>
      <div className="flex flex-col text-left text-3xl text-colors-heading font-poppins">
        <div className="h-16 leading-[32px] font-black z-[1] mq450:text-lg mq450:leading-[26px]">
          {name}
        </div>
        <div className="text-sm text-gray-600 mt-2 mq450:text-xs">{description}</div>
        <div className="text-2xl tracking-[2px] leading-[26px] font-black text-right whitespace-nowrap z-[1] mt-4 mq450:text-xl mq450:leading-[21px]">
          {price}
        </div>
      </div>
      <div className="flex gap-[15px] text-base text-colors-white">
        <FormControl
          className="flex-1 font-poppins font-black text-base text-colors-heading z-[1]"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'darkgray',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'blue',
              },
            },
          }}
        >
          <Select
            native
            defaultValue=""
            inputProps={{
              name: 'quantity',
              id: 'quantity-select',
            }}
          >
            <option value="" disabled>Quantity</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
        </FormControl>
        <button className="h-10 w-10 rounded-full bg-cornflowerblue flex items-center justify-center z-[1]">
          <span className="text-white">🛒</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProductLayout;
