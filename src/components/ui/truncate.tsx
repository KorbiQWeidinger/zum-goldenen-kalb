import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface TruncateProps {
  text: string;
  className?: string;
}

export function Truncate({ text, className }: TruncateProps) {
  const [truncatedText, setTruncatedText] = useState(text);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const truncateText = () => {
      if (containerRef.current) {
        const element = containerRef.current;
        if (element.scrollHeight > element.clientHeight) {
          let low = 0;
          let high = text.length;
          let mid;

          while (low < high) {
            mid = Math.floor((low + high) / 2);
            element.textContent = text.slice(0, mid) + "...";

            if (element.scrollHeight > element.clientHeight) {
              high = mid;
            } else {
              low = mid + 1;
            }
          }

          setTruncatedText(text.slice(0, low - 1) + "...");
        } else {
          setTruncatedText(text);
        }
      }
    };

    truncateText();
    window.addEventListener("resize", truncateText);

    return () => {
      window.removeEventListener("resize", truncateText);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden text-left", className)}
      title={text}
    >
      {truncatedText}
    </div>
  );
}
