import { Sidebar } from "@/components/sidebar";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/section/hero-section";
import { PromoSection } from "@/components/section/promo-section";
import { ProductSection } from "@/components/section/product-section";

const promosData = [
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
  {
    name: "Top Deal",
    imgUrl:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    link: "#",
  },
];

export default function Home() {
  return (
    <Container className="py-4 grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="w-full space-y-4 col-span-10">
        <HeroSection />
        <PromoSection promos={promosData} />
        <ProductSection />
        <ProductSection />
        <PromoSection promos={promosData} />
        <ProductSection />
        <div>
          <div>
            <div className="w-48 h-24 bg-main-foreground text-center text-main flex items-center justify-center">
              --main
            </div>
            <Separator orientation="vertical" />
            <div className="w-48 h-24 bg-foreground text-center text-white flex items-center justify-center">
              --foreground
            </div>
            <div className="w-48 h-24 bg-card text-center text-white flex items-center justify-center">
              --card
            </div>
            <div className="w-48 h-24 bg-card-foreground text-center text-white flex items-center justify-center">
              --card-foreground
            </div>
            <div className="w-48 h-24 bg-popover text-center text-white flex items-center justify-center">
              --popover
            </div>
            <div className="w-48 h-24 bg-popover-foreground text-center text-white flex items-center justify-center">
              --popover-foreground
            </div>
            <div className="w-48 h-24 bg-primary text-center text-white flex items-center justify-center">
              --primary
            </div>
            <div className="w-48 h-24 bg-primary-foreground text-center text-white flex items-center justify-center">
              --primary-foreground
            </div>
            <div className="w-48 h-24 bg-secondary text-center text-white flex items-center justify-center">
              --secondary
            </div>
            <div className="w-48 h-24 bg-secondary-foreground text-center text-white flex items-center justify-center">
              --secondary-foreground
            </div>
            <div className="w-48 h-24 bg-muted text-center text-white flex items-center justify-center">
              --muted
            </div>
            <div className="w-48 h-24 bg-muted-foreground text-center text-white flex items-center justify-center">
              --muted-foreground
            </div>
            <div className="w-48 h-24 bg-accent text-center text-white flex items-center justify-center">
              --accent
            </div>
            <div className="w-48 h-24 bg-accent-foreground text-center text-white flex items-center justify-center">
              --accent-foreground
            </div>
            <div className="w-48 h-24 bg-destructive text-center text-white flex items-center justify-center">
              --destructive
            </div>
            <div className="w-48 h-24 bg-destructive-foreground text-center text-white flex items-center justify-center">
              --destructive-foreground
            </div>
            <div className="w-48 h-24 bg-border text-center text-white flex items-center justify-center">
              --border
            </div>
            <div className="w-48 h-24 bg-input text-center text-white flex items-center justify-center">
              --input
            </div>
            <div className="w-48 h-24 bg-ring text-center text-white flex items-center justify-center">
              --ring
            </div>
            <div className="w-48 h-24 bg-chart-1 text-center text-white flex items-center justify-center">
              --chart-1
            </div>
            <div className="w-48 h-24 bg-chart-2 text-center text-white flex items-center justify-center">
              --chart-2
            </div>
            <div className="w-48 h-24 bg-chart-3 text-center text-white flex items-center justify-center">
              --chart-3
            </div>
            <div className="w-48 h-24 bg-chart-4 text-center text-white flex items-center justify-center">
              --chart-4
            </div>
            <div className="w-48 h-24 bg-chart-5 text-center text-white flex items-center justify-center">
              --chart-5
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
