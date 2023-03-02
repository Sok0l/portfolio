import React from "react";
import Header from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>HTML CSS JavaScript TypeScript React Redux MobX Git</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS Express</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
