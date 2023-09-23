
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="relative mx-auto w-[210mm] h-[297mm] bg-[#f1f1f1]">
      {children}
  </div>
)

export default Layout