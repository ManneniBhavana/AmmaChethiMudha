import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import backgroundImage from '../../images/home_background.jpeg';
import logo from '../../images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import useMediaQuery from '@mui/material/useMediaQuery';
import { List, ListItem, Collapse, ListItemButton } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import homebackground from '../../images/home_background.jpeg';
import insightsbackground from '../../images/insights_background.jpeg';
import recipesbacground from '../../images/recipes_background.jpeg';
import aboutusbackground from '../../images/about_us_background.jpeg';
import profilebackground from '../../images/profile-background.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const hideHeader =
    location.pathname === '/login' || location.pathname === '/signup';

  const small = useMediaQuery('(max-width:600px)');
  const full = useMediaQuery('(min-width:600px)');

  const renderTitleAndBg = () => {
    let title = 'AMMA CHETHI MUDDHA';
    let bgImage = backgroundImage;

    switch (location.pathname) {
      case '/home':
        title = 'AMMA CHETHI MUDDHA';
        bgImage = homebackground;
        break;
      case '/insights':
        title = 'INSIGHTS';
        bgImage = insightsbackground;
        break;
      case '/recipes':
        title = 'RECIPES';
        bgImage = recipesbacground;
        break;
      case '/aboutus':
        title = 'ABOUT US';
        bgImage = aboutusbackground;
        break;
      case '/profile':
        title = 'PROFILE';
        bgImage = profilebackground;
        break;
      default:
        break;
    }

    return { title, bgImage };
  };

  const renderFullList = () => {
    const listItems = ['Home', 'Insights', 'Recipes', 'About Us', 'Profile'];
    return listItems.map((each) => {
      const activeStyle = {
        color:
          '/' + each.toLowerCase().replace(/\s/g, '') === location.pathname
            ? 'orange'
            : 'white',
        fontWeight:
          '/' + each.toLowerCase().replace(/\s/g, '') === location.pathname
            ? 'bold'
            : 'normal',
      };
      return (
        <Link to={`${each.toLowerCase().replace(/\s/g, '')}`}>
          <Button
            className='nav-links-button'
            style={{ textTransform: 'capitalize', ...activeStyle }}
          >
            <CircleIcon
              style={{ fontSize: '5px', marginRight: '5px', ...activeStyle }}
            />
            {each}
          </Button>
        </Link>
      );
    });
  };

  const renderSmallList = () => {
    const listItems = ['Home', 'Insights', 'Recipes', 'About Us', 'Profile'];

    return (
      <>
        <List>
          <ListItem>
            <Button onClick={() => setOpen(!open)}>
              {open ? <CloseTwoToneIcon /> : <MenuIcon />}
            </Button>
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            {listItems.map((each) => {
              const activeStyle = {
                color:
                  '/' + each.toLowerCase().replace(/\s/g, '') ===
                  location.pathname
                    ? 'orange'
                    : 'white',
              };

              return (
                <List component='div' disablePadding>
                  <Link to={`${each.toLowerCase().replace(/\s/g, '')}`}>
                    <ListItemButton
                      className='nav-links-button'
                      style={{ textTransform: 'capitalize', ...activeStyle }}
                      onClick={() => setOpen(!open)}
                    >
                      <CircleIcon
                        style={{
                          fontSize: '5px',
                          marginRight: '5px',
                          ...activeStyle,
                        }}
                      />
                      {each}
                    </ListItemButton>
                  </Link>
                </List>
              );
            })}
          </Collapse>
        </List>
      </>
    );
  };

  return (
    <AppBar
      position='static'
      style={{
        backgroundImage: `url(${renderTitleAndBg().bgImage})`,
        backgroundSize: 'cover',
        height: '310px',
        backgroundPosition: 'center center',
        display: hideHeader ? 'none' : 'flex',
      }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          {small && renderSmallList()}
          <div
            style={{
              paddingTop: 0.02,
              paddingBottom: 0.02,
              paddingLeft: 2,
              paddingRight: 2,
              color: 'black',
              borderColor: 'white',
              backgroundColor: 'white',
            }}
          >
            <Link to='/home'>
              <img src={logo} height={40} width={40} alt='Logo' />
            </Link>
          </div>
        </div>
        <div
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          {full && <div>{renderFullList()}</div>}
          {/* Search Icon */}
          <IconButton color='white' aria-label='search'>
            <AiOutlineSearch style={{ color: 'white', fontSize: 20 }} />
          </IconButton>
        </div>
      </Toolbar>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          style={{
            flexGrow: 1,
            paddingTop: 45,
            fontWeight: 'bold',
            fontSize: '50px',
            textAlign: 'center',
          }}
        >
          {renderTitleAndBg().title}
        </Typography>
      </Toolbar>
      <Typography
        style={{
          borderBottom: '8px solid #c25700',
          borderWidth: 7,
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          marginTop: '2px',
        }}
      ></Typography>
    </AppBar>
  );
};

export default Header;
