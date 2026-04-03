export interface AppData {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  type: 'MOD' | 'Web App' | 'Premium';
  website: string;
  category: string;
  tags: string[];
  screenshots: string[];
}

export const appsData: AppData[] = [
  {
    id: '1',
    name: 'Rojgarwithrankit MOD',
    description: 'Premium unlocked features for Rojgarwithrankit study platform.',
    longDescription: 'Get full access to Rojgarwithrankit premium courses and materials. This MOD version allows you to study without any restrictions, providing all the tools you need to excel in your exams. Download the Rojgarwithrankit mode APK now from VIPstudy.site.',
    icon: 'https://picsum.photos/seed/study1/200/200',
    type: 'MOD',
    website: 'https://VIPstudy.site',
    category: 'Education',
    tags: ['Rojgarwithrankit', 'Study', 'MOD', 'APK'],
    screenshots: [
      'https://picsum.photos/seed/shot1/800/600',
      'https://picsum.photos/seed/shot2/800/600'
    ]
  },
  {
    id: '2',
    name: 'Careerwill Premium MOD',
    description: 'Unlock all Careerwill courses and live classes for free.',
    longDescription: 'Careerwill mode APK is the ultimate solution for students looking for premium education. Access all live classes, recorded sessions, and PDF notes without a subscription. Experience the best of VIP study with Careerwill MOD.',
    icon: 'https://picsum.photos/seed/study2/200/200',
    type: 'MOD',
    website: 'https://VIPstudy.site',
    category: 'Education',
    tags: ['Careerwill', 'Premium', 'MOD', 'Education'],
    screenshots: [
      'https://picsum.photos/seed/shot3/800/600',
      'https://picsum.photos/seed/shot4/800/600'
    ]
  },
  {
    id: '3',
    name: 'Khan Academy Plus',
    description: 'Enhanced learning experience for Khan Academy users.',
    longDescription: 'Khan Academy mode APK offers an ad-free and enhanced learning experience. Access all subjects from math to science with additional VIP study tools. Perfect for students worldwide looking for premium apps.',
    icon: 'https://picsum.photos/seed/study3/200/200',
    type: 'MOD',
    website: 'https://VIPstudy.site',
    category: 'Education',
    tags: ['Khan Academy', 'Learning', 'Premium', 'Web App'],
    screenshots: [
      'https://picsum.photos/seed/shot5/800/600'
    ]
  },
  {
    id: '4',
    name: 'Study IQ Elite MOD',
    description: 'Premium access to Study IQ UPSC and government exam prep.',
    longDescription: 'Study IQ mode APK provides elite access to all UPSC and government exam preparation materials. Get the best study resources at VIPstudy.site. This premium app is designed for serious aspirants.',
    icon: 'https://picsum.photos/seed/study4/200/200',
    type: 'MOD',
    website: 'https://VIPstudy.site',
    category: 'Education',
    tags: ['Study IQ', 'UPSC', 'MOD', 'Premium'],
    screenshots: [
      'https://picsum.photos/seed/shot6/800/600'
    ]
  },
  {
    id: '5',
    name: 'Parmar Academy MOD',
    description: 'Full access to Parmar Academy premium courses.',
    longDescription: 'Download Parmar Academy mode APK for unrestricted access to all courses and test series. The best VIP study resource for Parmar Academy fans, available exclusively at VIPstudy.site.',
    icon: 'https://picsum.photos/seed/study5/200/200',
    type: 'MOD',
    website: 'https://VIPstudy.site',
    category: 'Education',
    tags: ['Parmar Academy', 'Education', 'MOD', 'APK'],
    screenshots: [
      'https://picsum.photos/seed/shot7/800/600'
    ]
  },
  {
    id: '6',
    name: 'RG vikramjeet',
    description: 'Advanced reasoning and math tools by RG Vikramjeet.',
    longDescription: 'RG Vikramjeet mode APK is now available. Get all the premium reasoning and math courses unlocked. Elevate your VIP study experience with these premium apps.',
    icon: 'https://picsum.photos/seed/study6/200/200',
    type: 'MOD',
    website: 'https://vipvikramjeet.netlify.app',
    category: 'Education',
    tags: ['RG Vikramjeet', 'Math', 'Reasoning', 'Premium'],
    screenshots: [
      'https://picsum.photos/seed/shot8/800/600'
    ]
  }
];
