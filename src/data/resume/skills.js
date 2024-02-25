// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Machine Learning', 'Computer Vision'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Robotics', 'Computer Vision'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages', 'Robotics'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages', 'Augmented Reality'],
  },
  {
    title: 'Go',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages', 'Robotics', 'Computer Vision'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'CSS',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Machine Learning', 'Computer Vision'],
  },
  {
    title: 'TensorFlow + Keras',
    competency: 4,
    category: ['Machine Learning', 'Computer Vision'],
  },
  {
    title: 'OpenCV',
    competency: 5,
    category: ['Computer Vision', 'Robotics'],
  },
  {
    title: 'NumPy',
    competency: 5,
    category: ['Machine Learning', 'Computer Vision'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Machine Learning'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'gRPC',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'DVC',
    competency: 5,
    category: ['Tools', 'Machine Learning'],
  },
  {
    title: 'W&B',
    competency: 4,
    category: ['Tools', 'Machine Learning'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'ROS',
    competency: 4,
    category: ['Tools', 'Robotics'],
  },
  {
    title: 'Raspberry Pi',
    competency: 5,
    category: ['Robotics'],
  },
  {
    title: 'Arduino',
    competency: 5,
    category: ['Robotics'],
  },
  {
    title: 'NVIDIA Jetson',
    competency: 4,
    category: ['Robotics'],
  },
  {
    title: 'Unity',
    competency: 4,
    category: ['Tools', 'Augmented Reality'],
  },
  {
    title: 'Solidworks',
    competency: 4,
    category: ['Tools', 'Robotics'],
  },
  {
    title: 'Hugging Face',
    competency: 3,
    category: ['Tools', 'Machine Learning'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
