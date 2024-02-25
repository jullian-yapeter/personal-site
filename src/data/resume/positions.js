const positions = [
  {
    company: 'Signal 1',
    position: 'Machine Learning Scientist',
    link: 'https://signal1.ai/',
    daterange: 'July 2021 - Present',
    points: [
      'Developed and deployed ML solutions aimed at enhancing clinical decision-making in hospitals and improving patient outcomes.',
      'Implemented ML microservices, co-designed with Platform and Application teams, boosting model serving speed by >300x.',
      'Spearheaded an array of ML-related efforts; generalizable models, flexible ML research framework, model performance monitoring.',
      'Collaborated closely with clinicians to understand key healthcare challenges, framing complex requirements into ML problems.',
    ],
  },
  {
    company: 'Cognitive Learning for Vision and Robotics (CLVR) Lab',
    position: 'Graduate Research Assistant',
    link: 'https://clvrai.com/',
    daterange: 'November 2021 - April 2023',
    points: [
      'Created and released the CLVR Jaco Play Dataset of >1000 teleoperated robot episodes.',
      'Researched the use of Offline RL methods to augment seed trajectory datasets for improved downstream RL training.',
      'Implemented PPO with reward-induced representation pre-training, improving RL training efficiency on downstream tasks.',
      'Created an iOS app using Unity (C#), ARFoundation, and YOLOv5 to collect human action trajectories for RL research.',
    ],
  },
  {
    company: 'Walt Disney Imagineering (Disney Research)',
    position: 'R&D Lab Associate Intern (Machine Learning Infrastructure)',
    link: 'https://www.disneyresearch.com/',
    daterange: 'May 2022 - August 2022',
    points: [
      'Conceptualized, implemented and launched an in-house AI development environment capable of versioning and storing data and models, facilitating the labelling and querying of metadata, and enabling cross-project collaboration.',
      'Worked with project teams to integrate the new AI development environment into their workflows and iterated on its API, behavior, and implementation as needed.',
    ],
  },
  {
    company: 'Dragonfruit AI',
    position: 'Computer Vision and AI Software Engineer',
    link: 'https://www.dragonfruit.ai/',
    daterange: 'January 2021 - July 2021',
    points: [
      'Spearheaded the creation of a real-time security video AI processing hybrid (cloud & on-premise) service.',
      'Delivered low-bandwidth video object detection and object search, utilizing Go, Python, TensorFlow, AWS, Elasticsearch, and gRPC.',
      'Took product from proof-of-concept to launch within 6 months.',
    ],
  },
  {
    company: 'IBM',
    position: 'AI & IoT Developer Intern',
    link: 'https://www.ibm.com/ca-en',
    daterange: 'September 2020 - December 2020',
    points: [
      'Developed an image annotation web application to produce PascalVOC files, using React, Express, and MongoDB.',
      'Designed and built a ROS-based framework for prototyping path planning controllers on iRobot Roombas that includes a React web interface that is used to manually send goal coordinates to the robot.',
    ],
  },
  {
    company: 'Walt Disney Imagineering (Disney Research)',
    position: 'R&D Lab Associate Intern (Computer Vision and Perception)',
    link: 'https://www.disneyresearch.com/',
    daterange: 'May 2019 - August 2019',
    points: [
      "Created new functionality for Disney Research's proprietary computer vision and perception pipeline(in C++ and Python), to improve its ease of adoption and capacity to handle human - object interactions.",
      'Conceptualized and prototyped a novel time-series deep learning application to improve the performance of certain interactive installations that are currently under development at WDI R&D.',
      'Developed software to effectively operate DMX-driven devices and TouchDesigner media, which set a new coding paradigm for future Python-based motion-driven interactive projects.',
    ],
  },
  {
    company: 'IBM',
    position: 'AI & IoT Developer Intern',
    link: 'https://www.ibm.com/ca-en',
    daterange: 'September 2018 - December 2018',
    points: [
      'Developed a Dynamixel servo-based 4DoF robotic arm, capable of picking up self-trained targets as recognized via a hybridization of Faster R-CNN and KCF Trackers, as commanded via voice recognition, and utilizing inverse kinematics, on an NVIDIA Jetson TX2 Board.',
      'Built a system of IoT garbage bins to improve efficiency of municipal garbage collection, utilizing embedded hardware, Apache Spark and IBM Watson’s IoT and ML cloud platforms.',
      "Prototyped a language translator system on a network of Raspberry Pis, powered by IBM Watson's text and speech APIs.",
      "Presented projects at high profile events such as the launching of IBM Canada's Innovation Garage in Montréal.",
    ],
  },
  {
    company: 'Zero Gravity Labs (LoyaltyOne R&D)',
    position: 'Innovation Developer Intern',
    link: 'https://www.loyalty.com/',
    daterange: 'January 2014 - May 2014',
    points: [
      'Developed a serverless health-promoting mobile app that performs object recognition on grocery items and provides customers with personalized nutritional analytics, using OpenCV, AWS (Lambda, S3, DynamoDB), GCP services (Vision).',
      'Designed and implemented an in-store augmented reality scavenger hunt mobile game as a novel medium for customers to collect and redeem loyalty program points, with the use of Unity and ARCore.',
      'Implemented and performed benchmark testing on neural arithmetic logic units (NALU) and conditional generative adversarial networks (CGAN) to investigate their potential use in the customer loyalty industry, using PyTorch and TensorFlow.',
    ],
  },
  {
    company: 'General Motors (2908 Lab)',
    position: 'Innovation Specialist Co-op',
    link: 'https://www.gm.com/',
    daterange: 'September 2017 - December 2017',
    points: [
      'Product manager for advanced technology projects including E-Bikes & Towing Visibility, implementing lean development, sprint methodologies, and rapid prototyping.',
      'Prototyped both hardware and software future-forward in-vehicle features.',
      'Conducted field research and user testing to iterate on design concepts and establish product-market fit.',
      'Presented designs to engineering teams and senior management in the form of white papers and presentations.',
      'Developed and facilitated Design Thinking workshops to generate innovative solutions for GM teams in engineering, sales, marketing, human resources, and manufacturing.',
    ],
  },
  {
    company: 'A.U.G. Signals Ltd.',
    position: 'Image Processing Software Engineering Intern',
    link: 'https://augsignals.com/',
    daterange: 'January 2017 - April 2017',
    points: [
      'Implemented an image processing pipeline in Python and MATLAB to analyze satellite imagery (channel-realignment, spec- tral analysis, resolution standardization, and georeference-based transformations) for use in precision farming.',
      'Delivered a 300% improvement in processing time as compared to the legacy pipeline.',
    ],
  },
  {
    company: 'Taymer International Inc.',
    position: 'Machine Vision Co-op',
    link: 'https://www.taymer.com/',
    daterange: 'May 2016 – August 2016',
    points: [
      'Developed, and debugged, image processing algorithms using Visual C++ and OpenCV for determining print legibility of product labels, including its GUI and installer.',
      "Performed an array of electromechanical assembly for the production of custom computer vision systems designed to detect surface/diameter defects on a variety of products based on clients' specifications.",
      'Designed in-lab product testing environments and completed feasibility study reports for clients.',
    ],
  },
];

export default positions;
