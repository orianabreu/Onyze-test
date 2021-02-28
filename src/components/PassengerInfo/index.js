import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel";
import CheckIcon from "@material-ui/icons/Check";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import SwitchButton from "../SwitchButton";
import PaymentButtons from "../PaymentButtons";
import useStyles, {
  MainContainer,
  StepContainer,
  AccordionSummary,
} from "./styles";
import observable$ from "../observable/observable";

export default function PassengerInfo({
  imgURL,
  name,
  email,
  phone,
  location,
  departure,
  address1,
  arrival,
  address2,
  distance,
  time,
  energy,
}) {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    const sub = observable$.subscribe(setRatio);
    return () => sub.unsubscribe();
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");

  const {
    heading,
    subtitle,
    blueSubtitle,
    container,
    MuiAvatar,
    MuiTypography,
    priceTypo,
    textContainer,
    MuiStepIcon,
    IconContainer,
    MuiStep,
    MuiStepper,
    verticalConnector,
    horizontalConnector,
  } = useStyles();

  return (
    <MainContainer isMobile={isMobile}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<SwitchButton />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={clsx(heading, container)}>
            PASSENGER INFO
            <br />
            {name}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={1} className={container}>
            <Grid
              container
              item
              xs={9}
              md={6}
              spacing={2}
              alignItems="flex-start"
            >
              <Grid container item xs={12}>
                <Avatar alt="Passenger" src={imgURL} className={MuiAvatar} />
                <div className={textContainer}>
                  <Typography className={MuiTypography}>{name}</Typography>
                  <Typography className={subtitle}>4 interactions</Typography>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Typography className={heading}>EMAIL</Typography>
                <Typography>{email}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className={heading}>PHONE</Typography>
                <Typography>{phone}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className={heading}>LOCATION</Typography>
                <Typography>{location}</Typography>
              </Grid>
            </Grid>

            <Grid container item xs={3} md={6}>
              <PaymentButtons />
            </Grid>

            <Grid
              container
              item
              xs={12}
              direction={isMobile ? "row" : "column"}
              alignItems="center"
            >
              <Grid container item xs={12}>
                <StepContainer>
                  <Stepper
                    alternativeLabel={!isMobile}
                    orientation={isMobile ? "vertical" : "horizontal"}
                    className={MuiStepper}
                    connector={
                      <StepConnector
                        classes={{
                          lineVertical: verticalConnector,
                          lineHorizontal: horizontalConnector,
                        }}
                      />
                    }
                  >
                    <Step className={MuiStep}>
                      <StepLabel
                        StepIconComponent={() => (
                          <div className={IconContainer}>
                            <CheckIcon className={MuiStepIcon} />
                          </div>
                        )}
                      >
                        <Typography>
                          {departure}
                          <br />
                          {address1}
                        </Typography>
                      </StepLabel>
                    </Step>

                    <Step active className={MuiStep}>
                      <StepLabel
                        StepIconComponent={() => (
                          <div className={IconContainer}>
                            <LocationOnIcon className={MuiStepIcon} />
                          </div>
                        )}
                      >
                        <Typography>
                          {arrival}
                          <br />
                          {address2}
                        </Typography>
                      </StepLabel>
                    </Step>
                  </Stepper>
                </StepContainer>
              </Grid>

              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <Typography className={MuiTypography}>
                    {distance} km
                  </Typography>
                  <Typography className={subtitle}>Distance</Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography className={MuiTypography}>{time} min</Typography>
                  <Typography className={subtitle}>Time</Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography className={priceTypo}>
                    ${ratio * distance}
                  </Typography>
                  <Typography className={blueSubtitle}>Price</Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography className={MuiTypography}>
                    {energy} kWh
                  </Typography>
                  <Typography className={subtitle}>Energy</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </MainContainer>
  );
}
