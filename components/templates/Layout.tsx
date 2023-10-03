
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="relative mx-auto lg:w-[50vw] w-[100vw] min-h-[250mm] bg-[#f1f1f1]">
      {children}
  </div>
)

export default Layout