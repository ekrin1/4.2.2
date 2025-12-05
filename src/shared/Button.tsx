import { Button as MantineButton} from '@mantine/core';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: string;
  radius?: string;
  size?: string;
};

export default function Button({ children, ...props }: ButtonProps) {
  return <MantineButton {...props}>{children}</MantineButton>;
}