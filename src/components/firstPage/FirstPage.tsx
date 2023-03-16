import { IconO } from "@/components/icons/iconO";
import { IconX } from "@/components/icons/IconX";
import { AppButton } from "@/components/shared/AppButton";
import { AppToggle, AppToggleOption } from "@/components/shared/AppToggle";
import Image from "next/image";
import Logo from "public/images/logo.svg";
import { useState } from "react";

enum Sign {
  X = "X",
  O = "O",
}

const options: AppToggleOption[] = [
  {
    icon: <IconX className="h-8 w-8 fill-current" />,
    value: Sign.X,
  },
  {
    icon: <IconO className="h-8 w-8 fill-current" />,
    value: Sign.O,
  },
];

export const FirstPage = () => {
  const [player1Sign, setPlayer1Sign] = useState<Sign>(Sign.X);

  return (
    <div className="section flex h-full min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="" height={32} width={72} className="mb-10" />
        </div>

        <AppToggle
          label="Pick player 1's mark"
          helpText="Remember : X goes first"
          options={options}
          value={player1Sign}
          onChange={(sign) => setPlayer1Sign(sign as Sign)}
          name="player1-sign"
        />

        <div className="mt-10 flex flex-col gap-5">
          <AppButton type="button">New game (vs CPU)</AppButton>
          <AppButton type="button" color="blue">
            New game (vs player)
          </AppButton>
        </div>
      </div>
    </div>
  );
};
