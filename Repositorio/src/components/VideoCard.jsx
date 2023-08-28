import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    } from "@mui/material";

const VideoCard = ({video}) => {
    return (
        <Card
      className="w-[400px] ml-[8%] mt-[5%] "
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={video.miniature}
          height="200"
          alt="Card Image"
        />
        <CardContent>
          <h1>{video.title}</h1>
          <p>
            {video.description}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}




export default VideoCard