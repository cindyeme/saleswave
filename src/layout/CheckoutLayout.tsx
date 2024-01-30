import { BackButton } from "@/components";
import { AppIcons } from "@/elements";
import { ReactNode } from "react";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <header className="border-b border-stroke">
        <nav className="shadow-xl pb-3 pt-8 border-b border-stroke">
          <div className="container mx-auto flex justify-between items-center">
            <div>{AppIcons.ic_pixi_commerce}</div>
            <div className="divide-x divide-slate-200 flex items-center gap-4">
              <p className="text-grey-900 text-[0.6875rem] font-medium pr-4">
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
      <section className="container mx-auto py-8">{children}</section>
    </main>
  );
};

export default CheckoutLayout;
