'use client'

interface AtomProps {
  className?: string
}

function Atom(props: AtomProps): React.JSX.Element {
  return (
    <>
      <div className={props.className}></div>
    </>
  )
}

export default Atom
