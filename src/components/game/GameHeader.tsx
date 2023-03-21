import { IconO } from "@/components/icons/iconO";
import { IconRestart } from "@/components/icons/IconRestart";
import { AppButton } from "@/components/shared/AppButton";
import Image from "next/image";
import Logo from "public/images/logo.svg";

export const GameHeader = () => {
  return (
    <header className="mb-16 flex items-center justify-between gap-4 md:mb-5">
      <div>
        <Image src={Logo} alt="" height={32} width={72} />
      </div>
      <div className="flex items-center gap-2 rounded-lg px-4 pt-2 pb-4 text-body uppercase text-silver shadow-small shadow-navy-shadow md:gap-3 md:px-7 md:pt-4 md:pb-5 md:text-xs">
        <div>
          <IconO className="h-5 w-4 fill-current md:h-5 md:w-5" />
        </div>
        Turn
      </div>
      <AppButton
        type="button"
        size="secondary"
        color="silver"
        className="!w-[unset]"
      >
        <IconRestart className="h-4 w-4 fill-navy-semi-dark md:h-5 md:w-5" />
      </AppButton>
    </header>
  );
};
