import { GoogleGenerativeAI } from '@google/generative-ai';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const outputDir = './public/images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  {
    name: 'hero',
    prompt: 'Professional industrial battery installation worker in a large warehouse, wearing safety gear, installing a large industrial forklift battery system, dramatic lighting, photorealistic, high quality commercial photography style, orange and dark color scheme',
    width: 1408,
    height: 768,
  },
  {
    name: 'forklift-battery',
    prompt: 'Close-up of a technician installing a large industrial forklift lead-acid battery in a warehouse, professional safety equipment, industrial environment, photorealistic, high quality',
    width: 1024,
    height: 1024,
  },
  {
    name: 'industrial-battery',
    prompt: 'Large industrial battery rack system installation in a factory, rows of industrial batteries, professional electrical installation, modern factory environment, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'ups-battery',
    prompt: 'UPS uninterruptible power supply battery replacement in a server room, technician replacing battery modules, server racks in background, blue lighting, professional data center environment, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'solar-ess',
    prompt: 'Solar energy storage system ESS battery installation, modern lithium battery energy storage system connected to solar panels on roof, clean energy, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'ev-charger',
    prompt: 'Industrial electric forklift charger installation in warehouse, professional electrician installing heavy duty charging station, industrial cables and equipment, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'battery-maintenance',
    prompt: 'Technician performing battery maintenance and inspection on industrial batteries, using diagnostic equipment, checking battery cells, professional battery service, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'generator-battery',
    prompt: 'Emergency generator battery replacement, technician replacing starter battery on industrial diesel generator, power plant environment, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'battery-charger',
    prompt: 'Industrial battery charger repair, electronics technician repairing industrial charger circuit board, professional workshop environment, soldering equipment, photorealistic',
    width: 1024,
    height: 1024,
  },
  {
    name: 'og-default',
    prompt: 'Battery Monster Max brand image, industrial battery company, orange and dark background, Korean text saying 밧데리몬스터 max, professional industrial battery installation company logo concept, bold orange branding',
    width: 1200,
    height: 630,
  },
];

async function generateImage(imageConfig) {
  const { name, prompt, width, height } = imageConfig;
  console.log(`\nGenerating: ${name}.webp (${width}x${height})...`);

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: `Generate a photorealistic image: ${prompt}` }] }],
      generationConfig: {
        responseModalities: ['image', 'text'],
      },
    });

    const response = result.response;
    const parts = response.candidates[0].content.parts;

    for (const part of parts) {
      if (part.inlineData) {
        const imageData = part.inlineData.data;
        const mimeType = part.inlineData.mimeType;

        const buffer = Buffer.from(imageData, 'base64');

        const outputPath = path.join(outputDir, `${name}.webp`);
        await sharp(buffer)
          .resize(width, height, { fit: 'cover', position: 'center' })
          .webp({ quality: 85 })
          .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`  ✓ Saved ${name}.webp (${(stats.size / 1024).toFixed(1)} KB)`);
        return true;
      }
    }

    console.log(`  ✗ No image data in response for ${name}`);
    return false;
  } catch (err) {
    console.error(`  ✗ Error generating ${name}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('밧데리몬스터 max - Generating images with Gemini AI...');
  console.log(`Output directory: ${outputDir}`);

  let success = 0;
  let failed = 0;

  for (const img of images) {
    const ok = await generateImage(img);
    if (ok) success++;
    else failed++;
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nDone! ${success} images generated, ${failed} failed.`);
  if (success > 0) {
    console.log('\nTo rebuild the site with new images, run: npm run build');
  }
}

main().catch(console.error);
