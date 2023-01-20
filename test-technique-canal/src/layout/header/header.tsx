import './header.css';

import { Navbar} from 'reactstrap';

import { Brand, UserProfile} from './header-components';

export interface IHeaderProps {

}

const Header = () => {

  const renderDevRibbon = () => (
      <div className="ribbon dev">
          <span>Development</span>
      </div>
    )


  return (
    <div id="app-header" className="app-header">
      {renderDevRibbon()}
      <Navbar data-cy="navbar" light expand="md" fixed="top" className="bg-light">
          <div className="navbar-custom">
              <Brand />
              <UserProfile />
          </div>
      </Navbar>
    </div>
  );
};

export default Header;
