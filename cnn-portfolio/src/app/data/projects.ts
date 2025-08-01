import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'StoreFlow - People Counting',
    description: 'Sistema de conteo de personas usando YOLOv8 y DeepSORT.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/juan/storeflow',
    image: 'assets/storeflow.png'
  },
  {
    title: 'Custom CNN Classifier',
    description: 'CNN desde cero con PyTorch para clasificación de imágenes.',
    stack: ['PyTorch', 'CNN', 'Python'],
    github: 'https://github.com/juan/custom-cnn'
  }
];
