import { marqueeSkills } from '../data/resume'

export default function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills]

  return (
    <div className="relative border-y border-edge/[0.06] bg-surface/[0.015] py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex animate-marquee items-center gap-3 whitespace-nowrap">
          {items.map((skill, i) => (
            <span key={`${skill}-${i}`} className="flex items-center gap-3">
              <span className="font-mono text-sm text-mist-400">{skill}</span>
              <span className="h-1 w-1 rounded-full bg-violet-500/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
