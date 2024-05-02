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
import dessertsmenubackground from '../../images/dessertsmenubackground.jpeg';
import soupsmenubackground from '../../images/soupsmenubackground.jpeg';
import maincoursemenubackground from '../../images/maincoursemenubackground.jpeg';
import pulaosandbiryanismenubackground from '../../images/pulaosandbiryanismenubackground.jpeg';
import gulabjamunbackground from '../../images/gulabjamunbackgroundImage.jpeg';
import paayasam from '../../images/paayasambackgroundimage.jpeg';
import Bobbatlu from '../../images/bobbatlubackground.jpeg';
import doublekameetha from '../../images/doublekameethaimage.jpeg';
import vegetablesoup from '../../images/vegetablesoupbackgroundiamge.jpeg';
import tomatosoup from '../../images/tomatosoupbackgroundImage.jpeg';
import cornsoup from '../../images/cornsoupbackgroundimage.jpeg';
import indianspicedlentilsoup from '../../images/indianspicedlentilsoup.jpeg';
import chickenmanchow from '../../images/chickenmanchowsoup.jpeg';
import chickenhotandsour from '../../images/chickenhotandsourbackgroundimage.jpeg';
import chickenbambooshootssoup from '../../images/chickenbambooshoot.jpeg';
import muttonpaya from '../../images/muttonpayabackground.jpeg';
import mudhapappu from '../../images/mudhapappubackgroundimage.jpeg';
import daltadka from '../../images/daltadka.jpeg';
import paneerbhurji from '../../images/paneerbhurjibackgroundimage.jpeg';
import guthivankaya from '../../images/guthivankayabackgroundimage.jpeg';
import natukodipulusu from '../../images/natukodipulubackgroundimage.jpeg';
import chickenfry from '../../images/chickenfrybackgroundimage.jpeg';
import muttonkeema from '../../images/muttonkheemabackgroundimage.jpeg';
import muttonpulusu from '../../images/muttonpulusubackgroundimage.jpeg'
import paneerpulao from '../../images/paneerpulaobackgroundimage.jpeg'
import vegetabledumbiryani from '../../images/vegetabledumbiryanibackgroundimage.jpeg'
import paneerdumbiryani from '../../images/paneerdumbackgroundimage.jpeg'
import hyderabadichickendumbiryani from '../../images/hyderabadichickedbmenubackground.jpeg'
import chettinadchickenpulao from '../../images/chettinadchickenpulaobackgroundimage.jpeg'
import muttonpulao from '../../images/muttonkheemapulaobackgroundimage.jpeg'
import muttonkeemapulao from '../../images/muttonkheemapulaobackgroundimage.jpeg'
import muttondumbiryani from '../../images/muttondumbiryanibackgroundimage.jpeg'
import pinacolada from '../../images/pinacoladabackgroundimage.jpeg'
import screwdriver from '../../images/screwdriverbackgroundimage.jpeg'
import mangomojito from '../../images/mangomojitobackgroundimage.jpeg'
import virginmojito from '../../images/virjinmojito.jpeg'
import mushroompulao from '../../images/mushroompulaobackgroundimage.jpeg'
import SearchComponent from './SearchComponent';
import savedRecipe from '../../images/savedRecipes.jpeg'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const hideHeader =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/search';

  const small = useMediaQuery('(max-width:600px)');
  const full = useMediaQuery('(min-width:600px)');

  const renderTitleAndBg = () => {
    let title = 'AMMA CHETHI MUDHA';
    let bgImage = backgroundImage;

    switch (location.pathname) {
      case '/home':
        title = 'AMMA CHETHI MUDHA';
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
      case '/editprofile':
        title = 'EDIT PROFILE';
        bgImage = profilebackground;
        break;
      case '/dessertsmenu':
        title = 'DESSERTS';
        bgImage = dessertsmenubackground;
        break;
      case '/soupsmenu':
        title = 'SOUPS';
        bgImage = soupsmenubackground;
        break;
      case '/maincoursemenu':
        title = 'MAIN COURSE';
        bgImage = maincoursemenubackground;
        break;
      case '/pulaosandbiryanismenu':
        title = 'PULAOS AND BIRYANIS';
        bgImage = pulaosandbiryanismenubackground;
        break;
      case '/recipedetails/gulab-jamun':
        title = 'GULAB JAMUN';
        bgImage = gulabjamunbackground;
        break;
      case '/recipedetails/paayasam':
        title = 'PAAYASAM';
        bgImage = paayasam;
        break;
      case '/recipedetails/bobbatlu':
        title = 'BOBBATLU';
        bgImage = Bobbatlu;
        break;
      case '/recipedetails/double-ka-meetha':
        title = 'DOUBLE KA MEETHA';
        bgImage = doublekameetha; 
        break;
      case '/recipedetails/vegetable-soup':
        title = 'VEGETABLE SOUP';
        bgImage = vegetablesoup;
        break;
      case '/recipedetails/tomato-soup':
        title = 'TOMATO SOUP';
        bgImage = tomatosoup;
        break;
      case '/recipedetails/corn-soup':
        title = 'CORN SOUP';
        bgImage = cornsoup;
        break;
      case '/recipedetails/indian-spiced-lentil-soup':
        title = 'INDIAN SPICED LENTIL SOUP';
        bgImage = indianspicedlentilsoup;
        break;
      case '/recipedetails/chicken-manchow-soup':
        title = 'CHICKEN MANCHOW SOUP';
        bgImage = chickenmanchow;
        break;
      case '/recipedetails/chicken-hot-&-sour':
        title = 'CHICKEN HOT & SOUR';
        bgImage = chickenhotandsour;
        break;
      case '/recipedetails/chicken-bamboo-shoots-soup':
        title = 'CHICKEN BAMBOO SHOOTS SOUP';
        bgImage = chickenbambooshootssoup;
        break;
      case '/recipedetails/mutton-paya':
        title = 'MUTTON PAYA';
        bgImage = muttonpaya;
        break;
      case '/recipedetails/mudha-pappu':
        title = 'MUDHA PAPPU';
        bgImage = mudhapappu;
        break;
      case '/recipedetails/dal-tadka':
        title = 'DAL TADKA';
        bgImage = daltadka;
        break;
      case '/recipedetails/paneer-burji':
        title = 'PANEER BURJI';
        bgImage = paneerbhurji;
        break;
      case '/recipedetails/guthi-vankaya':
        title = 'GUTHI VANKAYA';
        bgImage = guthivankaya;
        break;
      case '/recipedetails/natukodi-pulusu':
        title = 'NATUKODI PULUSU';
        bgImage = natukodipulusu;
        break;
      case '/recipedetails/chicken-fry':
        title = 'CHICKEN FRY';
        bgImage = chickenfry;
        break;
      case '/recipedetails/mutton-keema':
        title = 'MUTTON KEEMA';
        bgImage = muttonkeema;
        break;
      case '/recipedetails/mutton-pulusu':
        title = 'MUTTON PULUSU';
        bgImage = muttonpulusu;
        break;
      case '/recipedetails/mushroom-pulao':
        title = 'MUSHROOM PULAO';
        bgImage = mushroompulao;
        break;
      case '/recipedetails/paneer-pulao':
        title = 'PANEER PULAO';
        bgImage = paneerpulao;
        break;
      case '/recipedetails/vegetable-dum-biryani':
        title = 'VEGETABLE DUM BIRYANI';
        bgImage = vegetabledumbiryani;
        break;
      case '/recipedetails/paneer-dum-biryani':
        title = 'PANEER DUM BIRYANI';
        bgImage = paneerdumbiryani;
        break;
      case '/recipedetails/hyderabad-chicken-dum-biryani':
        title = 'HYDERABADI CHICKEN DUM BIRYANI';
        bgImage = hyderabadichickendumbiryani;
        break;
      case '/recipedetails/chettinad-chicken-pulao':
        title = 'CHETTINAD CHICKEN PULAO';
        bgImage = chettinadchickenpulao;
        break;
      case '/recipedetails/spicy-mutton-pulao':
        title = 'SPICY MUTTON PULAO';
        bgImage = muttonpulao;
        break;
      case '/recipedetails/mutton-keema-pulao':
        title = 'MUTTON KEEMA PULAO';
        bgImage = muttonkeemapulao;
        break;
      case '/recipedetails/mutton-dum-biryani':
        title = 'MUTTON DUM BIRYANI';
        bgImage = muttondumbiryani;
        break;
      case '/recipedetails/pina-colada':
        title = 'PINA COLADA';
        bgImage = pinacolada;
        break;
      case '/recipedetails/screw-driver':
        title = 'SCREW DRIVER';
        bgImage = screwdriver;
        break;
      case '/recipedetails/mango-mojito':
        title = 'MANGO MOJITO';
        bgImage = mangomojito;
        break;
      case '/recipedetails/virgin-mojito':
        title = 'VIRGIN MOJITO';
        bgImage = virginmojito;
        break;
      case '/savedrecipes':
        title = 'SAVED RECIPES';
        bgImage = savedRecipe;
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
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${renderTitleAndBg().bgImage})`,
        backgroundSize: 'cover',
        height: '310px',
        backgroundPosition: 'center center',
        display: hideHeader ? 'none' : 'flex',
      }}
    >
      {showSearch ? (
        <SearchComponent setShowSearch={setShowSearch} />
      ) : (
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

            <IconButton
              color='white'
              aria-label='search'
              onClick={() => setShowSearch(true)}
            >
              <AiOutlineSearch style={{ color: 'white', fontSize: 20 }} />
            </IconButton>
          </div>
        </Toolbar>
      )}
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