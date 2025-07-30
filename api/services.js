export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const services = [
    {
      title: 'Personal Birth Chart',
      description: 'Discover your unique numerology blueprint, revealing your life path, strengths, and soul purpose.',
      benefits: [
        'Personalized analysis of your birth date and name',
        'Insights into your strengths and challenges',
        'Guidance for life decisions',
      ],
      link: '/services/personal-birth-chart',
    },
    {
      title: 'Driver & Conductor Relationship',
      description: 'Understand the interplay between your inner motivations (Driver) and life path (Conductor).',
      benefits: [
        'Relationship between inner self and destiny',
        'Clarity on life direction',
        'Personal growth insights',
      ],
      link: '/services/driver-conductor-relationship',
    },
    {
      title: 'Name Number Compatibility',
      description: 'See how your name\'s vibration aligns with your birth numbers for harmony, success, and personal branding.',
      benefits: [
        'Name and birth number analysis',
        'Compatibility insights',
        'Branding guidance',
      ],
      link: '/services/name-number-compatibility',
    },
    {
      title: 'Mobile Number Numerology',
      description: 'Reveal the hidden power of your mobile number and its influence on your daily life and opportunities.',
      benefits: [
        'Mobile number energy analysis',
        'Tips for luck and success',
        'Personalized recommendations',
      ],
      link: '/services/mobile-number-numerology',
    },
    {
      title: 'Signature Numerology',
      description: 'How your signature style and numbers can affect your public image and personal energy.',
      benefits: [
        'Signature analysis',
        'Public image insights',
        'Energy alignment tips',
      ],
      link: '/services/signature-numerology',
    },
    {
      title: 'Baby Name Number',
      description: 'Find the most auspicious name number for your baby to ensure a harmonious and successful life path.',
      benefits: [
        'Baby name analysis',
        'Auspicious number selection',
        'Guidance for a bright future',
      ],
      link: '/services/baby-name-number',
    },
  ];

  res.status(200).json(services);
} 