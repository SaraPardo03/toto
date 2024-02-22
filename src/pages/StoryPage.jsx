import { useState } from "react";
import { useParams } from "react-router-dom";
import StoryMainNav from "../components/StoryMainNav.jsx";
import StoryFooterMainNav from "../components/StoryFooterMainNav.jsx";
import Story from "../components/Story.jsx";
import StoryMap from "../components/StoryMap.jsx";

export function StoryPage() {
  return<>
    <StoryMainNav /> 
    <div className="row g-0 body-container">
      <Story/>
      <StoryMap/>
    </div>
    <StoryFooterMainNav/>  
  </>;
}