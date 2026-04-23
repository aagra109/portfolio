import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

const SECTION_DIVIDER_PATH =
  "M 0 -10 L 0 2 L 24 0 L 48 12 L 72 3 L 96 18 L 120 1 L 144 9 L 168 4 L 192 20 L 216 2 L 240 12 L 264 0 L 288 8 L 312 22 L 336 5 L 360 15 L 384 1 L 408 10 L 432 3 L 456 18 L 480 5 L 504 12 L 528 1 L 552 16 L 576 5 L 600 21 L 624 2 L 648 13 L 672 0 L 696 18 L 720 5 L 744 15 L 768 2 L 792 20 L 816 7 L 840 14 L 864 1 L 888 12 L 912 5 L 936 18 L 960 0 L 984 16 L 1008 5 L 1032 21 L 1056 2 L 1080 12 L 1104 1 L 1128 15 L 1152 5 L 1176 18 L 1200 2 L 1200 -10 Z";

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="currentColor"
      className={cn("text-black", className)}
    >
      <path d={SECTION_DIVIDER_PATH} />
    </svg>
  );
}
