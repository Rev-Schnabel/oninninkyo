import React from "react";

import {
  Container,
  Grid,
  Typography
} from "@mui/material";

import Image from "mui-image";
import notFoundOninninImg from "./img/notFoundOninninImg.png"

import { Navigation } from "../common/navigation";

export const Notfound: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Container maxWidth="md">
        <Grid container alignItems='center' justifyContent='center' direction="column">
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="textSecondary" sx={{ marginTop: 3 }}>
              404 Not Found
            </Typography>
            <Grid container justifyContent="center" sx={{ marginTop: 3 }}>
              <Image src={notFoundOninninImg} width="80%" />
            </Grid>
            <Typography variant="h5" align="center" color="textSecondary" sx={{ marginTop: 3 }}>
              お探しのページは見つかりませんでした。。。
            </Typography>
          </Grid>
        </Grid>
      </Container>
          
    </div>
  );
}
