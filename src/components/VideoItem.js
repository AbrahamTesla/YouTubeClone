import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ listOfVideo, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(listOfVideo)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={listOfVideo.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{listOfVideo.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
