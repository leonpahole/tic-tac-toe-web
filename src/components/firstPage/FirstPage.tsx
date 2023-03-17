import { IconO } from "@/components/icons/iconO";
import { IconX } from "@/components/icons/IconX";
import { AppButton } from "@/components/shared/AppButton";
import { AppToggle, AppToggleOption } from "@/components/shared/AppToggle";
import { TTTModels } from "@/util/ttt/ttt.models";
import Image from "next/image";
import Logo from "public/images/logo.svg";
import { useState } from "react";

const options: AppToggleOption[] = [
  {
    icon: <IconX className="h-8 w-8 fill-current" />,
    value: TTTModels.Sign.X,
  },
  {
    icon: <IconO className="h-8 w-8 fill-current" />,
    value: TTTModels.Sign.O,
  },
];

export const FirstPage = () => {
  const [player1Sign, setPlayer1Sign] = useState<TTTModels.Sign>(
    TTTModels.Sign.X
  );

  return (
    <section className="flex h-full min-h-screen items-center justify-center bg-navy-dark">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="" height={32} width={72} className="mb-10" />
        </div>

        <AppToggle
          label="Pick player 1's mark"
          helpText="Remember : X goes first"
          options={options}
          value={player1Sign}
          onChange={(sign) => setPlayer1Sign(sign as TTTModels.Sign)}
          name="player1-sign"
        />

        <div className="mt-10 flex flex-col gap-5">
          <AppButton type="button">New game (vs CPU)</AppButton>
          <AppButton type="button" color="blue">
            New game (vs player)
          </AppButton>
        </div>
      </div>
    </section>
  );
};
