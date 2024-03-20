import React from 'react';

function Stories() {
  // Replace with your story data (text and image links)
  const stories = [
    {
      title: 'Story 1 Title',
      image: 'story1.jpg',
      description: 'A short description of story 1',
      link: '/story1',
    },
    {
      title: 'Story 2 Title',
      image: 'story2.jpg',
      description: 'A short description of story 2',
      link: '/story2',
    },
    // ... more stories
  ];

  return (
    <section className="stories">
      <h2>Stories</h2>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <article className="story-item" key={index}>
            <img src={story.image} alt={story.title} />
            <div className="story-content">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <a href={story.link}>Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stories;