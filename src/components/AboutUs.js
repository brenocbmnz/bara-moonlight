import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-us-section">
        <img src="https://fakeimg.pl/400x500" alt="Placeholder" className="about-us-image"/>
        <div>
          <h2>Belmorn</h2>
          <p>
          Phasellus vehicula tempor tortor, quis faucibus felis semper eu. Cras aliquet vitae risus non commodo. Donec a tempor dui. Curabitur porttitor est ut porta commodo. Donec at lobortis quam, quis volutpat libero. Phasellus a mi vitae nisi euismod venenatis pretium eu quam. Nulla facilisi. Nullam tempus, tellus quis vulputate mollis, eros diam lacinia metus, feugiat volutpat diam dolor in justo. Vestibulum quam massa, euismod sit amet bibendum ut, lobortis ut ex. Morbi vel bibendum metus. Maecenas tincidunt a erat nec sagittis. Vivamus purus ipsum, vestibulum a felis at, vulputate vehicula metus. Duis porta urna feugiat tincidunt facilisis. 
          </p>
        </div>
      </section>
      <section className="about-us-section reverse">
        <div>
          <h2>Rokayas</h2>
          <p>
          Maecenas pellentesque non quam eu condimentum. Aliquam dui velit, interdum ac augue eu, imperdiet elementum mauris. Nunc porta in ante sed hendrerit. Nam posuere rhoncus felis, eu porttitor eros vulputate eget. Suspendisse in sapien molestie, pharetra elit in, ullamcorper neque. Ut tempus elementum auctor. Praesent quis eros nisl. In et lobortis purus. Sed ultrices lacinia justo, a efficitur augue consectetur quis. Cras laoreet vulputate dapibus. Integer vel porttitor tortor. Pellentesque consequat metus eget lacus fermentum, in eleifend lectus tincidunt. 
          </p>
        </div>
        <img src="https://fakeimg.pl/400x500" alt="Placeholder" className="about-us-image"/>
      </section>
      <section className="additional-info">
        <div>
          <h2>Additional Information</h2>
          <p>
          Integer vitae ipsum nulla. Aliquam ac blandit elit. Proin erat turpis, bibendum sit amet ligula maximus, ullamcorper fringilla odio. Nam placerat sem at suscipit pretium. Sed viverra justo nec tristique eleifend. Morbi semper eleifend quam, sit amet efficitur tortor suscipit in. Vivamus ac nulla egestas, auctor nibh in, dictum massa. Nullam sollicitudin lobortis turpis sit amet posuere. Nulla vitae ornare lacus, et rutrum mauris. Nulla nisl velit, tempor eu lacinia non, blandit sed ex. Aliquam faucibus sed ipsum ac vulputate. Ut sed sollicitudin lorem, sit amet malesuada mi. Vivamus tempor ac neque non sodales. Aenean sed leo non dui accumsan faucibus nec accumsan ante. Sed consectetur mi mauris, quis vehicula felis eleifend nec. Aenean bibendum purus quis mauris vestibulum, a posuere magna blandit. 
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;