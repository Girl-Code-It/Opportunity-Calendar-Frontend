import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} >
        Opportunities
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}  > <a href= "/viewopportunity/fulltime">Full Time Jobs </a></MenuItem>
        <MenuItem onClick={handleClose}><a href= "/viewopportunity/hackathon">Hackathons </a></MenuItem>
        <MenuItem onClick={handleClose}><a href= "/viewopportunity/scholarship">Scholarship</a></MenuItem>
        <MenuItem onClick={handleClose}  > <a href= "/viewopportunity/codingcomp">Coding Competitions </a></MenuItem>
        <MenuItem onClick={handleClose}  > <a href= "/viewopportunity/techconf">Tech Conferences </a></MenuItem>
        <MenuItem onClick={handleClose}  > <a href= "/viewopportunity/internships">Internship Opportunities </a></MenuItem>
      </Menu>
    </div>
  );
}
