import React from "react";
import { courses } from "./Data";
import "./Courses.css";
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="course-container">
      <div className="course-data">
        {courses.map((item) => (
          <CardGroup>
            <Card>
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Starting from {item.start}
                </CardSubtitle>
                <CardText>
                  <b>{item.numberOfJobs}</b> Jobs available
                </CardText>
                <CardText>
                  <b>{item.maxSalary}</b> Max salary
                </CardText>
              </CardBody>
              <CardFooter>
                <Link to={item.id}>
                  {" "}
                  <Button color="primary">Go to Course</Button>{" "}
                </Link>
              </CardFooter>
            </Card>
          </CardGroup>
        ))}
      </div>
    </div>
  );
}

export default Courses;
