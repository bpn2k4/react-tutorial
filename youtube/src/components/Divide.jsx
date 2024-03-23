import { twMerge } from 'tailwind-merge'

export const DivideY = ({ className, h = 1, mx = 0, my = 0 }) => {

  const style = {
    height: h,
    marginLeft: mx,
    marginRight: mx,
    marginTop: my,
    marginBottom: my,
  }

  return (
    <div style={style} className={twMerge('w-full', className)} />
  )
}

export const DivideX = ({ className, w = 1, mx = 0, my = 0 }) => {

  const style = {
    width: w,
    marginLeft: mx,
    marginRight: mx,
    marginTop: my,
    marginBottom: my,
  }

  return (
    <div style={style} className={twMerge('h-full', className)} />
  )
}