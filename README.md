# Stevi Greis Sianipar – Portfolio

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper.js](https://swiperjs.com/)
- [Lucide Icons](https://lucide.dev/)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── components/         # Reusable UI components
│   │   ├── MiniHeader.tsx  # Sticky floating header on scroll
│   │   ├── PDFViewerModal.tsx
│   │   ├── SkillCard.tsx
│   │   └── ui.tsx          # Shared UI primitives
│   ├── sections/           # Page sections (one file per section)
│   │   ├── HeaderSection.tsx
│   │   ├── AboutAndSkillsSection.tsx
│   │   ├── OrganizationSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ProjectsSection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── data/
│   │   └── portfolio.ts    # All portfolio content (edit here!)
│   └── types/
│       └── index.ts        # TypeScript interfaces
├── public/
│   ├── certs/              # Certificate PDF files
│   ├── projects/           # Project screenshot images
│   ├── profile.jpg
│   └── cv.pdf
└── ...config files
```

## ✏️ How to Update Content

All portfolio content lives in one file: **`lib/data/portfolio.ts`**

- Update your bio, contact info → edit `profile`
- Add education → edit `educations` array
- Add a new project → add to `projects` array
- Add a certificate → add to `certificates` array
- Add an organization → add to `organizations` array

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ☁️ Deploy to Vercel

This project is deployed via [Vercel](https://vercel.com).

Push to `main` branch → Vercel auto-deploys.

## 📄 License

MIT
