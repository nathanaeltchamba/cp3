// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About CP3 Plumbing' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/contact', key: 'contact_us', label: 'Contact Us' },
];

// PLUMBING FEATURES SECTION
export const PLUMBING_FEATURES = [
  {
    title: 'Leak Detection & Repair',
    icon: '/map.svg',  
    variant: 'green',
    description:
      'Our team specializes in locating and repairing leaks quickly and efficiently to prevent further damage to your property.',
  },
  {
    title: 'Water Heater Installation',
    icon: '/calendar.svg',  
    variant: 'green',
    description:
      'We offer professional water heater installation services, ensuring your system is running efficiently and safely.',
  },
  {
    title: 'Drain Cleaning & Unclogging',
    icon: '/tech.svg',  
    variant: 'green',
    description:
      'From clogged sinks to backed-up drains, our expert plumbers will clear the blockage and get your plumbing flowing smoothly again.',
  },
  {
    title: 'Bathroom & Kitchen Renovations',
    icon: '/location.svg',  
    variant: 'orange',
    description:
      'Whether it’s a small update or a full renovation, we provide top-notch plumbing services for your kitchen or bathroom remodel.',
  },
];


// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      { label: 'About CP3', href: '/about' },
      { label: 'Our Work', href: '/services' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Our Commitment',
    links: [
      { label: 'Sustainable Plumbing Practices', href: '/services' },
      { label: 'Supporting Local Communities', href: '/about' },
      { label: 'Licensed and Experienced Plumbers', href: '/services' },
    ],
  },
];

// FOOTER CONTACT INFO
export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { icon: '/phone-icon.svg', value: '303-330-2514' },
    { icon: '/mail.svg', value: 'admin@cp3plumbing.com' },
    { icon: '/location-footer.svg', value: 'PO Box 390082 Denver CO 80239' },
  ],
};

