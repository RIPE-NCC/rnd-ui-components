import React from "react";

import {
  MoreVertical,
  X,
  Check,
  ThumbsDown,
  ThumbsUp,
  PlusCircle as Plus,
  Edit3 as Edit,
  AlertTriangle as Alert,
  HelpCircle,
  Map
} from "react-feather";

export const MenuButton = (
  <svg
    className="context-menu-icon icon-hover-only"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
  </svg>
);

export const UpArrow = (
  <svg className="context-menu-icon" viewBox="0 0 24 24" width="24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const DownArrow = (
  <svg className="context-menu-icon" viewBox="0 0 24 24" width="24">
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
    <path d="M0-.75h24v24H0z" fill="none" />
  </svg>
);

export class ConfirmLocationButton extends React.Component {
  render() {
    return <li />;
  }
}

export const MainMenuButton = (
  <MoreVertical
    className="context-menu-icon"
    viewBox="0 0 24 24"
    width="24"
    strokeWidth="0.5pt"
    transform="translate(-5,6)"
  />
);

export const MapButton = (
  <Map
    className="helptext-icon"
    viewBox="0 0 24 24"
    width="24"
    strokeWidth="0.5pt"
    transform="translate(-5,6)"
  />
);

export const dismissButton = (
  <X
    className="dismiss-button context-menu-icon"
    viewBox="0 0 24 24"
    width="24"
    strokeWidth="0.5pt"
    transform="translate(0,6)"
  />
);
export const checkButton = (
  <Check
    className="check-button context-menu-icon"
    viewBox="0 0 24 24"
    strokeWidth="1px"
  />
);
export const thumbsDownButton = (
  <ThumbsDown
    className="check-button context-menu-icon"
    viewBox="0 0 24 24"
    strokeWidth="1px"
  />
);
export const thumbsUpButton = (
  <ThumbsUp
    className="check-button context-menu-icon"
    viewBox="0 0 24 24"
    strokeWidth="1px"
  />
);
export const addLocationButton = (
  <Plus
    className="edit-location-button"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    strokeWidth="1px"
  />
);
export const editLocationButton = (
  <Edit className="edit-location-button" size={18} />
);
export const LowScoreWarningButton = (
  <Alert className="alert-location-button" size={18} />
);
export const askConfirmationButton = (
  <HelpCircle className="confirmation-location-button" size={18} />
);
