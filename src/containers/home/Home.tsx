import { ProductCard, SectionHeader } from "@/shared";
import { HomeHeroSection } from "./components";
import { AppIcons } from "@/elements";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/mock";

const Home = () => {
  // TASK: move to constants folder
  const categories = [
    { name: "Phones", icon: AppIcons.ic_phones },
    { name: "Computers", icon: AppIcons.ic_computer },
    { name: "SmartWatch", icon: AppIcons.ic_smartwatch },
    { name: "Camera", icon: AppIcons.ic_lg_camera },
    { name: "HeadPhones", icon: AppIcons.ic_headphone },
    { name: "Gaming", icon: AppIcons.ic_gamepad },
  ];
  // TASK: move to constants folder
  const services = [
    {
      icon: "/images/fast-delivery.svg",
      title: "FREE AND FAST DELIVERY",
      subtitle: "Free delivery for all orders over $140",
    },
    {
      icon: "/images/customer-service.svg",
      title: "24/7 CUSTOMER SERVICE",
      subtitle: "Free delivery for all orders over $140",
    },
    {
      icon: "/images/money-back.svg",
      title: "MONEY BACK GUARANTEE",
      subtitle: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="flex flex-col space-y-24">
      <HomeHeroSection />
      <div className="flex flex-col space-y-8">
        <SectionHeader title="Categories" description="Browse By Category" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map(({ name, icon }, idx) => (
            <Link
              href={"/"}
              className="px-4 py-6 flex flex-col items-center justify-center space-y-4 rounded border border-black-30 hover:bg-primary-500 transition-all duration-300 group hover:border-primary-500"
              key={idx}
            >
              <span>{icon}</span>

              <span className="text-base text-center group-hover:text-white">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <hr className="border-black-30" />
        <div className="mt-12">
          <Image
            src={"/images/categories.svg"}
            alt=""
            width={1000}
            height={500}
            layout="responsive"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-8" id="products">
        <SectionHeader
          title="Our Products"
          description="Explore Our Products"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p, idx) => (
            <ProductCard product={p} key={idx} />
          ))}
        </div>
      </div>

      <div className="max-w-[943px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
        {services.map(({ icon, title, subtitle }, idx) => (
          <div
            className="flex flex-col items-center justify-center space-y-2"
            key={idx}
          >
            <div className="pb-4">
              <Image src={icon} alt="Icon" width={80} height={80} />
            </div>
            <h4 className="text-xl font-semibold text-center">{title}</h4>
            <p className="text-sm text-center">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
