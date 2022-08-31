import * as React from 'react';

import { Divider, Typography, Box, Grid, Accordion } from '@mui/material';

import ResearchItem from './researchItem';


export default function ResearchList() {
  return (
    <Box>
      <ResearchItem/>
      <ResearchItem/>
      <ResearchItem/>
    </Box>
  );
}

const researchItems = [
  {
    'title': 'Computational Humor',
    'year': '2018',
    'link': '',
    'desc': 'The goal of the project is to be able to detect (and be able to explain) when a component of a text contains humor, when an utterance contains humor potential that can be highlighted with a computer-generated punchline, and to understand humor preferences of a particular individual based on his/her interaction with a computational system, and respond appropriately to a user.',
    'details': [
      {
        'title': 'Output: Joke Engine',
        'desc': 'An internal research tool used for data collection and labeling.',
        'link': '',
      },
      {
        'title': 'Role: Full-Stack Engineer',
        'desc': 'The tool was built in a frontend-backend structure. The backend APIs were created with PHP and Oracle SQL. The GUI was designed by Yifei and implemented using HTML, CSS and Javascript.',
        'link': '',
      },
    ]

  },

  {
    'title': 'Chat Analysis Triage Tool',
    'year': '2019',
    'link': 'https://ojjdp.ojp.gov/funding/awards/15pjdp-21-gk-03269-mecp',
    'desc': 'The overall goal of this proposal is to assist law enforcement investigating online enticement and live-stream child sexual abuse cases. This will be achieved by augmenting and enhancing the language-based and biometric capabilities of the Chat Analysis Triage Tool (CATT) for real-time data.',
    'details': [
      {
        'title': 'Output: The CATT Application',
        'desc': 'An application using cutting-edge Natural Language Processing technology to identify and classify risky online conversations between minors and online sexual predators.',
        'link': '',
      },
      {
        'title': 'Role: Researcher, Full-Stack Engineer',
        'desc': 'The application was built in a frontend-backend structure. The GUI was designed by Yifei and implemented using HTML, CSS and Javascript, and packaged using Electron. The backend APIs and Deep Learning models were developed, trained and implemented by Yifei using Python.',
        'link': '',
      },
    ]

  },
]
