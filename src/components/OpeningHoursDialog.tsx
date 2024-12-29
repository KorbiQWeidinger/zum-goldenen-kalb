import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { DividerWithLogo } from "./BlockHeader";
import Spacer from "./ui/Spacer";
import LanguageSwitcher from "./header/LanguageSwitcher";
import { PDFMenuDownloadButton } from "./menu/PDFMenuDownloadButton";

export function OpeningHoursDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90%] max-w-[90%] md:w-3/4 md:max-w-3/4">
        <DialogHeader className="my-6 w-full text-gold-500 text-2xl flex flex-col items-center">
          <DividerWithLogo />
          <Spacer size="sm" />
          <div>{t("opening_hours_toast.title")}</div>
        </DialogHeader>
        <DialogDescription className="mb-6">
          <div className="text-lg text-white text-center">
            <p>{t("opening_hours_toast.line_1")}</p>
            <p>{t("opening_hours_toast.line_2")}</p>
            <p>{t("opening_hours_toast.line_3")}</p>
            <p>{t("opening_hours_toast.line_4")}</p>
          </div>
          <Spacer size="lg" />
          <div className="flex justify-center items-center">
            <PDFMenuDownloadButton />
          </div>
          <Spacer size="lg" />
          <div className="flex justify-center items-center">
            <LanguageSwitcher />
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
