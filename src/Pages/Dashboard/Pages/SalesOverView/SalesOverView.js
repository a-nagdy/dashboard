import React from "react";
import Card from "../../../../UI/Card/Card";

const SalesOverView = () => {
  const Data = [
    {
      id: "1",
      name: "Ahmed",
      Target: 250,
      percentage: "70%",
    },
  ];
  return (
    <Card>
      <h4>Sales Members Over View:-</h4>
      <div>
        <ul>
          {Data.map((data) => {
            return (
              <li key={data.id}>
                <div>
                  {data.name}
                  <span>{data.Target}</span>
                </div>
                <span>{data.percentage}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default SalesOverView;
