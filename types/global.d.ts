declare interface myColors {
  initial?: MotionValue<number>
  primary?: MotionValue<string>
  secondary?: MotionValue<string>
}

declare interface Project {
  title?: string
  description?: string
  src?: StaticImageData
  alignImg?: string
  id?: string
}

declare interface LinkObject {
  href?: string
  path?: string
  _target?: string
  children?: any
  icon?: any
  color?: string
}

declare interface LinkMeta {
  title: string
  icon: any
  color: string
}
