
import { Location, RepairService } from './types';

export const LOCATIONS: Location[] = [
  {
    id: 'ssl',
    name: 'Salt Lake',
    address: '2607 S State St D, South Salt Lake, UT 84115',
    mapUrl: 'https://www.google.com/maps/place/Nicell/@40.7139641,-111.8905851,16z/data=!3m1!4b1!4m6!3m5!1s0x87528bc721bcec17:0xe36d431c312e32b0!8m2!3d40.7139641!4d-111.8880102!16s%2Fg%2F11tspks7wl?authuser=0&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D',
    phone: '(801) 613-0024',
    hours: '10:00 AM - 8:00 PM'
  },
  {
    id: 'wvc',
    name: 'Swap Meet - West Valley',
    address: '1500 W 3500 S Booth Space #: K-8, West Valley City, UT 84119',
    mapUrl: 'https://www.google.com/maps/place/Nicell/@40.6978916,-111.9374561,16z/data=!3m1!4b1!4m6!3m5!1s0x87528b4f170e17e9:0xa0ed4095988ef7d6!8m2!3d40.6978916!4d-111.9348812!16s%2Fg%2F11kqr8hzf1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D',
    phone: '(801) 613-0024',
    hours: '10:00 AM - 8:00 PM'
  },
  {
    id: 'orem',
    name: 'Orem',
    address: '244 E University Pkwy, Orem, UT 84058',
    mapUrl: 'https://www.google.com/maps/place/Nicell/@40.2726338,-111.6914885,16z/data=!3m1!4b1!4m6!3m5!1s0x874d9b5c926bfdf1:0xa02d37e84e931467!8m2!3d40.2726338!4d-111.6889136!16s%2Fg%2F11zk53n7pz?authuser=0&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D',
    phone: '(801) 613-0024',
    hours: '10:00 AM - 8:00 PM'
  }
];

export const SERVICES: RepairService[] = [
  {
    id: 'screen',
    title: 'Screen Repair',
    description: 'Professional screen replacement for iPhones, Samsungs, and more.',
    icon: 'smartphone'
  },
  {
    id: 'battery',
    title: 'Battery Service',
    description: 'Restore your device\'s battery life with our high-capacity replacements.',
    icon: 'battery'
  },
  {
    id: 'charging',
    title: 'Charging Port',
    description: 'Fast fixes for loose connections or charging issues.',
    icon: 'zap'
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    description: 'Expert diagnostics to identify any device issue.',
    icon: 'shield'
  }
];
