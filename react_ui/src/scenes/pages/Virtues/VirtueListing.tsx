import React from "react";
import { Virtue } from "../../../apis/VirtueAPI";

declare type Props = {
  virtue: Virtue;
};

const VirtueListing = ({ virtue }: Props) => {

  return (
    <div id={virtue.id}>
      <h1>{virtue.name}</h1>
      <div>{virtue.description}</div>
    </div>
  );
};

export default VirtueListing;
