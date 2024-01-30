import { BackButton } from "@/components";
import { AppIcons } from "@/elements";
import Link from "next/link";
import { ReactNode } from "react";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  const footer = [
    { title: "Terms of Use", link: "/" },
    { title: "Privacy Policy", link: "/" },
    { title: "Terms of Return", link: "/" },
  ];
  return (
    <main className="pb-">
      <header className="border-b border-stroke">
        <nav className="shadow-xl pb-3 pt-8 border-b border-stroke">
          <div className="container mx-auto flex sm:flex-row flex-col space-y-4 justify-center sm:space-y-0 sm:justify-between items-center">
            <Link href={"/"}>{AppIcons.ic_pixi_commerce}</Link>
            <div className="divide-x divide-slate-200 flex items-center gap-4">
              <p className="text-grey-900 text-[0.6875rem] font-medium sm:pr-4">
                Secure Checkout
              </p>
              <div className="pl-4 inline-flex items-center gap-2">
                {AppIcons.ic_phone}
                <p className="text-xsm text-grey-500 font-medium">
                  For assistance, call{" "}
                  <span className="text-grey-900">800-1160210</span>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="bg-white">
          <div className="py-3 container mx-auto">
            <BackButton label="Back to Cart" />
          </div>
        </div>
      </header>
      <section className="container mx-auto pt-8 pb-16">{children}</section>
      <div className="bg-white py-5">
        <div className="flex items-center container mx-auto justify-between">
          <div className="items-center flex">
            {footer.map(({ title, link }, idx) => (
              <Link
                href={`${link}`}
                key={title}
                className="text-grey-500 text-xsm"
              >
                {title}{" "}
                {idx !== footer.length - 1 && <span className="px-3">-</span>}
              </Link>
            ))}
          </div>
          <p className="text-right text-11 text-grey-500">
            © {new Date().getFullYear()} Pixicommerce. All rights reserved
          </p>
        </div>
      </div>
    </main>
  );
};

export default CheckoutLayout;
