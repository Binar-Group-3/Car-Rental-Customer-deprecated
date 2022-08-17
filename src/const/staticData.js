//# fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faAngleLeft,
  faAngleRight,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

//# buttons
const ButtonSewa = [<button className="button">Mulai Sewa Mobil</button>];
const ButtonCari = [<button className="button">Cari Mobil</button>];
const ButtonPilih = [<button className="button">Pilih Mobil</button>];
const ButtonEdit = [<button className="button">Edit</button>];
const ButtonBack = [
  <button className="button">
    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
  </button>,
];

//# icons
const checkIcon = [<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>];
const checkIcon5 = Array(5).fill(checkIcon);
const angleLeftIcon = <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>;
const angleRightIcon = <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>;
const userGroupIcon = <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>;

export {
  checkIcon5,
  ButtonSewa,
  ButtonCari,
  ButtonPilih,
  ButtonEdit,
  ButtonBack,
  angleLeftIcon,
  angleRightIcon,
  userGroupIcon,
};
