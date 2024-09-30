const Container = ({ children }) => {
  return (
      <div className="px-[6rem] py-10 bg-white container mx-auto xl:w-[1280px] font-[family-name:var(--font-geist-sans)] shadow-sm">
          {children}
      </div>
  )
}

export default Container;
