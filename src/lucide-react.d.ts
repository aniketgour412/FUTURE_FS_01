declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
    strokeWidth?: string | number
  }

  export const ArrowRight: FC<LucideProps>
  export const ChevronDown: FC<LucideProps>
  export const Github: FC<LucideProps>
  export const Linkedin: FC<LucideProps>
  export const Twitter: FC<LucideProps>
  export const Mail: FC<LucideProps>
  export const Phone: FC<LucideProps>
  export const MapPin: FC<LucideProps>
  export const Send: FC<LucideProps>
  export const Code2: FC<LucideProps>
  export const Palette: FC<LucideProps>
  export const Zap: FC<LucideProps>
  export const Briefcase: FC<LucideProps>
  export const ExternalLink: FC<LucideProps>
  export const BookOpen: FC<LucideProps>
  export const FolderOpen: FC<LucideProps>
  export const Menu: FC<LucideProps>
  export const AlignJustify: FC<LucideProps>
  export const X: FC<LucideProps>
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}
