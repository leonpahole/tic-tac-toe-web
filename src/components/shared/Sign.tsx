import { IconO } from "@/components/icons/iconO";
import { IconX } from "@/components/icons/IconX";
import { TTTModels } from "@/util/ttt/ttt.models";

interface IProps {
  sign: TTTModels.Sign | null | undefined;
  className?: string;
}

export const Sign = ({ sign, className }: IProps) => {
  if (sign === TTTModels.Sign.O) {
    return <IconO className={`${className} ${TTTModels.getSignFill(sign)}`} />;
  }

  if (sign === TTTModels.Sign.X) {
    return <IconX className={`${className} ${TTTModels.getSignFill(sign)}`} />;
  }

  return null;
};
