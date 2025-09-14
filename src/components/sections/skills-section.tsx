import { CheckCircle2, Clapperboard, Scissors, Sparkles, Music2, Wrench } from "lucide-react";

export default function SkillsSection() {
  const categories: { icon: React.ElementType; title: string; skills: string[] }[] = [
    { icon: Clapperboard, title: "Video Production", skills: ["Directing", "Cinematography", "Lighting", "Multi-cam", "Gimbal/Drone", "Interviewing"] },
    { icon: Scissors, title: "Editing & Post", skills: ["Storytelling", "Color Grading", "Conform", "Subtitles", "Delivery Specs", "QC"] },
    { icon: Sparkles, title: "Motion & VFX", skills: ["2D/3D Motion", "Compositing", "Rotoscope", "Tracking", "Clean Plates", "Logo Animations"] },
    { icon: Music2, title: "Audio", skills: ["Sound Design", "VO Direction", "Noise Reduction", "Mixing", "Music Licensing"] },
    { icon: Wrench, title: "Tools & Tech", skills: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition", "GenAI Assist", "Frame.io"] },
    { icon: CheckCircle2, title: "Soft Skills", skills: ["Client Communication", "Brief to Delivery", "Agile", "Team Leadership", "Budgeting", "Deadlines"] },
  ];

  return (
    <section id="skills" className="bg-secondary/50">
      <div className="container">
        <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Expertise</h2>
          <div className="mt-3 h-1 w-24 bg-primary rounded" />
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A focused mix of production craftsmanship and AI-enhanced post workflows to deliver cinematic, on-brief stories—fast.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, skills }) => (
            <div key={title} className="rounded-lg bg-card text-card-foreground border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-white/90 border border-border/60">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}