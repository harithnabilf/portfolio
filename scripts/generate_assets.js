import fs from 'fs';
import path from 'path';

const dirs = ['images', 'videos', 'public/images', 'public/videos'];
dirs.forEach(dir => {
  const fullPath = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Helper to create dark SVG image
function createSvgImage(title, subtitle, badge) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#18181b"/>
    <!-- Subtle grid overlay -->
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" stroke-width="1"/>
      </pattern>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#27272a" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#18181b" stop-opacity="0.8"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#grid)" opacity="0.5"/>
    <rect x="40" y="40" width="720" height="520" rx="16" fill="url(#grad)" stroke="#3f3f46" stroke-width="1.5"/>
    
    <!-- Badge -->
    <rect x="80" y="80" width="160" height="32" rx="16" fill="#27272a" stroke="#52525b" stroke-width="1"/>
    <text x="160" y="101" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="12" font-weight="600" fill="#a1a1aa" text-anchor="middle" letter-spacing="1">${badge}</text>
    
    <!-- Main Title & Subtitle -->
    <text x="80" y="280" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="28" font-weight="600" fill="#f4f4f5">${title}</text>
    <text x="80" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="16" font-weight="400" fill="#a1a1aa">${subtitle}</text>
    
    <!-- Decorative Icon / Frame -->
    <circle cx="680" cy="460" r="40" fill="#27272a" stroke="#3f3f46" stroke-width="1.5"/>
    <path d="M668 460 L676 468 L692 452" fill="none" stroke="#e4e4e7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

const images = [
  {
    name: 'cocurricular-cert.jpg',
    title: 'Universiti Malaya',
    subtitle: 'Co-Curricular Excellence Award Recipient',
    badge: 'HONOUR'
  },
  {
    name: 'spm-cert.jpg',
    title: 'SPM National Examination',
    subtitle: 'Straight A Grade Performance (6A+, 3A)',
    badge: 'ACADEMIC'
  },
  {
    name: 'eureka-grant.jpg',
    title: 'Eureka Innovation Competition',
    subtitle: 'Silver Medalist & Project Grant Winner',
    badge: 'INNOVATION'
  }
];

images.forEach(img => {
  const svgContent = createSvgImage(img.title, img.subtitle, img.badge);
  ['images', 'public/images'].forEach(dir => {
    fs.writeFileSync(path.join(dir, img.name), svgContent, 'utf-8');
  });
});

// Create placeholder MP4 files or webm/mp4 stubs
const videoSvg = (title) => `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <rect width="1280" height="720" fill="#0f0f11"/>
  <circle cx="640" cy="360" r="48" fill="#27272a" stroke="#52525b" stroke-width="2"/>
  <polygon points="632,344 656,360 632,376" fill="#f4f4f5"/>
  <text x="640" y="460" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="20" font-weight="500" fill="#a1a1aa" text-anchor="middle">${title}</text>
</svg>`;

const videos = [
  { name: 'qup-interview.mp4', title: 'User Interview Footage — Q-Up Food Court Demo' },
  { name: 'pitram-booth.mp4', title: 'PITRAM Competition Presentation — Universiti Malaya' }
];

videos.forEach(v => {
  ['videos', 'public/videos'].forEach(dir => {
    fs.writeFileSync(path.join(dir, v.name), videoSvg(v.title), 'utf-8');
  });
});

console.log('Successfully generated assets in images/ and videos/');
