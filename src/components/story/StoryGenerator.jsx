import React, { useState } from 'react';

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const StoryGenerator = () => {
  const [storyElements, setStoryElements] = useState({
    setting: '',
    reason: '',
    location: '',
    character: '',
    plotTwist: '',
    conclusion: '',
    additionalDetails: '',
    story: '',
  });

  const generateStory = () => {
    const storyData = {
      settings: ['a magical forest', 'a futuristic city', 'a medieval kingdom', 'an underwater world', 'a post-apocalyptic wasteland'],
      reasons: ['to save a loved one', 'to find a hidden treasure', 'to defeat an evil villain', 'to uncover a long-lost secret', 'to bring peace to the land'],
      locations: ['a mysterious dungeon', 'a bustling town', 'a remote island', 'a haunted mansion', 'a treacherous mountain peak'],
      characters: ['a brave knight', 'a cunning rogue', 'a wise wizard', 'a fearless explorer', 'a determined scholar'],
      plotTwists: ['they discover they are being followed', 'they find out that their enemy is a friend in disguise', 'they realize they are the key to saving the world', 'they encounter a creature that can change shape at will', 'they uncover a betrayal within their ranks'],
      conclusions: ['they triumph against all odds', 'they suffer a tragic loss but gain wisdom', 'they return home as heroes', 'they find a new purpose and continue their journey', 'they realize the true treasure was the friends they made along the way'],
      details: ['armed with only their wits', 'with a loyal group of companions', 'guided by an ancient prophecy', 'facing numerous challenges and obstacles', 'discovering unexpected allies along the way'],
    };

    const newStoryElements = {
      setting: getRandomElement(storyData.settings),
      reason: getRandomElement(storyData.reasons),
      location: getRandomElement(storyData.locations),
      character: getRandomElement(storyData.characters),
      plotTwist: getRandomElement(storyData.plotTwists),
      conclusion: getRandomElement(storyData.conclusions),
      additionalDetails: getRandomElement(storyData.details),
    };

    newStoryElements.story = `In ${newStoryElements.setting}, ${newStoryElements.character} embarks on a quest ${newStoryElements.reason}. Their journey takes them to ${newStoryElements.location}, ${newStoryElements.additionalDetails}. Along the way, ${newStoryElements.plotTwist}. In the end, ${newStoryElements.conclusion}.`;

    setStoryElements(newStoryElements);
  };

  return (
    <div className="story-generator-container" style={{ 
      backgroundImage: 'url("https://litrpgreads.com/wp-content/uploads/2022/09/dnd-plot-hook-ideas-2048x1414.webp")',
      backgroundSize: 'cover',   
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '70vh', 
      color: 'white',  
    }}>
      <h2>Story Generator</h2>
      <button onClick={generateStory}>Generate Story</button>
      <h2>Synopsis:</h2>
      <div className="storyDiv">  
        <h1><strong>{storyElements.story}</strong></h1>
      </div>     
    </div>
  );
};

export default StoryGenerator;
