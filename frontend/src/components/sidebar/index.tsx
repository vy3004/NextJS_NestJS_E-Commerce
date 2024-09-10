import React from "react";
import {
  CalendarIcon,
  HomeIcon,
  UserIcon,
  SettingsIcon,
  InfoIcon,
  MailIcon,
  PhoneIcon,
  HelpCircleIcon,
  MusicIcon,
  FilmIcon,
  BookIcon,
  CameraIcon,
  GiftIcon,
  MapIcon,
  CloudIcon,
  HeartIcon,
  StarIcon,
  BellIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
} from "lucide-react";

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";

// Fake data for categories and services
const categories = [
  { id: 1, name: "Calendar", icon: <CalendarIcon className="mr-2 h-4 w-4" /> },
  { id: 2, name: "Home", icon: <HomeIcon className="mr-2 h-4 w-4" /> },
  { id: 3, name: "User", icon: <UserIcon className="mr-2 h-4 w-4" /> },
  { id: 4, name: "Settings", icon: <SettingsIcon className="mr-2 h-4 w-4" /> },
  { id: 5, name: "Info", icon: <InfoIcon className="mr-2 h-4 w-4" /> },
  { id: 6, name: "Mail", icon: <MailIcon className="mr-2 h-4 w-4" /> },
  { id: 7, name: "Phone", icon: <PhoneIcon className="mr-2 h-4 w-4" /> },
  { id: 8, name: "Help", icon: <HelpCircleIcon className="mr-2 h-4 w-4" /> },
  { id: 9, name: "Music", icon: <MusicIcon className="mr-2 h-4 w-4" /> },
  { id: 10, name: "Film", icon: <FilmIcon className="mr-2 h-4 w-4" /> },
  { id: 11, name: "Books", icon: <BookIcon className="mr-2 h-4 w-4" /> },
  { id: 12, name: "Camera", icon: <CameraIcon className="mr-2 h-4 w-4" /> },
  { id: 13, name: "Gift", icon: <GiftIcon className="mr-2 h-4 w-4" /> },
  { id: 14, name: "Map", icon: <MapIcon className="mr-2 h-4 w-4" /> },
  { id: 15, name: "Cloud", icon: <CloudIcon className="mr-2 h-4 w-4" /> },
  { id: 16, name: "Heart", icon: <HeartIcon className="mr-2 h-4 w-4" /> },
  { id: 17, name: "Star", icon: <StarIcon className="mr-2 h-4 w-4" /> },
  { id: 18, name: "Bell", icon: <BellIcon className="mr-2 h-4 w-4" /> },
  {
    id: 19,
    name: "Briefcase",
    icon: <BriefcaseIcon className="mr-2 h-4 w-4" />,
  },
  { id: 20, name: "Cart", icon: <ShoppingCartIcon className="mr-2 h-4 w-4" /> },
];

const services = [
  { id: 1, name: "Calendar2", icon: <CalendarIcon className="mr-2 h-4 w-4" /> },
  { id: 2, name: "Home2", icon: <HomeIcon className="mr-2 h-4 w-4" /> },
  { id: 3, name: "User2", icon: <UserIcon className="mr-2 h-4 w-4" /> },
  { id: 4, name: "Settings2", icon: <SettingsIcon className="mr-2 h-4 w-4" /> },
  { id: 5, name: "Info2", icon: <InfoIcon className="mr-2 h-4 w-4" /> },
  { id: 6, name: "Mail2", icon: <MailIcon className="mr-2 h-4 w-4" /> },
  { id: 7, name: "Phone2", icon: <PhoneIcon className="mr-2 h-4 w-4" /> },
  { id: 8, name: "Help2", icon: <HelpCircleIcon className="mr-2 h-4 w-4" /> },
  { id: 9, name: "Music2", icon: <MusicIcon className="mr-2 h-4 w-4" /> },
  { id: 10, name: "Film2", icon: <FilmIcon className="mr-2 h-4 w-4" /> },
  { id: 11, name: "Books2", icon: <BookIcon className="mr-2 h-4 w-4" /> },
  { id: 12, name: "Camera2", icon: <CameraIcon className="mr-2 h-4 w-4" /> },
  { id: 13, name: "Gift2", icon: <GiftIcon className="mr-2 h-4 w-4" /> },
  { id: 14, name: "Map2", icon: <MapIcon className="mr-2 h-4 w-4" /> },
  { id: 15, name: "Cloud2", icon: <CloudIcon className="mr-2 h-4 w-4" /> },
  { id: 16, name: "Heart2", icon: <HeartIcon className="mr-2 h-4 w-4" /> },
  { id: 17, name: "Star2", icon: <StarIcon className="mr-2 h-4 w-4" /> },
  { id: 18, name: "Bell2", icon: <BellIcon className="mr-2 h-4 w-4" /> },
  {
    id: 19,
    name: "Briefcase2",
    icon: <BriefcaseIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 20,
    name: "Cart2",
    icon: <ShoppingCartIcon className="mr-2 h-4 w-4" />,
  },
];

export const Sidebar = () => {
  return (
    <Command className="bg-card h-screen max-w-56 rounded-xl border">
      <CommandInput placeholder="Search ..." />
      <CommandList className="h-full px-2">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categories.map((category) => (
            <CommandItem key={category.id} className="p-3">
              {category.icon}
              <span>{category.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Services">
          {services.map((service) => (
            <CommandItem key={service.id} className="p-3">
              {service.icon}
              <span>{service.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
