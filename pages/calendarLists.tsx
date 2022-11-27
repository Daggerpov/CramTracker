import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, height: 300, bgcolor: 'background.paper', marginLeft: 75 }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Placeholder"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Placeholder:
              </Typography>
              {" This will hold text for a to-do list"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    


  );
}

