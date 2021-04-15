import {
  faFistRaised,
  faHandHoldingHeart,
  faPrayingHands,
} from '@fortawesome/free-solid-svg-icons';
import { ColumnDescProps } from './ColumnDescription';

const aboutColumns: Array<ColumnDescProps> = [
  {
    icon: faFistRaised,
    title: 'Courage',
    description: 'We set trends by experimenting with revolutionary ideas.',
  },
  {
    icon: faHandHoldingHeart,
    title: 'Compassion',
    description:
      "Embracing people during their darkest times fosters trust and honesty. We're transparent" +
      ' to all our employees.',
  },
  {
    icon: faPrayingHands,
    title: 'Humility',
    description: 'We have an open-minded environment and know when to take feedback.',
  },
];

export default aboutColumns;
