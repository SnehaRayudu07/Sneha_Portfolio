export const AboutSection = () => {
  return <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <p className="text-sm text-primary uppercase tracking-wider">About Me</p>
          <h2 className="text-5xl font-bold md:text-4xl">
            Building things that <span className="text-gradient">matter</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-up">
          <p>
            I'm <span className="text-primary font-semibold">Sneha Subbarayudu</span>, a Computer Science and Engineering graduate from{" "}
            <span className="text-foreground font-medium">Gandhi Institute of Technology and Management (GITAM), Hyderabad</span> — GPA{" "}
            <span className="text-primary font-semibold">9.2/10</span> and{" "}
            <span className="text-primary font-semibold">Merit Scholarship holder</span>.
          </p>

          <p>
            I've co-founded <span className="text-primary font-semibold">HiveIn</span>, a relationship app for couples designed to strengthen emotional connection through shared habits and intentional communication. Before that, I built{" "}
            <span className="text-primary font-semibold">Houzee</span>, a home food delivery startup that started as a{" "}
            <span className="text-foreground font-medium">Google Solution Challenge project</span> and grew through college incubation.
          </p>

          <p>
            Alongside startup work, I've led <span className="text-foreground font-medium">machine learning and Android development projects</span>, including research on{" "}
            <span className="text-primary font-semibold">Diabetic Retinopathy detection using deep learning</span> and a{" "}
            <span className="text-primary font-semibold">Phishing Detection Model</span> that achieved over{" "}
            <span className="text-primary font-semibold">95% accuracy</span>.
          </p>

          <p>
            My journey is driven by <span className="text-gradient font-semibold">curiosity, collaboration, and a deep desire to build things that matter</span>. I love taking ideas from{" "}
            <span className="text-primary font-semibold">0 → 1</span> — through research, design, user feedback, and engineering.
          </p>
        </div>

        <div className="pt-8 grid grid-cols-3 gap-8 text-center animate-fade-in-up">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">9.2</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">GPA/10</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">300+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">User Interviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Alpha Users</div>
          </div>
        </div>
      </div>
    </section>;
};