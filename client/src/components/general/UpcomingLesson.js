import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const UpcomingLesson = () => {
  const [upcomingLesson, setUpcomingLesson] = useState({ empty: true });

  useEffect(() => {
    getUpcomingLesson();
  }, []);

  const getUpcomingLesson = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const response = await fetch(
      "/accounts/getstudentupcoming?studentid=" + urlParams.get("studentid"),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();
    setUpcomingLesson(data);
  };

  if (upcomingLesson.error != null || upcomingLesson.empty) {
    return (
      <div>
        <Typography variant="h4">No upcoming lessons</Typography>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h4" align="left">
          {upcomingLesson.title}
        </Typography>
        <ul>
          {upcomingLesson.specPoints.map((point) => (
            <li key={point.contentID}>
              <Typography variant="body1" align="left">
                {point.content}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default UpcomingLesson;
