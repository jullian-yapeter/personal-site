// TODO Add a couple lines about each project
// DeXter
// H&M Fashion Recommendation
// Go-playing Agent: Minimax with Alpha-Beta Pruning
// Reward-Induced Representation Learning
// Hollywood2Vec
// NutritionAI
// AngelEye
const data = [
  {
    title: 'Journey of Water @ Walt Disney World',
    subtitle: 'Interactive water attraction inspired by Moana',
    link: 'https://disneyworld.disney.go.com/en_CA/attractions/epcot/journey-of-water/',
    image: '/images/projects/journey_of_water.avif',
    date: '2019-07-30',
    desc:
      'Conducted computer vision, deep learning, and controls R&D for this attraction. '
      + 'So happy to see it bringing joy to so many people!',
  },
  {
    title: 'CLVR Jaco Play Dataset',
    subtitle: 'Dataset of diverse robot trajectories from CLVR @ USC',
    link: 'https://github.com/clvrai/clvr_jaco_play_dataset',
    image: '/images/projects/jaco_play_teaser.jpeg',
    date: '2023-04-23',
    desc:
      'Diverse multimodal dataset of 1085 teleoperated robot episodes. '
      + 'Includes multi-view camera observations, cartesian position and velocity data, '
      + 'and natural language annotations. Tasks include picking and placing of '
      + 'various items (of various categories) and receptacles.',
  },
  {
    title: 'Improving Language Understanding via Privileged Multimodal Training',
    subtitle: 'Final Project for CSCI 535 (Multimodal and Probabilistic Learning for Human Communications)',
    link: 'https://github.com/jullian-yapeter/JudgeNet/blob/main/_CSCI535__23__PrivilegedMultimodalTraining_Final.pdf',
    image: '/images/projects/pmt.png',
    date: '2023-05-05',
    desc:
      'Novel method to improve the performance of downstream unimodal '
      + 'language understanding tasks by leveraging multimodal data during training; '
      + 'employing optimization towards the task-specific objective while regularized '
      + 'against a multimodal teacher network in latent space.',
  },
  {
    title: 'LCMVAE: Language-conditioned Masked Variational Autoencoder',
    subtitle: 'Final Project for CSCI 566 (Deep Learning Applications)',
    link: 'https://github.com/jullian-yapeter/lcmvae/blob/main/566_Final_Report.pdf',
    image: '/images/projects/lcmvae_architecture.png',
    date: '2022-05-07',
    desc:
      'A simple solution for multimodal representation learning, '
      + 'which takes advantage of modality-specific pre-trained encoders '
      + 'and a flexible, lightweight, latent-mixing network to effectively '
      + 'generate meaningful multimodal representations.',
  },
  {
    title: 'A deep learning approach to the screening of malaria infection: Automated and rapid cell counting, object detection and instance segmentation using Mask R-CNN',
    subtitle: 'Published in Computerized Medical Imaging and Graphics',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0895611120301403',
    image: '/images/projects/malaria_mask_rcnn.png',
    date: '2021-03-01',
    desc:
      'Application of a deep-learning model, Mask R-CNN, trained to identify '
      + 'healthy and Plasmodium-infected red blood cells. '
      + 'Capable of generating segmentation masks on top of bounding box classifications '
      + 'for immediate visualization and stage-specific identification. '
      + 'Potential to reduce errors common in manual counting through subsequent standardization.',
  },
  {
    title: 'Reward-Induced Representation Learning',
    subtitle: 'CLVR implementation challenge',
    link: 'https://drive.google.com/file/d/1ml9Bv1kwrOHu7ZyOcCSh8zUiPvmKdmJP/view?usp=sharing',
    image: '/images/projects/rewirl.png',
    date: '2021-10-11',
    desc:
      'Pre-trained predictive models on various tasks to facilitate RL '
      + 'training on a novel downstream task of the same distribution. '
      + 'The resulting reward-induced representation proved useful in both '
      + 'speeding up downstream PPO training, and improving final rollout performance.',
  },
  {
    title: 'Lilypod',
    subtitle: 'Undergraduate Mechatronics Capstone Project',
    link: 'https://devpost.com/software/lilypod',
    image: '/images/projects/lilypod.jpg',
    date: '2020-07-09',
    desc:
      'AI-powered water monitoring system. Measures parameters '
      + 'of its surrounding environment, collects samples of the '
      + 'pollutants, and performs data analytics in the cloud to '
      + 'produce valuable information.',
  },
  {
    title: 'NaviGAIT',
    subtitle: 'Vision for the blind, through positional sound',
    link: 'https://www.youtube.com/watch?v=u461GjQ7Z2Q',
    image: '/images/projects/navigait.png',
    date: '2019-04-24',
    desc:
      'Final project for 30.007 Engineering Design Innovation course at SUTD. '
      + 'An ultrasonic-based wearable for the blind, using 3D positional '
      + 'audio feedback to assist in obstacle avoidance, and IMU-based '
      + 'fall detection and notification functionality over Twilio API. '
      + 'Won Best Demonstration Award at public project exhibition; '
      + 'awarded by industry guests.',
  },
  {
    title: 'Automatic Watermark Removal',
    subtitle: 'Final Project for CS 484 (Computational Vision)',
    link: 'https://colab.research.google.com/drive/1-hkFWtocytYekYemIyUdMASr-2SIRuJ_?usp=sharing',
    image: '/images/projects/watermark_remover.png',
    date: '2019-12-19',
    desc:
      'Given a set of images with the same watermark, our method '
      + 'segments watermark boundaries (employing graph cut) and subsequently '
      + "estimates the watermark's "
      + 'parameters (color + alpha-blending constant). It then removes '
      + 'the watermark using an inverse watermarking transform. ',
  },
  {
    title: 'Portrait AutoColorizer',
    subtitle: 'Final Project for SYDE 522 (Machine Intelligence)',
    link: 'https://drive.google.com/file/d/1Af5hkV5s5VR1SrdMEP1oeAzz4qoAa7o9/view?usp=sharing',
    image: '/images/projects/autocolorizer.png',
    date: '2020-04-27',
    desc:
      "This one started because I wanted to colorize my grandparents' old portraits. "
      + 'Our AutoColorizer fine-tunes a VGG16 network pretrained on ImageNet. '
      + 'It is then trained on a dataset of 200,000 celebrity portraits. We formulate the colorization '
      + 'process as the prediction of the AB channels given the L channel of an image in the LAB color space.',
  },
];

export default data;
