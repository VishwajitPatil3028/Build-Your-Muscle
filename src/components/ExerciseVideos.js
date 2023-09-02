import React from "react";
import { Typography, Box, Stack, Link } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#fff"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#BB86FC", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "space-evenly" ,}}
        // sx={{ flexDirection: "row", gap: { lg: "50px", xs: "20px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <Link
            underline="none"
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            backgroundColor="#17122e"
            sx={{
              // width: { lg: "320px", xs: "300px" },
              m:"20px",
              height: { lg: "410px", xs: "300px" },
            }}
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: { lg: "28px", xs: "18px" },
                  paddingLeft: "15px",
                  paddingRight: "10px",
                }}
                fontWeight={600}
                color="#fff"
              >
                {item.video.title}
              </Typography>
              <Typography
                fontSize="14px"
                color="#fff"
                paddingLeft="15px"
                paddingRight="10px"
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
