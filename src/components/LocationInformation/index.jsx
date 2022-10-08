import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props;
  const { 
    location, 
    twitter_username, 
    blog, 
    company 
  } = userState;

  return (
    <Grid 
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <TwitterIcon />
          {
            twitter_username
            ? <Typography>@{twitter_username}</Typography>
            : <Typography>Not Avaiable</Typography>
          }
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LanguageIcon />
          {
            blog
            ? <a target='_blank' href={blog}><Typography>{blog}</Typography></a>
            : <Typography>Not Avaiable</Typography>
          }
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <BusinessIcon />
          {
            company
            ? <Typography>{company}</Typography>
            : <Typography>Not Avaiable</Typography>
          }
        </Stack>
      </Grid>

    </Grid>
  );
}

export default LocationInformation;