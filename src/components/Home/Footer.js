import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-3 mt-md-0 mt-1">
              <h5 class="text-uppercase">Job Site</h5>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">POPULAR TESTS</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/">Business Development Test</Link>
                </li>
                <li>
                  <Link to="/">Business Analytics Test </Link>
                </li>
                <li>
                  <Link to="/">Frontend Development Test</Link>
                </li>
                <li>
                  <Link to="/">Backend Development Test</Link>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">POPULAR COURSES</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/">Business Development Course</Link>
                </li>
                <li>
                  <Link to="/">Business Analytics Course</Link>
                </li>
                <li>
                  <Link to="/">Frontend Development Course</Link>
                </li>
                <li>
                  <Link to="/">Backend Development Course</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">EXPLORE</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/">Hire via Job site</Link>
                </li>
                <li>
                  <Link to="/">Companies</Link>
                </li>
                <li>
                  <Link to="/">Become a Proctor</Link>
                </li>
                <li>
                  <Link to="/">Become an Evaluator</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
