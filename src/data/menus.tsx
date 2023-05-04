import { AiOutlineTable } from "react-icons/ai";
import { BsCardHeading } from "react-icons/bs";
import { Menu } from "types/menu";

const menus: Menu[] = [
  {
    id: "1",
    icon: <BsCardHeading />,
    label: "카드타입",
    router: "/",
  },
  {
    id: "2",
    icon: <AiOutlineTable />,
    label: "테이블타입",
    router: "/table",
  }
];

export { menus };

