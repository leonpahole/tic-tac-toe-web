type IProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "submit" | "button";
  color?: "yellow" | "blue" | "silver";
  size?: "primary" | "secondary";
};

const ColorClassMap: Record<NonNullable<IProps["color"]>, string> = {
  yellow: "bg-yellow-light hover:bg-yellow-light-h shadow-yellow-dark",
  blue: "bg-blue-light hover:bg-blue-light-h shadow-blue-dark",
  silver: "bg-silver hover:bg-silver-h shadow-silver-dark",
};

const SizeClassMap: Record<NonNullable<IProps["size"]>, string> = {
  primary: "px-4 pt-4 pb-6 text-s rounded-2xl shadow-btn-primary",
  secondary: "px-4 pt-3 pb-4 text-xs rounded-lg shadow-btn-secondary",
};

export const AppButton = ({
  color = "yellow",
  size = "primary",
  ...props
}: IProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`w-full uppercase text-navy-dark ${ColorClassMap[color]} ${SizeClassMap[size]}`}
      {...props}
    />
  );
};
