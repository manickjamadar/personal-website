import React from "react";
interface Props {
  horizontal?: number;
  vertical?: number;
}
const Spacer: React.FC<Props> = ({ horizontal = 0, vertical = 0 }) => {
  return <div style={{ width: horizontal, height: vertical }}></div>;
};

export default Spacer;
