'use client'

interface DrawerProps {
  drawerItens: React.ReactElement
  title?: string
}

const Drawer: React.FC<DrawerProps> = ({
  drawerItens,
  title = 'Open drawer'
}) => {

  const drawerID = `${(Math.random() * 100000) + new Date().getTime()}`

  return (
    <>
      <div className="drawer drawer-end">
        <input id={drawerID} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor={drawerID} className="drawer-button btn btn-primary">
            {title}
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor={drawerID} aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {drawerItens}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Drawer
