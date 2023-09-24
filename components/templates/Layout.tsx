
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="relative mx-auto lg:w-[210mm] w-[95vw] h-[310mm] min-h-[310mm] bg-[#f1f1f1]">
      {children}
  </div>
)

export default Layout