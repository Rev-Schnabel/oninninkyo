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

import { Navigation } from "../common/navigation";

import { 
  people,
  otherPeople,
  evilSpirits
} from "./data";

export const Oninninian: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教の関連人物
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            おにんにん教は数多くの弟子や信徒達から成っている。<br />
            このページでは信徒の中でも弟子として洗礼名を与えられた者達や、弟子では無いものの熱心な者を記載する。<br /><br />
            また、おにんにん教に災いをもたらした確執のある魑魅魍魎達や、魑魅魍魎でありながらおにんにん総帥を唸らせた者、魑魅魍魎と疑われるが妙な存在感を纏っている者についても記録する。
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん総帥の弟子達
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <List>
            {people.map(p => (
              <ListItem>
                <ListItemText
                  primary={p.name}
                  secondary={
                    <React.Fragment>
                      <Grid container>
                        <Grid item xs={12} sm={4}>
                          <br />{p.face}
                        </Grid>
                          <Grid item xs={12} sm={8}>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              <br />弟子入り日: <a style={{ textDecoration: "none" }} href={p.apprenticeshipDateUrl}>{p.apprenticeshipDate}</a><br />
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
                            <br />{p.description}
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
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            熱心な信徒達
          </Typography>
          <List>
            {otherPeople.map(p => (
              <ListItem>
                <ListItemText
                  primary={p.name}
                  secondary={
                    <React.Fragment>
                      <Grid container>
                        <Grid item xs={12} sm={4}>
                          <Box sx={{ whiteSpace: 'pre', overflow: 'auto' }}>
                            <br />{p.face}
                          </Box>
                        </Grid>
                          <Grid item xs={12} sm={8}>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              <br />初出: <a style={{ textDecoration: "none" }} href={p.apprenticeshipDateUrl}>{p.apprenticeshipDate}</a><br />
                            </Typography>
                            <br />{p.description}
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
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            特別に警戒すべき魑魅魍魎達
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <List>
            {evilSpirits.map(p => (
              <ListItem>
                <ListItemText
                  primary={p.name}
                  secondary={
                    <React.Fragment>
                      <Grid container>
                        <Grid item xs={12} sm={4}>
                          <Box sx={{ whiteSpace: 'pre', overflow: 'auto' }}>
                            <br />{p.face}
                          </Box>
                        </Grid>
                          <Grid item xs={12} sm={8}>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              <br />初出: <a style={{ textDecoration: "none" }} href={p.apprenticeshipDateUrl}>{p.apprenticeshipDate}</a><br />
                            </Typography>
                            <br />{p.description}
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
      </Box>
    </div>
  );
};