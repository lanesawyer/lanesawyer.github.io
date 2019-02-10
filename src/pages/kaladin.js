import React from 'react'
import { Link } from 'gatsby'

import prettyKal from '../images/prettyKal.jpg'
import skateboard from '../images/skateboard.jpg'
import solowheel from '../images/solowheel.jpg'
import rollerblade from "../images/rollerblade.jpg"

import Layout from '../components/layout'
import SEO from '../components/seo'

const Kaladin = () => (
  <Layout>
    <SEO title="Kaladin" />
    <h1>Kaladin "Stormblessed" Sawyer</h1>
    <img src={prettyKal} alt="Kaladin" />
    <p>
      Kaladin is very energetic and loves people and dogs. New people, dogs, and places send him into a tizzy of jumping, dashing, kissing, and snuggling. 
      He always wants to go meet new dogs, but unless the owner is clearly okay with an exciting playtime I tend to avoid the other dog so Kal 
      doesn't freak them out with his energy levels.
    </p>
    <p>If you're curious on what Kaladin is, check out his genetic profile here: <a href="https://my.embarkvet.com/dog/kaladin2">Kal's genetics</a></p>
    
    <h2>Caretaking Instructions</h2>

    <p>Kaladin has a lot of energy and gets very interested in new things. He loves walks and will apply almost constant pressure to keep moving forward, but a gentle tug on the leash is usually enough to get him to slow down for a little bit.</p>
    
    <h3>Food</h3>
      <ul>
        <li><strong>Meal Amount</strong> - About 2 cups a day, but he doesn't eat as much when he's away from home.</li>
        <li><strong>Meal Schedule</strong> - Kaladin is a grazer, so feel free to leave a bowl full of food and he'll eat it when he wants. If you have another dog, feel free to feed Kal with that dog's schedule, but Kal might miss a few meals until he understands he has to eat at a set time.</li>
        <li><strong>Water</strong> - He saves his water for when someone is around. If you leave him and notice he hasn't touched his water, that's why. He'll slurp it up once you're back.</li>
        <li><strong>Dentastix</strong> - Give him one of these long, x-shaped treats each day to promote better dental higine.</li>
        <li><strong>Rawhide</strong> - He gets one every other day or so. They are good for getting him to calm down and take a break if he's energetic.</li>
        <li><strong>Other snacks</strong> - Use to reward tricks or to show him some love!</li>
      </ul>

    <h3>Potty Breaks</h3>
    <p>He likes to go outside to pee every 4 to 6 hours, but he can hold it for longer if needed.</p>

    <h3>Tricks</h3>
    <p>The following list is the command for tricks he knows, along with gestures that help him do it more reliably. Feel free to treat him when he does one!</p>
    <ul>
      <li><strong>Sit</strong> - Point down to the ground</li>
      <li><strong>Stay</strong> - Put your hand up in a stop gesture</li>
      <li><strong>Shake</strong> - Hold out your hand</li>
      <li><strong>Fist Bump</strong> - Hold out your fist</li>
      <li><strong>High five</strong> - Hold your hand up around chest level</li>
    </ul>

    <h3>Walks</h3>
    <h4>Potential Problems on Walks</h4>
    <img src={skateboard} alt="Skateboard" />
    <img src={solowheel} alt="Solo wheel" />
    <img src={rollerblade} alt="Rollerblade" />
    <ul>
      <li>In new areas, he pulls quite a bit because he's so excited to see all the new things. A short tug will get him to calm down for a little bit, and I've been working on "by me" and also treating him any time he looks up at me.</li>
      <li>Kaladin will lunge after and pull hard to chase squirrels, geese, ducks, and any tiny animals who scurry away</li>
      <li>He is scared of/cautious of any sort of skateboard, Segway, scooter, or other non-bike transportation device. He didn't see many of them growing up so he is still adjusting to them. He's starting to get better, but he'll pull hard and start barking if they get close enough. It's been impossible for me to get his attention at that point so I've just had to wait it out until they are out of sight. Put a hand on his butt and ask him to sit with a little push and he'll calm down a little. It's best to pull him off the sidewalk if possible if they are passing nearby and get a good hold on him. I think he just wants to chase them and is confused at how they are moving so quickly. (Once he broke his harness and chased a scooter. The person stopped and Kal stopped next to them, just staring and waiting for them to move again.)</li>
      <li>If something grabs Kal's attention, he focuses intently on that thing. Only the biggest, best treats can pull his attention back, and even then it's not enough. He will respond to a gentle press on his rear to get him into a sitting position, and he'll typically stay there until the distraction is gone.</li>
    </ul>
    <h4>What I'm Working On With Him</h4>
    <ul>
      <li><strong>By Me</strong> - For whatever reason, the training program he went through a few years back used "by me" instead of heel. We haven't been consistent with it but I'm working on it with him again. At this point he'll stay next to you if you're holding a treat, but if anything more interesting comes up he will ignore it.</li>
      <li><strong>Sit (when skateboards/scooters/Segways are near)</strong>  - If I see the person on one of those coming, I'll have him preemptively sit, which helps him stay a little calmer when they go flying by.</li>
      <li><strong>Watch Me</strong> - If he ever looks up at me I try to treat him to encourage his focus on me. I'll also try saying "watch me" to get his attention. Sometimes doing that makes him look around for a skateboard, since I've tried "watch me" when they are coming in the past, so it's still very much a work in progress.</li>
    </ul>
    <Link to="/">Go back to the boring, default homepage</Link>
  </Layout>
)

export default Kaladin
