/* eslint-disable no-unused-vars */
import React from "react";
import { FaCocktail } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { IoBeerOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div id="section1">
      <div className="title">
        <h3>Services</h3>
        <div className="underline"></div>
      </div>
      <section className="in">
        <div className="cocktails">
          <FaCocktail className="icon" />
          <article className="article">
            <h5>cocktails</h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            dipisicing elit.
          </article>
        </div>
        <div className="endless hiking">
          <FaHiking className="icon" />
          <article className="article">
            <h5>endless hiking</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            placeat obcaecati tempore.
          </article>
        </div>
        <div className="free shuttle">
          <FaBus className="icon" />
          <article className="article">
            <h5>free shuttle</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            esse! Deserunt unde beatae laboriosam
          </article>
        </div>
        <div className="strongest beer">
          <IoBeerOutline className="icon" />
          <article className="article">
            <h5>strongest beer"</h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.iusto
            voluptates commodi sit aut magni.
          </article>
        </div>
      </section>
    </div>
  );
};

export default Service;
