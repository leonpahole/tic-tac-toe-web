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

interface IProps {
  onSelect(player1Sign: TTTModels.Sign, mode: TTTModels.GameMode): void;
}

export const FirstPage = ({ onSelect }: IProps) => {
  const [player1Sign, setPlayer1Sign] = useState<TTTModels.Sign>(
    TTTModels.Sign.X
  );

  return (
    <section className="flex h-full min-h-screen items-center justify-center bg-navy-dark p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center">
          <Image
            src={Logo}
            alt=""
            height={32}
            width={72}
            className="mb-8 md:mb-10"
          />
        </div>

        <AppToggle
          label="Pick player 1's mark"
          helpText="Remember : X goes first"
          options={options}
          value={player1Sign}
          onChange={(sign) => setPlayer1Sign(sign as TTTModels.Sign)}
          name="player1-sign"
        />

        <div className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-5">
          <AppButton
            type="button"
            onClick={() => {
              onSelect(player1Sign, TTTModels.GameMode.VS_CPU);
            }}
          >
            New game (vs CPU)
          </AppButton>
          <AppButton
            type="button"
            color="blue"
            onClick={() => {
              onSelect(player1Sign, TTTModels.GameMode.PVP);
            }}
          >
            New game (vs player)
          </AppButton>
        </div>
      </div>
    </section>
  );
};
