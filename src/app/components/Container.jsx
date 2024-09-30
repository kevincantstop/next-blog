const Container = ({ children }) => {
  return (
      <div className="bg-white container mx-auto xl:w-[1280px] font-[family-name:var(--font-geist-sans)] drop-shadow-md">
          {children}
      </div>
  )
}

export default Container;
