'use client'

interface ToolTipProps {
  children: React.ReactNode
  tip: string
  className?: string
}

function ToolTip(props: ToolTipProps): React.JSX.Element {
  return (
    <>
      <div className={`tooltip ${props.className}`} data-tip={props.tip}>
        {props.children}
      </div>
    </>
  )
}

export default ToolTip
