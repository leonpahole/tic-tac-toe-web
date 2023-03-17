import { IconO } from "@/components/icons/iconO";
import { IconRestart } from "@/components/icons/IconRestart";
import { AppButton } from "@/components/shared/AppButton";
import Image from "next/image";
import Logo from "public/images/logo.svg";

export const GameHeader = () => {
  return (
    <header className="mb-5 flex items-center justify-between gap-4">
      <div>
        <Image src={Logo} alt="" height={32} width={72} />
      </div>
      <div className="flex items-center gap-3 rounded-lg px-7 pt-4 pb-5 text-xs uppercase text-silver shadow-small shadow-navy-shadow">
        <div>
          <IconO className="h-5 w-5 fill-current" />
        </div>
        Turn
      </div>
      <AppButton
        type="button"
        size="secondary"
        color="silver"
        className="w-[unset]"
      >
        <IconRestart className="h-5 w-5 fill-navy-semi-dark" />
      </AppButton>
    </header>
  );
};
