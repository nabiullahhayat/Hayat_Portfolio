function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
