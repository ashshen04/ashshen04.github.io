import { Hotspot, NavItem } from './types';

// Using a high-quality floral image from picsum as a placeholder for the garden map
// Ideally this would be a custom illustration
export const HERO_IMAGE_URL = 'https://picsum.photos/id/360/1920/1080'; 

export const FLOWER_HOTSPOTS: Hotspot[] = [
  {
    id: '1',
    x: 20,
    y: 40,
    label: 'The Roots',
    description: 'Where it all began: Fundamentals of CS and Design.',
  },
  {
    id: '2',
    x: 50,
    y: 30,
    label: 'The Bloom',
    description: 'Current explorations in React and Generative AI.',
  },
  {
    id: '3',
    x: 75,
    y: 55,
    label: 'Pollination',
    description: 'Connecting communities through open source.',
  },
  {
    id: '4',
    x: 35,
    y: 70,
    label: 'Growth',
    description: 'Continuous learning and adapting to new tech.',
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
];
