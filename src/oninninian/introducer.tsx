import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@mui/material";

import { People } from "./types";

type Props = {
  title: string;
  dateName: string;
  people: People[];
};

export const Introducer: React.FC<Props> = (props: Props) => {
  return (
    <Paper elevation={3} sx={{ m: 2, p: 2}}>
      <Typography variant="h5">
        {props.title}
      </Typography>
      <Divider variant="middle" sx={{ m: 1 }}/>
      <List>
        {props.people.map(p => (
          <ListItem>
            <ListItemText
              primary={p.name}
              secondary={
                <React.Fragment>
                  <Grid container>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ whiteSpace: 'pre', overflow: 'auto', m: 1 }}>
                        {p.face}
                      </Box>
                    </Grid>
                      <Grid item xs={12} sm={8}>
                        <Box sx={{ m: 1 }}>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {props.dateName}: <a style={{ textDecoration: "none" }} href={p.apprenticeshipDateUrl}>{p.apprenticeshipDate}</a><br />
                          </Typography>
                          {p.pastorInaugurationDate && 
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              牧師就任日: <a style={{ textDecoration: "none" }} href={p.pastorInaugurationDateUrl}>{p.pastorInaugurationDate}</a><br />
                            </Typography>
                          }
                        </Box>
                        <Box sx={{m: 1}} >
                          {p.description}
                        </Box>
                      </Grid>
                    </Grid>
                  <Divider variant="middle" sx={{ m: 1 }}/>
                </React.Fragment>
              }        
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};