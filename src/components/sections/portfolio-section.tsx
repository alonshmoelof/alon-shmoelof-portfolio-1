"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type PortfolioItem = {
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
};

// Helper to derive watch URL from YouTube thumbnail URL
const youtubeWatchUrlFromThumb = (thumb: string) => {
  const match = thumb.match(/\/vi\/([^/]+)/);
  return match ? `https://www.youtube.com/watch?v=${match[1]}` : "#";
};

// Helper to derive video ID from YouTube thumbnail URL
const youtubeIdFromThumb = (thumb: string) => thumb.match(/\/vi\/([^/]+)/)?.[1] ?? null;

const portfolioItems: PortfolioItem[] = [
{ year: 2025, title: "Migdal Insurance", description: "commercial showcasing Migdal brand", imageUrl: "https://img.youtube.com/vi/2R-BOVtD3VM/maxresdefault.jpg", alt: "Migdal Insurance" },
{ year: 2025, title: "Bank Hapoalim", description: "Ai for all", imageUrl: "https://img.youtube.com/vi/NWqTVT_grD4/maxresdefault.jpg", alt: "Bank Hapoaalim" },
{ year: 2024, title: "Bank Hapoalim", description: "Beet service campign", imageUrl: "https://img.youtube.com/vi/OPCghHNMDNo/maxresdefault.jpg", alt: "Bank Hapoalim" },
{ year: 2024, title: "United Hatzalah", description: "", imageUrl: "https://img.youtube.com/vi/7xJ6r_3Iw1o/maxresdefault.jpg", alt: "United Hatzalah" },
{ year: 2025, title: "HOT", description: "", imageUrl: "https://img.youtube.com/vi/pl534uGvdqo/maxresdefault.jpg", alt: "HOT" },
{ year: 2025, title: "Osem", description: "Mana Hama - New Flavors Launch Campaign", imageUrl: "https://img.youtube.com/vi/5AgkzI_nK40/maxresdefault.jpg", alt: "Osem" },
{ year: 2025, title: "Livnat Poran", description: "", imageUrl: "https://img.youtube.com/vi/tIVmht2RSM4/maxresdefault.jpg", alt: "Livnat poran" },
{ year: 2024, title: "Nesher Study case", description: "", imageUrl: "https://img.youtube.com/vi/QX9PUAuqdmo/maxresdefault.jpg", alt: "Nesher Study case" },
{ year: 2024, title: "Next TV", description: "", imageUrl: "https://img.youtube.com/vi/jLu1I4St_lo/maxresdefault.jpg", alt: "Next TV" },
{ year: 2023, title: "Pizza Madnot", description: "", imageUrl: "https://img.youtube.com/vi/akM5lSwDwx4/maxresdefault.jpg", alt: "Pizza maadnot" },
{ year: 2023, title: "Bank Hapoalim", description: "", imageUrl: "https://img.youtube.com/vi/cxaLpGNDnnY/maxresdefault.jpg", alt: "Bank Hapoalim" },
{ year: 2023, title: "Shufersal online", description: "", imageUrl: "https://img.youtube.com/vi/TKPmdL7AgVk/maxresdefault.jpg", alt: "Shufersal online" },
{ year: 2023, title: "FOX", description: "", imageUrl: "https://img.youtube.com/vi/9ZWvoKukAtQ/maxresdefault.jpg", alt: "fox" },
{ year: 2023, title: "American Egale", description: "", imageUrl: "https://img.youtube.com/vi/26H4GG45NfM/maxresdefault.jpg", alt: "American Eagle" },
{ year: 2023, title: "FOX", description: "", imageUrl: "https://img.youtube.com/vi/TUUR5ugP1uM/maxresdefault.jpg", alt: "FOX" },
{ year: 2023, title: "Israel Cancer Association", description: "", imageUrl: "https://img.youtube.com/vi/ygfj2Zo3yfU/maxresdefault.jpg", alt: "Israel Cancer Association" },
{ year: 2022, title: "Bank Hapoalim", description: "", imageUrl: "https://img.youtube.com/vi/2eRituO6KKE/maxresdefault.jpg", alt: "Bank Hapoalim" },
{ year: 2022, title: "Fox", description: "", imageUrl: "https://img.youtube.com/vi/a68uu86O51c/maxresdefault.jpg", alt: "Fox" },
{ year: 2022, title: "Migdaley haim hatiycon", description: "", imageUrl: "https://img.youtube.com/vi/d0bcOt9G710/maxresdefault.jpg", alt: "Migdaley haim hatiycon" },
{ year: 2022, title: "Meatless", description: "", imageUrl: "https://img.youtube.com/vi/M1eOouhjggI/maxresdefault.jpg", alt: "Meatless" },
{ year: 2021, title: "Fox Home", description: "", imageUrl: "https://img.youtube.com/vi/E2cnxU5HFRw/maxresdefault.jpg", alt: "Fox Home" },
{ year: 2022, title: "Yolo", description: "", imageUrl: "https://img.youtube.com/vi/wIZmMQB-zJw/maxresdefault.jpg", alt: "Yolo" },
{ year: 2021, title: "Sonol", description: "", imageUrl: "https://img.youtube.com/vi/9k-xcBMleYw/maxresdefault.jpg", alt: "Sonol" },
{ year: 2021, title: "Mey Eden", description: "", imageUrl: "https://img.youtube.com/vi/v6tSNjz1eHU/maxresdefault.jpg", alt: "Mey Eden" }];


const PortfolioSection = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Work</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A small collection of my recent video production and editing projects showcasing various styles and creative approaches
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) =>
          <div key={index} className="group bg-gray-900 rounded-lg overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                src={item.imageUrl}
                alt={item.alt}
                width={1280}
                height={720}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div
                onClick={() => {const id = youtubeIdFromThumb(item.imageUrl);if (id) {setActiveId(id);setOpen(true);}}}
                role="button"
                aria-label={`Play ${item.title}`}
                tabIndex={0}
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">

                  <div className="bg-accent-red rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                    {item.title}
                  </h3>
                  {item.description &&
                <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                }
                </div>
                <a
                href={youtubeWatchUrlFromThumb(item.imageUrl)}
                onClick={(e) => {e.preventDefault();const id = youtubeIdFromThumb(item.imageUrl);if (id) {setActiveId(id);setOpen(true);}}}
                className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors duration-300 self-start"
                aria-label={`Watch ${item.title} on YouTube`}>

                  Watch
                  <Play className="ml-2 w-4 h-4" fill="currentColor" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={(o) => {setOpen(o);if (!o) setActiveId(null);}}>

        <DialogContent className="max-w-4xl border-none p-0 bg-black">
          {activeId &&
          <AspectRatio ratio={16 / 9}>
              <iframe
              key={activeId}
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
              title="YouTube video player"
              className="h-full w-full rounded-md"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen />

            </AspectRatio>
          }
        </DialogContent>
      </Dialog>
    </section>);

};

export default PortfolioSection;