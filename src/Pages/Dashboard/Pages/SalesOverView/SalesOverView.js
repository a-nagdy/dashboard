import React, { useEffect, useMemo, useState } from "react";
import Card from "../../../../UI/Card/Card";

const SalesOverView = (props) => {
  const [progress, setProgress] = useState([]);

  const progressBarStyles = {
    borderRadius: "10px",
    position: "relative",
    display: "block",
    backgroundColor: "rgb(108,179,108)",
    width: "100%",
    height: "100%",
    padding: "2px",
    textAlign: "center",
  };

  const Data = useMemo(
    () => [
      {
        id: "1",
        name: "Ahmed",
        Target: 250,
        percentage: "100%",
      },
      {
        id: "2",
        name: "mohamed",
        Target: 250,
        percentage: "70%",
      },
      {
        id: "3",
        name: "saleh",
        Target: 250,
        percentage: "80%",
      },
      {
        id: "4",
        name: "kerols",
        Target: 250,
        percentage: "10%",
      },
      {
        id: "5",
        name: "haytham",
        Target: 250,
        percentage: "50%",
      },
      {
        id: "6",
        name: "test",
        Target: 250,
        percentage: "40%",
      },
      {
        id: "7",
        name: "john",
        Target: 250,
        percentage: "30%",
      },
      {
        id: "8",
        name: "tester",
        Target: 250,
        percentage: "20%",
      },
      {
        id: "9",
        name: "mohamed",
        Target: 250,
        percentage: "10%",
      },
    ],
    []
  );

  useEffect(() => {
    // Calculate the progress for each item
    const progressData = Data.map((data) => {
      const salesAchieved = (parseFloat(data.percentage) / 100) * data.Target;
      const salesPercentage = Math.round((salesAchieved / data.Target) * 100);
      return {
        id: data.id,
        salesPercentage: salesPercentage,
      };
    });

    // Update the progress state variable
    setProgress(progressData);
  }, [Data]);

  return (
    <Card className={props.className}>
      <h4>Sales Members Over View :-</h4>
      <ul>
        {Data.map((data, index) => {
          const itemProgress = progress[index];
          const itemProgressBarStyles = {
            ...progressBarStyles,
            width: `${itemProgress ? itemProgress.salesPercentage : 0}%`,
          };
          return (
            <li key={data.id}>
              <div>
                <h5>{data.name}</h5>
                <div>
                  <p>{data.Target}</p>
                </div>
              </div>
              <span style={itemProgressBarStyles}>{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default SalesOverView;
