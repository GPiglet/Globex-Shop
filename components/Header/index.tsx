import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Men', 'Women', 'Kids', 'Shop', 'Contact us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const isLogin = true;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: '#F0F0F0',
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 24,
  marginRight: 24,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 16,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: '1rem',
  '& .MuiInputBase-input': {
    padding: '14px 48px 14px 24px',
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));


const ResponsiveHeader = (props: any) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const stickyHeader = React.useRef<any>(null);
  const onScroll = () => {
    if ( stickyHeader.current )
    {
      if ( window.pageYOffset > 0 )
      {
        // stickyHeader.current.style.backgroundColor = '#fff';
        // stickyHeader.current.style.marginTop = 0;
      }
      else
      {
        // stickyHeader.current.style.backgroundColor = 'transparent';
        // stickyHeader.current.style.marginTop = '11px';
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return ()=>window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar position="fixed" color="transparent" ref={stickyHeader}
      sx = {{
        backgroundColor: '#fff',
        boxShadow: '0px 0px 15px 0px rgb(0 0 0 / 10%)',
        transition: 'margin-top 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx = {{
            minHeight: {xs: 80},
          }}
        >
          <Typography component="a" href="/">
            <Box
              sx = {{
                display: {xs: 'none', md: 'flex'}
              }}
              component="img"
              alt="logo"
              src="/logo.png"
            />
          </Typography>
          {/* mobile header */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography component="a" href="/">
          <Box
            sx = {{
              display: {xs: 'flex', md: 'none'}
            }}
            component="img"
            alt="logo"
            src="/logo.png"
          />
          </Typography>

          {/* menus */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: {xs: 4, lg: 14} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  display: 'block', 
                  pl: 2, 
                  pr: 2,
                  textTransform: 'none',
                  fontSize: '1.12rem',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex'}}>
            <Search>
              <SearchIconWrapper>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                  }}
                  alt="search"
                  src="/search-icon.svg"
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search here..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box
              component="img"
              sx={{
                width: '29px',
                ml: 1,
                mr: 1,
                cursor: 'pointer'
              }}
              alt="favor"
              src="/favor-icon.svg"
            />            
            <Box              
              component="img"
              sx={{
                width: '29px',
                ml: 2,
                mr: 1,
                cursor: 'pointer'
              }}
              alt="shopping cart"
              src="/cart-icon.svg"
            />
          </Box>

          {/* logged in */}
          {!isLogin && <Box>
            <Button variant="outlined">
              Login
            </Button>
          </Box>}
          {isLogin && <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2, mr: 1 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Typography>Remy Sharp</Typography>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>        
      </Container>
    </AppBar>
  );
};
export default ResponsiveHeader;
