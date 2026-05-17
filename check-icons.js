import * as lucide from 'lucide-react';

const expected = ['Rocket', 'Sparkles', 'Plane', 'Waves', 'ArrowRight', 'Download', 'Box', 'Layout', 'FileText', 'Activity'];
const missing = expected.filter(icon => !lucide[icon]);

console.log("Missing exports:", missing);
