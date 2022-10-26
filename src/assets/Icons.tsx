import { styled } from "nativewind";
import * as React from "react";
import Svg, { Path, G, Defs } from "react-native-svg";
import colors from "tailwindcss/colors";

type IconProps = React.ComponentProps<typeof Svg> & {
  color?: string;
  size?: number;
};

export const StyledPath = styled(Path, { classProps: ["fill", "stroke"] });

function PhoneIcon(props: IconProps) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06 2.2A2.863 2.863 0 002.2 5.06c0 8.127 6.612 14.74 14.74 14.74a2.863 2.863 0 002.837-3.22l-5.082-1.167-.314.6c-.501.957-.864 1.652-1.79 1.279-3.637-1.276-6.606-4.246-7.898-7.927-.393-.863.355-1.255 1.303-1.75l.59-.309-1.165-5.083A2.864 2.864 0 005.06 2.2zM16.94 22C7.599 22 0 14.401 0 5.06A5.065 5.065 0 016.7.273c.358.124.627.424.712.794l1.506 6.56c.083.361-.021.74-.279 1.008-.15.156-.152.16-1.516.873 1.104 2.392 3.023 4.305 5.366 5.372.715-1.365.72-1.37.876-1.52a1.11 1.11 0 011.008-.278l6.561 1.506c.369.085.669.353.792.71A5.008 5.008 0 0122 16.94c0 2.792-2.27 5.061-5.06 5.061z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function VideoCallIcon(props: IconProps) {
  return (
    <Svg width={22} height={16} viewBox="0 0 22 16" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8 10.56L16.71 7.7l3.09-2.859v5.719zm-5.5 1.54a1.1 1.1 0 01-1.1 1.1H3.3a1.1 1.1 0 01-1.1-1.1V3.3c0-.606.493-1.1 1.1-1.1h9.9c.607 0 1.1.494 1.1 1.1v8.8zm6.613-9.74a1.888 1.888 0 00-2.036.337l-2.377 2.2V3.3c0-1.82-1.48-3.3-3.3-3.3H3.3C1.48 0 0 1.48 0 3.3v8.8c0 1.82 1.48 3.3 3.3 3.3h9.9c1.82 0 3.3-1.48 3.3-3.3v-1.596l2.377 2.199c.352.327.809.497 1.274.497.257 0 .516-.052.762-.16A1.769 1.769 0 0022 11.409V3.993c0-.714-.417-1.34-1.087-1.632z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function GoBackIcon(props: IconProps) {
  return (
    <Svg width={16} height={14} viewBox="0 0 16 14" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6H3.135l3.633-4.36A1 1 0 105.232.36l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 00-.072.358L0 7l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 101.536-1.28L3.135 8H15a1 1 0 000-2z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function GoForwardIcon(props: IconProps) {
  return (
    <Svg width={16} height={14} viewBox="0 0 16 14" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6h11.865L9.232 1.64A1 1 0 1110.768.36l5 6c.039.047.059.102.088.154.024.042.053.078.071.124a.985.985 0 01.072.358L16 7l-.001.004a.985.985 0 01-.072.358c-.018.046-.047.082-.071.124-.029.052-.049.107-.088.154l-5 6a.999.999 0 11-1.536-1.28L12.865 8H1a1 1 0 010-2z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function CalendarIcon(props: IconProps) {
  return (
    <Svg width={16} height={14} viewBox="0 0 20 22" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4 15.4c0-.605.495-1.1 1.1-1.1.605 0 1.1.495 1.1 1.1 0 .605-.495 1.1-1.1 1.1-.605 0-1.1-.495-1.1-1.1zm5.5-1.1h4.4c.605 0 1.1.495 1.1 1.1 0 .605-.495 1.1-1.1 1.1H9.9c-.605 0-1.1-.495-1.1-1.1 0-.605.495-1.1 1.1-1.1zm6.6 5.5H3.3c-.606 0-1.1-.494-1.1-1.1v-6.6h15.4v6.6c0 .606-.494 1.1-1.1 1.1zM3.3 4.4h1.1v1.1c0 .605.495 1.1 1.1 1.1.605 0 1.1-.495 1.1-1.1V4.4h6.6v1.1c0 .605.495 1.1 1.1 1.1.605 0 1.1-.495 1.1-1.1V4.4h1.1c.606 0 1.1.494 1.1 1.1v4.4H2.2V5.5c0-.606.494-1.1 1.1-1.1zm13.2-2.2h-1.1V1.1c0-.605-.495-1.1-1.1-1.1-.605 0-1.1.495-1.1 1.1v1.1H6.6V1.1C6.6.495 6.105 0 5.5 0c-.605 0-1.1.495-1.1 1.1v1.1H3.3C1.48 2.2 0 3.68 0 5.5v13.2C0 20.52 1.48 22 3.3 22h13.2c1.82 0 3.3-1.48 3.3-3.3V5.5c0-1.82-1.48-3.3-3.3-3.3z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function MoreIcon(props: IconProps) {
  return (
    <Svg width={4} height={18} viewBox="0 0 4 18" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a2 2 0 10-.001-4.001A2 2 0 002 4zm0 3a2 2 0 10.001 4.001A2 2 0 002 7zm-2 9a2 2 0 114.001.001A2 2 0 010 16z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function FilterIcon(props: IconProps) {
  return (
    <Svg width={23} height={20} viewBox="0 0 23 20" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 10a1.1 1.1 0 112.2 0 1.1 1.1 0 01-2.2 0zm1.1 3.3c1.82 0 3.3-1.48 3.3-3.3 0-1.82-1.48-3.3-3.3-3.3a3.294 3.294 0 00-3.097 2.2H2a1.099 1.099 0 100 2.2h14.503a3.294 3.294 0 003.097 2.2zM5.3 3.4a1.1 1.1 0 112.2 0 1.1 1.1 0 01-2.2 0zm4.196 1.1H21.8a1.099 1.099 0 100-2.2H9.496A3.294 3.294 0 006.4.1a3.294 3.294 0 00-3.097 2.2H2a1.099 1.099 0 100 2.2h1.303A3.294 3.294 0 006.4 6.7a3.294 3.294 0 003.096-2.2zM9.7 16.6a1.1 1.1 0 112.2 0 1.1 1.1 0 01-2.2 0zm1.1 3.3a3.294 3.294 0 003.096-2.2H21.8a1.099 1.099 0 100-2.2h-7.904a3.294 3.294 0 00-3.096-2.2 3.294 3.294 0 00-3.097 2.2H2a1.099 1.099 0 100 2.2h5.703a3.294 3.294 0 003.097 2.2z"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

function SearchIcon(props: IconProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <StyledPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6m15.707 8.293l-3.395-3.396A7.952 7.952 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.952 7.952 0 004.897-1.688l3.396 3.395a.997.997 0 001.414 0 .999.999 0 000-1.414"
        fill={props.fill || "black"}
      />
    </Svg>
  );
}

export {
  PhoneIcon,
  VideoCallIcon,
  GoBackIcon,
  CalendarIcon,
  MoreIcon,
  GoForwardIcon,
  FilterIcon,
  SearchIcon,
};
