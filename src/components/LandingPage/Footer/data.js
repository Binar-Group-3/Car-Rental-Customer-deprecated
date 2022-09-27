import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const facebookIcon = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>;
const instagramIcon = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>;
const twitterIcon = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>;
const envelopeIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
const twitchIcon = <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>;

const socialMediaLogo = [
  {
    id: 1,
    icon: [facebookIcon],
  },
  {
    id: 2,
    icon: [instagramIcon],
  },
  {
    id: 3,
    icon: [twitterIcon],
  },
  {
    id: 4,
    icon: [envelopeIcon],
  },
  {
    id: 5,
    icon: [twitchIcon],
  },
];

export { socialMediaLogo };
