import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "tailwindcss/colors";

type IconProps = React.ComponentProps<typeof Svg> & {
  color?: string;
  size?: number;
};
function PhoneIcon(props: IconProps) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06 2.2A2.863 2.863 0 002.2 5.06c0 8.127 6.612 14.74 14.74 14.74a2.863 2.863 0 002.837-3.22l-5.082-1.167-.314.6c-.501.957-.864 1.652-1.79 1.279-3.637-1.276-6.606-4.246-7.898-7.927-.393-.863.355-1.255 1.303-1.75l.59-.309-1.165-5.083A2.864 2.864 0 005.06 2.2zM16.94 22C7.599 22 0 14.401 0 5.06A5.065 5.065 0 016.7.273c.358.124.627.424.712.794l1.506 6.56c.083.361-.021.74-.279 1.008-.15.156-.152.16-1.516.873 1.104 2.392 3.023 4.305 5.366 5.372.715-1.365.72-1.37.876-1.52a1.11 1.11 0 011.008-.278l6.561 1.506c.369.085.669.353.792.71A5.008 5.008 0 0122 16.94c0 2.792-2.27 5.061-5.06 5.061z"
        fill={colors.black}
      />
    </Svg>
  );
}

function VideoCallIcon(props: IconProps) {
  return (
    <Svg width={22} height={16} viewBox="0 0 22 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8 10.56L16.71 7.7l3.09-2.859v5.719zm-5.5 1.54a1.1 1.1 0 01-1.1 1.1H3.3a1.1 1.1 0 01-1.1-1.1V3.3c0-.606.493-1.1 1.1-1.1h9.9c.607 0 1.1.494 1.1 1.1v8.8zm6.613-9.74a1.888 1.888 0 00-2.036.337l-2.377 2.2V3.3c0-1.82-1.48-3.3-3.3-3.3H3.3C1.48 0 0 1.48 0 3.3v8.8c0 1.82 1.48 3.3 3.3 3.3h9.9c1.82 0 3.3-1.48 3.3-3.3v-1.596l2.377 2.199c.352.327.809.497 1.274.497.257 0 .516-.052.762-.16A1.769 1.769 0 0022 11.409V3.993c0-.714-.417-1.34-1.087-1.632z"
        fill={colors.black}
      />
    </Svg>
  );
}

function GoBackIcon(props: IconProps) {
  return (
    <Svg width={16} height={14} viewBox="0 0 16 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6H3.135l3.633-4.36A1 1 0 105.232.36l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 00-.072.358L0 7l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 101.536-1.28L3.135 8H15a1 1 0 000-2z"
        fill={colors.black}
      />
    </Svg>
  );
}

export { PhoneIcon, VideoCallIcon, GoBackIcon };
