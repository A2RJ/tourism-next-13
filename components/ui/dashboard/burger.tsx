import { useDisclosure } from "@mantine/hooks";
import { Burger as BurgerButton } from "@mantine/core";

export default function Burger() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return <BurgerButton opened={opened} onClick={toggle} aria-label={label} />;
}
