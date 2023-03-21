type IProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "submit" | "button";
  color?: "yellow" | "blue" | "silver";
  size?: "primary" | "secondary";
};

const ColorClassMap: Record<NonNullable<IProps["color"]>, string> = {
  yellow: "bg-yellow-light hover:bg-yellow-light-h shadow-yellow-shadow",
  blue: "bg-blue-light hover:bg-blue-light-h shadow-blue-shadow",
  silver: "bg-silver hover:bg-silver-h shadow-silver-shadow",
};

const SizeClassMap: Record<NonNullable<IProps["size"]>, string> = {
  primary:
    "px-4 pt-3 md:pt-4 md:pb-6 pb-5 text-xs md:text-s rounded-2xl shadow-big",
  secondary:
    "px-3 md:px-4 pt-3 pb-3 md:pb-4 text-body md:text-xs rounded-lg shadow-small",
};

export const AppButton = ({
  color = "yellow",
  size = "primary",
  ...props
}: IProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      className={`w-full uppercase text-navy-dark ${ColorClassMap[color]} ${SizeClassMap[size]} ${props.className}`}
    />
  );
};
