import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";
// import BodyPartImage from "../assets/icons/body-part.png";
import BodyPartImage from "../assets/icons/bodyPart.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      ele: "bodyPart",
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      ele: "target Muscle",
      icon: TargetImage,
      name: target,
    },
    {
      ele: "equipment",
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{
          // borderBottomRightRadius: "40px",
          // borderTopLeftRadius: "40px",
          // borderRadius: "20px",
          // boxShadow: "20px 20px 20px rgba(3, 218, 197, 0.4)",
          boxShadow: "20px 20px 20px rgba(187, 134, 252, 0.4)",
        }}
      />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
          p: "20px",
        }}
      >
        <Typography textTransform="capitalize" variant="h3" color="#bb86fc">
          {name}
        </Typography>
        <Typography variant="h6" color="#fff">
          Exercises keep you strong.{name} {` `}is one of the best exercises to
          target your {target} {` `} . It will help you improve your mood and
          gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
            <Typography textTransform="capitalize" variant="h5" color="#fff" width="180px" >
              {item.ele}
            </Typography>
            <Button
              sx={{
                background: "#17122e",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5" color="#fff" paddingLeft="40px">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
