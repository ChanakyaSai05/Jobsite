import React from "react";
import { useParams } from "react-router-dom";

function CoursesPage() {
  const { id } = useParams();
  console.log(id);
  return <div>courses page</div>;
}

export default CoursesPage;
