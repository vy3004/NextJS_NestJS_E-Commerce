"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronsUpDown, LoaderIcon, MapPinIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

import { cn } from "@/lib/utils";

const PROVINCE_API_KEY = process.env.NEXT_PUBLIC_PROVINCE_API_KEY;

interface Location {
  code: number;
  name: string;
}

interface LocationData {
  region: Location | null;
  district: Location | null;
  ward: Location | null;
}

export const LocationCombobox = () => {
  const t = useTranslations("LocationCombobox");
  const { toast } = useToast();

  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<number>(1);
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(
    null
  );
  const [selectedLocation, setSelectedLocation] = useState<LocationData>({
    region: null,
    district: null,
    ward: null,
  });
  const [regions, setRegions] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);

  useEffect(() => {
    const deliveryLocation: LocationData | null =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("delivery-location") as string)
        : null;

    if (deliveryLocation) {
      setCurrentLocation(deliveryLocation);
    }
  }, []);

  const fetchData = async (
    url: string,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  const handleRegionOpenChange = (isOpen: boolean) => {
    if (isOpen && regions.length === 0) {
      fetchData(`${PROVINCE_API_KEY}/?depth=1`, setRegions);
    }
  };

  const handleRegionChange = (regionCode: string, regionName: string) => {
    setSelectedLocation((prev) => ({
      ...prev,
      region: { code: Number(regionCode), name: regionName },
      district: null,
      ward: null,
    }));
    setDistricts([]);
    setWards([]);
  };

  const handleDistrictOpenChange = (isOpen: boolean) => {
    const { region } = selectedLocation;
    if (isOpen && districts.length === 0 && region) {
      fetchData(`${PROVINCE_API_KEY}/p/${region.code}?depth=2`, (data) => {
        setDistricts(data.districts);
      });
    }
  };

  const handleDistrictChange = (districtCode: string, districtName: string) => {
    setSelectedLocation((prev) => ({
      ...prev,
      district: { code: Number(districtCode), name: districtName },
      ward: null,
    }));
    setWards([]);
  };

  const handleWardOpenChange = (isOpen: boolean) => {
    const { district } = selectedLocation;
    if (isOpen && wards.length === 0 && district) {
      fetchData(`${PROVINCE_API_KEY}/d/${district.code}?depth=2`, (data) => {
        setWards(data.wards);
      });
    }
  };

  const handleWardChange = (wardCode: string, wardName: string) => {
    setSelectedLocation((prev) => ({
      ...prev,
      ward: { code: Number(wardCode), name: wardName },
    }));
  };

  const handleSetDeliveryLocation = () => {
    if (option === 2 || !currentLocation) {
      setCurrentLocation(selectedLocation);
      localStorage.setItem(
        "delivery-location",
        JSON.stringify(selectedLocation)
      );
      toast({
        title: t("Shipping address setup successful"),
        description: `${selectedLocation.ward?.name}, ${selectedLocation.district?.name}, ${selectedLocation.region?.name}`,
      });
    }
    setOption(1);
    setOpen(false);
  };

  const isButtonDisabled = () =>
    option === 2 &&
    (!selectedLocation.ward ||
      !selectedLocation.district ||
      !selectedLocation.region);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a location"
          className="h-11 px-2 justify-between space-x-2 text-gray-500"
        >
          <div className="text-left">
            <span className="text-sm font-light">{t("Your location")}</span>
            <p className="font-medium text-main">
              {currentLocation
                ? currentLocation.region?.name
                : t("Not selected")}
            </p>
          </div>
          <ChevronsUpDown className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="border p-4">
          <CommandList>
            <h3 className="text-center font-semibold mb-2">
              {t("Delivery Location")}
            </h3>
            <CommandSeparator />
            <CommandGroup
              className="p-0 mb-2"
              heading={t(
                "Choose your address and we will specify the offer for your area"
              )}
            >
              {currentLocation && (
                <div className="space-y-2">
                  <CommandItem
                    className="cursor-pointer py-2 items-start"
                    onSelect={() => setOption(1)}
                  >
                    <div>
                      <MapPinIcon
                        className={cn(
                          "text-main size-4 mr-1 mt-[1px]",
                          option === 1 ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </div>
                    <span>{`${currentLocation.ward?.name || ""}, ${
                      currentLocation.district?.name || ""
                    }, ${currentLocation.region?.name || ""}`}</span>
                  </CommandItem>
                  <CommandItem
                    className="cursor-pointer py-2 items-start"
                    onSelect={() => setOption(2)}
                  >
                    <div>
                      <MapPinIcon
                        className={cn(
                          "text-main size-4 mr-1 mt-[1px]",
                          option === 2 ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </div>
                    <span>{t("Choose address")}</span>
                  </CommandItem>
                </div>
              )}
            </CommandGroup>
          </CommandList>
          {(option === 2 || currentLocation === null) && (
            <div className="space-y-2">
              {/* Select Region */}
              <Select
                onValueChange={(value) =>
                  handleRegionChange(
                    value,
                    regions.find((r) => r.code.toString() === value)?.name || ""
                  )
                }
                value={selectedLocation.region?.code.toString() || ""}
                onOpenChange={handleRegionOpenChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("Select region")} />
                </SelectTrigger>
                <SelectContent>
                  {regions.length > 0 ? (
                    regions.map((region) => (
                      <SelectItem
                        key={region.code}
                        value={region.code.toString()}
                      >
                        {region.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItemLoading />
                  )}
                </SelectContent>
              </Select>

              {/* Select District */}
              <Select
                onValueChange={(value) =>
                  handleDistrictChange(
                    value,
                    districts.find((d) => d.code.toString() === value)?.name ||
                      ""
                  )
                }
                value={selectedLocation.district?.code.toString() || ""}
                disabled={!selectedLocation.region}
                onOpenChange={handleDistrictOpenChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("Select district")} />
                </SelectTrigger>
                <SelectContent>
                  {districts.length > 0 ? (
                    districts.map((district) => (
                      <SelectItem
                        key={district.code}
                        value={district.code.toString()}
                      >
                        {district.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItemLoading />
                  )}
                </SelectContent>
              </Select>

              {/* Select Ward */}
              <Select
                onValueChange={(value) =>
                  handleWardChange(
                    value,
                    wards.find((w) => w.code.toString() === value)?.name || ""
                  )
                }
                value={selectedLocation.ward?.code.toString() || ""}
                disabled={!selectedLocation.district}
                onOpenChange={handleWardOpenChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("Select ward")} />
                </SelectTrigger>
                <SelectContent>
                  {wards.length > 0 ? (
                    wards.map((ward) => (
                      <SelectItem key={ward.code} value={ward.code.toString()}>
                        {ward.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItemLoading />
                  )}
                </SelectContent>
              </Select>
            </div>
          )}
          <Button
            className="mt-2 bg-main/80 hover:bg-main text-white"
            onClick={handleSetDeliveryLocation}
            disabled={isButtonDisabled()}
          >
            {t("Delivery to this location")}
          </Button>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const SelectItemLoading = () => (
  <div className="flex items-center p-2 text-muted-foreground text-sm">
    <LoaderIcon className="mr-2 size-4 animate-spin" />
    Đang tải
  </div>
);
