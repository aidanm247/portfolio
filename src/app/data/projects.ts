export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  tags: string[];
  externalUrl?: string; // Optional external URL for projects
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wearable Technology for Biomechanical Feedback in Basketball Shooting",
    description: "During the summer of 2024, I was selected to participate in the Gettysburg College Innovation and Creativity Lab's Digital Technology Summer Fellowship, where I pitched an idea for a basketball shooting feedback shirt and worked on developing it. I had eight weeks with the school's funding to develop and present my prototype to the College's board of directors, who agreed to fund my project. My wearable prototype integrates sensors into the fabric to provide real-time feedback on shooting form, biomechanics, and technique.",
    image: "/images/formshoot.gif",
    year: "Summer 2024",
    tags: ["Wearables", "Biomechanics", "Sports Performance", "IoT", "Data Analysis"],
    externalUrl: "https://docs.google.com/document/d/1Mes5UjXAVdcX_FJkjoIadtf3mtbdFIes/edit?usp=sharing&ouid=117800781232636956552&rtpof=true&sd=true"

  },
  {
    id: 2,
    title: "Exploring the relationship between Oura Ring metrics and chronic tendinopathy pain levels and on-court athletic performance in a college basketball player",
    description: "This case study(of me) aims to provide insights into how wearable technology can be utilized for injury prevention and performance optimization in sports. I am interested in the neurological aspect of chronic pain, particularly tendinopathy pain, where imaging shows no damage..",
    image: "/images/sleep.jpg",
    year: "Ongoing",
    tags: ["Wearables", "Physiology", "Data Analysis"],
    externalUrl: "https://ourasleepananalytics.streamlit.app/"
  },
  // {
  //   id: 3,
  //   title: "Lightboard for Concussion Baselines and Return to Play Assessments",
  //   description: "I noticed that the way our athletic training room was collecting data for concussion baselines with our 700+ athletes seemed flawed and could use some more improvement. There is research supporting the use of reaction time testing for concussion assessment. The problem is that these devices cost more money than any normal AT room could afford. So working with my our athletic trainers, I created a hardware solution for rapid concussion assessment using arcade pressure based sensors and machine learning algorithms. Designed for use in athletic training rooms and rehabilitation facilities. I built this in the Gettysburg College Innovation and Creativity Lab for ~100$, much cheaper than existing solutions.",
  //   image: "/images/concussion-board.jpg",
  //   year: "Oct 2025",
  //   tags: ["Hardware", "Machine Learning", "Medical Device", "Sensors", "Physical Therapy", "Rehabilitation"]
  // },
  { 
    id: 4,
    title: "Camera-Based PPG Signal Analysis Pipeline",
    description: "At Quellios, I worked with engineers to develop an end-to-end physiological sensing system using the iPhone camera as a reflectance PPG sensor. This involved writing proprietary signal processing algorithms to extract cardiovascular metrics from fingertip video, then building an internal R&D dashboard for the team to visualize data, test algorithm variants, and accelerate iteration cycles. The challenge was balancing signal quality with user experience. Converting noisy optical data into meaningful insights while keeping the interface intuitive for non-technical stakeholders and potential investors.",
    image: "/images/fingerppg.jpg",
    year: "Spring-Summer 2025",
    tags: ["Signal Processing", "Health Tech", "Data Analysis", "iOS Development", "R&D"]
  },
  // {
  //   id: 5,
  //   title: "iOS app meal recogition and tracking, and UI design",
  //   description: "Building out the AI meal recognition using the OpenAI API, and then designing the UI in Figma and implementing my design which was adopted in the startup's first launch.",
  //   image: "/images/figma_design3.jpg",
  //   year: "Spring 2025",
  //   tags: ["AI", "Health Tech", "iOS development"]
  // },
  {
    id: 5,
    title: "Research - Effectiveness of AI based Nutrition Assistance",
    description: "Testing the feasibility of using computer vision to detects ingredients and inflammation(using the Dietary Inflammation Index).",
    image: "/images/aifoods.jpg",
    year: "Summer 2025", 
    tags: ["AI", "Nutrition Science", "Computer Vision", "Research"]
  },
  {
    id: 6,
    title: "Computer Graphics Portfolio",
    description: "I built a C++ ray tracer in six stages, beginning with Phong-illuminated spheres and shadows, then extending it to include reflections, textures, bump mapping, mesh rendering, and advanced lighting. I concluded by adding planes and animation to create more complex visual environments. I then reproduced and extended these scenes in OpenGL, where I implemented a custom software-managed graphics pipeline and designed a hierarchical carousel using composable scene-graph transformations. To further deepen my understanding of GPU programming, I developed a GLSL special-effects framework and implemented mesh-smoothing algorithms using Shader Storage Buffer Objects (SSBOs) in the vertex shader.",
    image: "/images/raytracer.png",
    year: "Winter 2024/25",
    tags: ["C++", "OpenGL", "Linear Algebra"],
    externalUrl: "https://www.cs.gettysburg.edu/~messai01/cs373/"
  },
  {
    id: 7,
    title: "Building MatchDB: A career matchmaking database for college athletes",
    description: "I built out MatchDB - a career development service for the Gettysburg Men's Basketball Team that matches my teammates with around ~100 Gettysburg Basketball Alumni that agreed to help, based on shared career interests.",
    image: "/images/matchdbthumbnail.jpg",
    year: "Summer 2024 - Summer 2025",
    tags: ["AI", "Health Tech", "iOS development"],
    externalUrl: "https://youtu.be/Zisv9xzG3WE"
  },
  {
    id: 9,
    title: "Card Game AI and Game Balancing for St. Petersburg",
    description: "I built out an AI player for the niche card game St. Petersburg. This player uses Monte Carlo Tree Search Algorithm with Chance Sampling, code adapted from Google Deepmind. We also used a random forest evaluator for analyzing game states. My player competed in a class tournament and placed 1st out of ~20 participants.",
    image: "/images/mcts.png",
    year: "Fall 2025",
    tags: ["AI", "Machine Learning", "Java"]
  }
]; 
 