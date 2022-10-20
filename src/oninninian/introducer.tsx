import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  Link,
  Collapse,
  FormControlLabel,
  Switch
} from "@mui/material";

import { People } from "./types";

type Props = {
  title: string;
  dateName: string;
  people: People[];
};

export const Introducer: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Paper elevation={3} sx={{ m: 2, p: 2}}>
      <Typography variant="h5">
        {props.title}
        <Box sx={{ textAlign: 'left'}}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
        </Box>
      </Typography>
      <Collapse in={checked}>
        <Divider variant="middle" sx={{ m: 1 }}/>
        <List>
          {props.people.sort((a, b) => +new Date(a.apprenticeshipDate) - +new Date(b.apprenticeshipDate)).map(p => (
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
                              {props.dateName}: <Link style={{ textDecoration: "none" }} href={p.apprenticeshipDateUrl}>{p.apprenticeshipDate}</Link><br />
                            </Typography>
                            {p.pastorInaugurationDate && 
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                牧師就任日: <Link style={{ textDecoration: "none" }} href={p.pastorInaugurationDateUrl}>{p.pastorInaugurationDate}</Link><br />
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
      </Collapse>
    </Paper>
  );
};