import { NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const BrandIcon = props  => (
  <div {...props} className="brand-icon">
      <img
           src="https://media.licdn.com/dms/image/C4D0BAQFH9j5rZ2u-gQ/company-logo_200_200/0/1563203636870?e=1681948800&v=beta&t=KGiKJDEaueqDLFCANerRET27VL2WqNP39aSGzt3ISmg"
            alt="Group Canal" className="brand-photo" />
  </div>
);

export const UserIcon = props  => (
    <div {...props} className="brand-icon">
        <img
            src="https://media.licdn.com/dms/image/C5603AQE-mGAFWvQd5w/profile-displayphoto-shrink_800_800/0/1554653853892?e=1679529600&v=beta&t=_hTELZYwYrxJwqDZBhfgu-l4oS2Dc7dz80EmbJwztc4"
            alt="User image" className="profile-photo" />
        <span className="user-profile-title">Franck Amie NSIMI</span>
    </div>
);

export const Brand = () => (
    <div>
        <NavbarBrand tag={Link} to="/" className="brand-logo">
            <BrandIcon />
            <span className="brand-title">Test technique NSIMI</span>
            <span className="navbar-version">DEV</span>
        </NavbarBrand>
    </div>

);

export const UserProfile = () => (
        <UserIcon />
);
