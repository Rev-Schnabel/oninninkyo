import React from "react";

import { TimelineDot } from '@mui/lab';

import {
  AutoAwesome,
  Cake,
  FiberManualRecord,
  MilitaryTech,
  AccountBalance,
  Restaurant,
  NewReleases,
  Diversity3,
  Celebration,
  EventSeat
} from '@mui/icons-material';

type Props = {
  iconName: string | undefined;
};

export const IconCatering: React.FC<Props> = (props: Props) => {
  switch(props.iconName) {
    case 'autoAwesome':
      return (
        <TimelineDot color="warning">
          <AutoAwesome />
        </TimelineDot>
      );
    case 'cake':
      return (
        <TimelineDot color="info">
          <Cake />
        </TimelineDot>
      );
    case 'militaryTech':
      return (
        <TimelineDot color="success">
          <MilitaryTech />
        </TimelineDot>
      );
    case 'accountBalance':
      return (
        <TimelineDot color="warning">
          <AccountBalance />
        </TimelineDot>
      );
    case 'restaurant':
      return (
        <TimelineDot color="primary">
          <Restaurant />
        </TimelineDot>
      );
    case 'newReleases':
      return (
        <TimelineDot color="error">
          <NewReleases />
        </TimelineDot>
      );
    case 'diversity3':
      return (
        <TimelineDot color="info">
          <Diversity3 />
        </TimelineDot>
      );
    case 'celebration':
      return (
        <TimelineDot color="primary">
          <Celebration />
        </TimelineDot>
      );
    case 'eventSeat':
      return (
        <TimelineDot color="primary">
          <EventSeat />
        </TimelineDot>
      );
    default:
      return (
        <TimelineDot color="grey">
          <FiberManualRecord />
        </TimelineDot>
      );
  };
};
