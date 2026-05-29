import { socialLinks } from "@/content/introduction";
import { externalLinkProps } from "@/lib/utils";
import { socialIconMap } from "./social-icons";

export default function Footer() {
  return (
    <footer className="flex h-14 items-center px-6 sm:px-10">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center">
        <nav
          className="flex items-center justify-center gap-3"
          aria-label="Social links"
        >
          {socialLinks
            .filter((social) => social.icon !== "resume")
            .map((social) => {
              const Icon = socialIconMap[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  {...externalLinkProps(social.href)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/60 transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              );
            })}
        </nav>
      </div>
    </footer>
  );
}
