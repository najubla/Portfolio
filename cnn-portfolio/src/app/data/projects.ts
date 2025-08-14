import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Digit Recognizer',
    description: 'CNN to classify handwritten digits using the MNIST dataset.',
    stack: ['Python', 'NumPy', 'Pandas'],
    github: 'https://github.com/juanramirezblanco/digit-recognizer',
    kaggle: 'https://www.kaggle.com/competitions/digit-recognizer',
    demo: 'https://digit-app.streamlit.app/',
  },
];
