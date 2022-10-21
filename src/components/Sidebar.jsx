import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { OtherHouses, Pets, SportsEsports, Task, FormatColorFill } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Box sx={{ display: { xs: 'block', lg: 'block', xl: 'block' }, width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/vite-project/">
              <ListItemIcon>
                <OtherHouses />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => window.open("https://genium19.github.io/vite-project/")}>
              <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
              <ListItemText primary="Genium Github" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/vite-project/views/TaskApp">
              <ListItemIcon>
                <Task />
              </ListItemIcon>
              <ListItemText primary="Task App" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/vite-project/views/Veterinaria">
              <ListItemIcon>
                <Pets />
              </ListItemIcon>
              <ListItemText primary="Veterinaria" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/vite-project/views/PintaPizarra">
              <ListItemIcon>
                <FormatColorFill />
              </ListItemIcon>
              <ListItemText primary="Pinta Pizarra" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
