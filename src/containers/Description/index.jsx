import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment } from "react";
import LocationInformation from "../../components/LocationInformation";
import PaperInformation from "../../components/PaperInformation";

const PrincipalDescription = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <Fragment>
      <Stack sx={{
        justifyContent: 'center',
      }}>
        {bio !== null
          ? <Typography variant='body1'>{bio}</Typography>
          : <Typography variant='body1'>No description available :(</Typography>
        }
      </Stack>
      <PaperInformation userState={userState}></PaperInformation>
      <LocationInformation userState={userState}></LocationInformation>
    </Fragment>
  )
}

export default PrincipalDescription;