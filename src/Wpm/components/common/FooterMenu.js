import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import { SOUND_MODE_TOOLTIP } from "../features/sound/sound";

const FooterMenu = ({
 
  toggleSoundMode,
  activate,
 
}) => {



  return (
    <div className="footer">
      <Grid container justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row">
          <IconButton onClick={toggleSoundMode}>
            <Tooltip title={SOUND_MODE_TOOLTIP}>
              <span className="zen-button" >
                {activate?<VolumeUpIcon ></VolumeUpIcon>:<VolumeOffIcon/>}
              </span>
            </Tooltip>
          </IconButton>
        </Box>
      </Grid>
    </div>
  );
};

export default FooterMenu;
