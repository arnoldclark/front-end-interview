import React, { useEffect, useState } from "react";
import { ApplicationLayout } from "../../components/ApplicationLayout";
import { BranchesGrid } from "./BranchList.styled";

export const BranchList = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/branches")
      .then((res) => res.json())
      .then((branchData) => setBranches(branchData));
  }, []);

  return (
    <ApplicationLayout>
      <BranchesGrid>
        {branches.map((branch) => (
          <div className="ch-card" key={branch._id}>
            <div className="ch-card__content">
              <h3>{branch.name}</h3>
              <p>Tel: {branch.telephone}</p>
            </div>
          </div>
        ))}
      </BranchesGrid>
    </ApplicationLayout>
  );
};
