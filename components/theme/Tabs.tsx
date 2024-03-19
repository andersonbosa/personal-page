import { useState, Fragment } from 'react'

interface Tab {
  title: string;
  content: string | React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

function Tabs({ tabs, className }: TabsProps): React.JSX.Element {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index)
  }

  const createTabItem = (tab: Tab, index: number): React.JSX.Element => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          name={'tabs'}
          id={`tab-${index}`}
          role="tab"
          className="tab"
          aria-label={tab.title}
          checked={activeTabIndex === index}
          onChange={() => handleTabClick(index)}
          onMouseEnter={() => handleTabClick(index)}
        />
        <div
          role="tabpanel"
          className={`tab-content p-10 ${activeTabIndex === index ? '' : 'hidden'}`}
        >
          {tab.content}
        </div>
      </Fragment>
    )
  }

  return (
      <div role="tablist" className={`tabs tabs-bordered -- ${className}`}>
        {tabs.map(createTabItem)}
      </div>
  )
}

export default Tabs
