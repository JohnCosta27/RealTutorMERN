import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const Lesson = () => {
  const [lesson, setLesson] = useState({});

  useEffect(() => {
    getLessons();
  }, []);

  const getLessons = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const response = await fetch(
      "/accounts/getstudentlatestlesson?studentid=" +
        urlParams.get("studentid"),
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
    setLesson(data);
  };

  if (lesson.error != null) {
    return <div></div>;
  } else {
    return (
      <div>
        <Typography variant="h4" align="left">
          Latest lesson:
        </Typography>
        <Typography variant="body1" align="left">
          {lesson.plan}
        </Typography>
      </div>
    );
  }
};

export default Lesson;
