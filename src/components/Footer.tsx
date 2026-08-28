import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center gap-6">
        {/* Social links + email */}
        <div className="flex items-center gap-5 text-muted">
          <a href={profile.socials.github} aria-label="GitHub" className="hover:text-foreground">
            <FaGithub size={18} />
          </a>
          <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-foreground">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
