import React, { useEffect, useState } from "react";
import { Virtue, VirtueAPI } from "../../../apis/VirtueAPI";
import VirtueListing from "./VirtueListing";


const VirtuesPage = () => {
  const [virtues, setVirtues] = useState<Virtue[]>([]);

  useEffect(() => {
    VirtueAPI.getAll().then((virtues: Virtue[]) => setVirtues(virtues));
  }, []);

  return (
    <div className="virtue-list">
      {virtues.map((virtue: Virtue) => (
        <VirtueListing key={virtue.id} virtue={virtue} />
      ))}
    </div>
  );
};

export default VirtuesPage;
